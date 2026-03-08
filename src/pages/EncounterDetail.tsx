import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Target, Quote, FileDown, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getEncounterByBranchAndId, getStagesByBranch } from "@/data/encounters-index";
import { getBranchById } from "@/data/branches";
import ActivityBlock from "@/components/ActivityBlock";
import logoScout from "@/assets/logo-scout.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Helper: load image as base64 for jsPDF
function loadImageAsBase64(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = src;
  });
}

export default function EncounterDetail() {
  const { branchId, id } = useParams();
  const encounter = getEncounterByBranchAndId(branchId || "", Number(id));
  const branch = getBranchById(branchId || "");
  const stages = getStagesByBranch(branchId || "");
  const [executionDate, setExecutionDate] = useState<Date>();

  if (!encounter || !branch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-2">Encuentro no encontrado</h1>
          <Link to="/" className="text-primary underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const stageName = stages.find(s => s.numero === encounter.etapa)?.nombre || "";
  const totalMinutes = encounter.actividades.reduce((sum, a) => sum + a.duracion, 0);
  const prevId = encounter.id > 1 ? encounter.id - 1 : null;
  const nextId = encounter.id < 50 ? encounter.id + 1 : null;

  const handleExportPDF = async () => {
    const { default: jsPDF } = await import("jspdf");

    const pdf = new jsPDF("p", "mm", "letter");
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const marginL = 18;
    const marginR = 18;
    const contentW = pageW - marginL - marginR;
    let y = 15;

    const checkPage = (needed: number) => {
      if (y + needed > pageH - 20) {
        pdf.addPage();
        y = 15;
        drawHeaderLine();
      }
    };

    const drawHeaderLine = () => {
      pdf.setDrawColor(26, 86, 50);
      pdf.setLineWidth(0.5);
      pdf.line(marginL, y, pageW - marginR, y);
      y += 6;
    };

    // --- HEADER WITH LOGO ---
    let logoBase64: string | null = null;
    try {
      logoBase64 = await loadImageAsBase64(logoScout);
    } catch { /* skip logo */ }

    if (logoBase64) {
      pdf.addImage(logoBase64, "PNG", marginL, y, 18, 18);
    }

    const headerX = logoBase64 ? marginL + 22 : marginL;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.setTextColor(26, 86, 50);
    pdf.text("Escuela Scout", headerX, y + 7);
    pdf.setFontSize(11);
    pdf.setTextColor(60, 60, 60);
    pdf.text("Grupo Scout 2 Caballeros de Don Bosco", headerX, y + 13);
    pdf.setFontSize(9);
    pdf.setTextColor(130, 130, 130);
    pdf.text("Cúcuta — Colombia", headerX, y + 18);

    y += 24;
    pdf.setDrawColor(26, 86, 50);
    pdf.setLineWidth(0.8);
    pdf.line(marginL, y, pageW - marginR, y);
    y += 8;

    // --- META INFO ---
    pdf.setFontSize(10);
    pdf.setTextColor(80, 80, 80);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Rama: ${branch.nombre}`, marginL, y);
    pdf.text(`Etapa ${encounter.etapa}: ${stageName}`, marginL + 55, y);
    pdf.text(`Duración: ${totalMinutes} min`, marginL + 120, y);
    y += 6;

    if (executionDate) {
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(26, 86, 50);
      pdf.text(`Fecha de ejecución: ${format(executionDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}`, marginL, y);
      pdf.setFont("helvetica", "normal");
      y += 6;
    }

    y += 4;

    // --- ENCOUNTER TITLE ---
    pdf.setFillColor(240, 247, 243);
    pdf.roundedRect(marginL, y, contentW, 28, 3, 3, "F");
    pdf.setFontSize(15);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(26, 26, 26);
    const titleLines = pdf.splitTextToSize(`Encuentro #${encounter.id}: ${encounter.titulo}`, contentW - 10);
    pdf.text(titleLines, marginL + 5, y + 8);
    y += 12 + titleLines.length * 5;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(60, 60, 60);
    const objLines = pdf.splitTextToSize(`Objetivo: ${encounter.objetivo}`, contentW - 10);
    pdf.text(objLines, marginL + 5, y);
    y += objLines.length * 5 + 2;

    pdf.setFont("helvetica", "italic");
    pdf.setTextColor(100, 100, 100);
    const lemaLines = pdf.splitTextToSize(`"${encounter.lema}"`, contentW - 10);
    pdf.text(lemaLines, marginL + 5, y);
    y += lemaLines.length * 5 + 8;

    // --- ACTIVITIES ---
    const typeLabels: Record<string, string> = {
      ceremonia: "Ceremonia", juego: "Juego", técnica: "Técnica",
      descanso: "Descanso", actividad: "Actividad", reflexión: "Reflexión",
    };

    encounter.actividades.forEach((act, i) => {
      // Estimate height needed
      const descLines = pdf.splitTextToSize(act.descripcion, contentW - 12);
      const instrLines = act.instrucciones.flatMap(inst => pdf.splitTextToSize(`• ${inst}`, contentW - 18));
      const matText = act.materiales?.length ? `Materiales: ${act.materiales.join(", ")}` : "";
      const matLines = matText ? pdf.splitTextToSize(matText, contentW - 12) : [];
      const blockH = 18 + descLines.length * 4.5 + matLines.length * 4.5 + instrLines.length * 4.5 + 10;

      checkPage(Math.min(blockH, 60));

      // Activity header bar
      pdf.setFillColor(26, 86, 50);
      pdf.roundedRect(marginL, y, contentW, 8, 2, 2, "F");
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(255, 255, 255);
      const label = typeLabels[act.tipo] || act.tipo;
      pdf.text(`${i + 1}. ${label.toUpperCase()} · ${act.duracion} MIN`, marginL + 4, y + 5.5);
      y += 11;

      // Title
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(26, 26, 26);
      const actTitleLines = pdf.splitTextToSize(act.titulo, contentW - 8);
      pdf.text(actTitleLines, marginL + 4, y);
      y += actTitleLines.length * 5 + 2;

      // Description
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60, 60, 60);
      descLines.forEach((line: string) => {
        checkPage(5);
        pdf.text(line, marginL + 4, y);
        y += 4.5;
      });
      y += 2;

      // Materials
      if (matLines.length > 0) {
        checkPage(matLines.length * 4.5 + 4);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(80, 80, 80);
        pdf.setFontSize(9);
        matLines.forEach((line: string) => {
          pdf.text(line, marginL + 4, y);
          y += 4.5;
        });
        pdf.setFont("helvetica", "normal");
        y += 2;
      }

      // Instructions
      if (instrLines.length > 0) {
        checkPage(8);
        pdf.setFontSize(9);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(26, 26, 26);
        pdf.text("Instrucciones:", marginL + 4, y);
        y += 5;
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(50, 50, 50);
        instrLines.forEach((line: string) => {
          checkPage(5);
          pdf.text(line, marginL + 8, y);
          y += 4.5;
        });
      }

      y += 8;
    });

    // --- FOOTER ---
    checkPage(15);
    pdf.setDrawColor(26, 86, 50);
    pdf.setLineWidth(0.5);
    pdf.line(marginL, y, pageW - marginR, y);
    y += 5;
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text("Grupo Scout 2 Caballeros de Don Bosco · Cúcuta, Colombia · Siempre Mejor", pageW / 2, y, { align: "center" });

    const dateStr = executionDate ? format(executionDate, "yyyy-MM-dd") : "sin-fecha";
    pdf.save(`${branch.nombre}-encuentro-${encounter.id}-${dateStr}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to={`/${branchId}`} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <img src={logoScout} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground font-medium">
              {branch.nombre} · Etapa {encounter.etapa}: {stageName}
            </p>
            <h1 className="font-display font-bold text-lg truncate">
              #{encounter.id} — {encounter.titulo}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Date picker & PDF export */}
        <div className="flex flex-wrap items-center gap-3 mb-6 bg-card border border-border rounded-lg p-4">
          <div className="flex-1 min-w-[200px]">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Fecha de ejecución</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !executionDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {executionDate ? format(executionDate, "PPP", { locale: es }) : "Seleccionar fecha..."}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={executionDate}
                  onSelect={setExecutionDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-end">
            <Button onClick={handleExportPDF} className="gap-2">
              <FileDown className="w-4 h-4" />
              Exportar PDF
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 border border-border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{totalMinutes} minutos</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 border border-border">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm">{encounter.objetivo}</span>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-6 flex items-start gap-3">
          <Quote className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="font-display text-primary font-semibold italic">
            "{encounter.lema}"
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {encounter.actividades.map((activity, index) => (
            <ActivityBlock key={index} activity={activity} index={index} />
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-border pt-4">
          {prevId ? (
            <Link to={`/${branchId}/encuentro/${prevId}`} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" /> Encuentro #{prevId}
            </Link>
          ) : <div />}
          {nextId ? (
            <Link to={`/${branchId}/encuentro/${nextId}`} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              Encuentro #{nextId} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}