import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Calendar, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { branches } from "@/data/branches";
import { getStagesByBranch, getEncountersByBranch } from "@/data/encounters-index";

interface PlanData {
  completados: Record<string, number[]>; // branchId -> encounter ids
  fechas: Record<string, Record<number, string>>; // branchId -> { encId -> date string }
}

const STORAGE_KEY = "scout-planificador";

function loadPlan(): PlanData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completados: {}, fechas: {} };
}

function savePlan(data: PlanData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const branchColors: Record<string, string> = {
  manada: "from-amber-600 to-yellow-500",
  tropa: "from-emerald-700 to-green-500",
  comunidad: "from-blue-700 to-cyan-500",
  clan: "from-red-700 to-orange-500",
};

export default function Planificador() {
  const [plan, setPlan] = useState<PlanData>(loadPlan);
  const [selectedBranch, setSelectedBranch] = useState(branches[0].id);
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  useEffect(() => { savePlan(plan); }, [plan]);

  const stages = useMemo(() => getStagesByBranch(selectedBranch), [selectedBranch]);
  const encounters = useMemo(() => getEncountersByBranch(selectedBranch), [selectedBranch]);

  const completados = plan.completados[selectedBranch] || [];
  const fechas = plan.fechas[selectedBranch] || {};
  const totalEncounters = encounters.length;
  const completedCount = completados.length;
  const progress = totalEncounters > 0 ? Math.round((completedCount / totalEncounters) * 100) : 0;

  const toggleComplete = (encId: number) => {
    setPlan((prev) => {
      const branchCompleted = prev.completados[selectedBranch] || [];
      const updated = branchCompleted.includes(encId)
        ? branchCompleted.filter((id) => id !== encId)
        : [...branchCompleted, encId];
      return { ...prev, completados: { ...prev.completados, [selectedBranch]: updated } };
    });
  };

  const setFecha = (encId: number, fecha: string) => {
    setPlan((prev) => {
      const branchFechas = { ...(prev.fechas[selectedBranch] || {}) };
      if (fecha) {
        branchFechas[encId] = fecha;
      } else {
        delete branchFechas[encId];
      }
      return { ...prev, fechas: { ...prev.fechas, [selectedBranch]: branchFechas } };
    });
  };

  const resetBranch = () => {
    if (!confirm(`¿Reiniciar todo el progreso de ${branches.find(b => b.id === selectedBranch)?.nombre}?`)) return;
    setPlan((prev) => {
      const newComp = { ...prev.completados };
      const newFechas = { ...prev.fechas };
      delete newComp[selectedBranch];
      delete newFechas[selectedBranch];
      return { completados: newComp, fechas: newFechas };
    });
  };

  const branch = branches.find((b) => b.id === selectedBranch)!;

  return (
    <div className="min-h-screen bg-background">
      <header className={`bg-gradient-to-br ${branchColors[selectedBranch]} text-white py-8 px-4 transition-all duration-300`}>
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">📅 Planificador</h1>
          <p className="text-sm opacity-80">Marca tu progreso y planifica las fechas de cada encuentro</p>

          {/* Progress bar */}
          <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs mt-1 opacity-80">
            {completedCount} de {totalEncounters} encuentros completados ({progress}%)
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Branch selector */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => { setSelectedBranch(b.id); setExpandedStage(null); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedBranch === b.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              <span>{b.icono}</span> {b.nombre}
            </button>
          ))}
        </div>

        {/* Reset button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={resetBranch}
            className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reiniciar progreso
          </button>
        </div>

        {/* Stages */}
        <div className="space-y-3">
          {stages.map((stage) => {
            const stageEncounters = encounters.filter((e) => stage.encuentros.includes(e.id));
            const stageCompleted = stageEncounters.filter((e) => completados.includes(e.id)).length;
            const stageProgress = stageEncounters.length > 0 ? Math.round((stageCompleted / stageEncounters.length) * 100) : 0;
            const isExpanded = expandedStage === stage.numero;

            return (
              <div key={stage.numero} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedStage(isExpanded ? null : stage.numero)}
                  className="w-full text-left p-4 hover:bg-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stage.icono}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-foreground text-sm">
                        Etapa {stage.numero}: {stage.nombre}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-300"
                            style={{ width: `${stageProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {stageCompleted}/{stageEncounters.length}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-border divide-y divide-border animate-in fade-in slide-in-from-top-2 duration-200">
                    {stageEncounters.map((enc) => {
                      const isCompleted = completados.includes(enc.id);
                      const fecha = fechas[enc.id] || "";
                      return (
                        <div key={enc.id} className="px-4 py-3 flex items-center gap-3">
                          <button
                            onClick={() => toggleComplete(enc.id)}
                            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                              isCompleted
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-border hover:border-primary"
                            }`}
                          >
                            {isCompleted && <Check className="w-4 h-4" />}
                          </button>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {enc.id}. {enc.titulo}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1">{enc.objetivo}</p>
                          </div>
                          <div className="shrink-0">
                            <input
                              type="date"
                              value={fecha}
                              onChange={(e) => setFecha(enc.id, e.target.value)}
                              className="text-xs bg-muted border border-border rounded px-2 py-1 text-foreground w-[120px]"
                              title="Fecha programada"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {stages.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-4xl mb-2">📅</p>
            <p className="font-medium">No hay etapas disponibles</p>
          </div>
        )}
      </main>
    </div>
  );
}
