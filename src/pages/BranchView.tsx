import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getBranchById } from "@/data/branches";
import { getStagesByBranch, getEncountersByBranchAndStage } from "@/data/encounters-index";
import EncounterCard from "@/components/EncounterCard";
import logoScout from "@/assets/logo-scout.png";

export default function BranchView() {
  const { branchId } = useParams();
  const branch = getBranchById(branchId || "");
  const stages = getStagesByBranch(branchId || "");
  const [activeStage, setActiveStage] = useState(1);

  if (!branch || stages.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-2">Rama no encontrada</h1>
          <Link to="/" className="text-primary underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const stageEncounters = getEncountersByBranchAndStage(branchId!, activeStage);
  const currentStage = stages.find(s => s.numero === activeStage)!;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 mb-3">
            <ArrowLeft className="w-4 h-4" /> Volver a ramas
          </Link>
          <div className="text-center">
            <span className="text-4xl mb-2 block">{branch.icono}</span>
            <h1 className="font-display text-3xl font-bold mb-1">{branch.nombre}</h1>
            <p className="text-sm opacity-80">{branch.edades}</p>
            <p className="text-xs mt-1 opacity-60">50 encuentros · 5 etapas · 3 horas cada uno</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {stages.map((stage) => (
            <button
              key={stage.numero}
              onClick={() => setActiveStage(stage.numero)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-display font-semibold text-sm whitespace-nowrap transition-all ${
                activeStage === stage.numero
                  ? `stage-badge-${stage.numero} shadow-md scale-105`
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              <span>{stage.icono}</span>
              {stage.nombre}
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <h2 className="font-display font-bold text-lg mb-1">
            Etapa {currentStage.numero}: {currentStage.nombre}
          </h2>
          <p className="text-sm text-muted-foreground">{currentStage.descripcion}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Encuentros {currentStage.encuentros[0]} al {currentStage.encuentros[currentStage.encuentros.length - 1]}
          </p>
        </div>

        <div className="space-y-3">
          {stageEncounters.map((encounter) => (
            <EncounterCard key={encounter.id} encounter={encounter} branchId={branchId!} />
          ))}
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground border-t border-border mt-8">
        <img src={logoScout} alt="Logo" className="w-10 h-10 mx-auto mb-2 rounded-full object-cover" />
        <p className="font-display">Grupo Scout 2 Caballeros de Don Bosco</p>
        <p className="text-xs opacity-60 mt-1">Cúcuta — Colombia · Siempre Mejor</p>
      </footer>
    </div>
  );
}
