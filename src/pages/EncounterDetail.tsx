import { useRef, useState } from "react";
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

export default function EncounterDetail() {
  const { branchId, id } = useParams();
  const encounter = getEncounterByBranchAndId(branchId || "", Number(id));
  const branch = getBranchById(branchId || "");
  const stages = getStagesByBranch(branchId || "");
  const [executionDate, setExecutionDate] = useState<Date>();
  const printRef = useRef<HTMLDivElement>(null);

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
    const { default: html2canvas } = await import("html2canvas-pro");
    const { default: jsPDF } = await import("jspdf");

    const element = printRef.current;
    if (!element) return;

    // Temporarily show the print content
    element.style.display = "block";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    element.style.display = "none";

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    // If content is taller than one page, split into multiple pages
    const pageContentHeight = pdfHeight * (imgWidth / pdfWidth);
    const totalPages = Math.ceil(imgHeight / pageContentHeight);

    for (let page = 0; page < totalPages; page++) {
      if (page > 0) pdf.addPage();
      const srcY = page * pageContentHeight;
      const srcH = Math.min(pageContentHeight, imgHeight - srcY);
      const destH = srcH * ratio;

      // Create a temporary canvas for this page slice
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = imgWidth;
      pageCanvas.height = srcH;
      const ctx = pageCanvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(canvas, 0, srcY, imgWidth, srcH, 0, 0, imgWidth, srcH);
        const pageImgData = pageCanvas.toDataURL("image/png");
        pdf.addImage(pageImgData, "PNG", 0, 0, pdfWidth, destH);
      }
    }

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

      {/* Hidden printable content for PDF */}
      <div
        ref={printRef}
        style={{ display: "none", width: "800px", padding: "40px", fontFamily: "'Nunito', sans-serif", backgroundColor: "#fff", color: "#1a1a1a" }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px", borderBottom: "3px solid #1a5632", paddingBottom: "16px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 4px 0", fontFamily: "'Fredoka', sans-serif" }}>
            Escuela Scout — Grupo Scout 2 Caballeros de Don Bosco
          </h1>
          <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>Cúcuta — Colombia</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", fontSize: "13px", color: "#555" }}>
          <span><strong>Rama:</strong> {branch.nombre}</span>
          <span><strong>Etapa {encounter.etapa}:</strong> {stageName}</span>
          <span><strong>Duración:</strong> {totalMinutes} min</span>
        </div>

        <div style={{ background: "#f0f7f3", border: "1px solid #c8e0d0", borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 8px 0", fontFamily: "'Fredoka', sans-serif" }}>
            Encuentro #{encounter.id}: {encounter.titulo}
          </h2>
          <p style={{ fontSize: "13px", margin: "0 0 4px 0" }}><strong>Objetivo:</strong> {encounter.objetivo}</p>
          <p style={{ fontSize: "13px", margin: "0 0 4px 0", fontStyle: "italic" }}>"{encounter.lema}"</p>
          {executionDate && (
            <p style={{ fontSize: "13px", margin: "8px 0 0 0", color: "#1a5632", fontWeight: "bold" }}>
              📅 Fecha de ejecución: {format(executionDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}
            </p>
          )}
        </div>

        {encounter.actividades.map((act, i) => {
          const typeLabels: Record<string, string> = {
            ceremonia: "🏳️ Ceremonia", juego: "🎮 Juego", técnica: "📖 Técnica",
            descanso: "☕ Descanso", actividad: "🔧 Actividad", reflexión: "❤️ Reflexión",
          };
          return (
            <div key={i} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", marginBottom: "12px", pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", color: "#888" }}>
                  {typeLabels[act.tipo] || act.tipo} · {act.duracion} min
                </span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 6px 0", fontFamily: "'Fredoka', sans-serif" }}>{act.titulo}</h3>
              <p style={{ fontSize: "13px", margin: "0 0 8px 0", color: "#444" }}>{act.descripcion}</p>
              {act.materiales && act.materiales.length > 0 && (
                <p style={{ fontSize: "12px", margin: "0 0 6px 0" }}>
                  <strong>Materiales:</strong> {act.materiales.join(", ")}
                </p>
              )}
              <div style={{ fontSize: "12px" }}>
                <strong>Instrucciones:</strong>
                <ol style={{ margin: "4px 0 0 20px", padding: 0 }}>
                  {act.instrucciones.map((inst, j) => (
                    <li key={j} style={{ marginBottom: "2px" }}>{inst}</li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: "2px solid #1a5632", paddingTop: "12px", marginTop: "24px", textAlign: "center", fontSize: "11px", color: "#888" }}>
          <p style={{ margin: 0 }}>Grupo Scout 2 Caballeros de Don Bosco · Cúcuta, Colombia · Siempre Mejor</p>
        </div>
      </div>
    </div>
  );
}
