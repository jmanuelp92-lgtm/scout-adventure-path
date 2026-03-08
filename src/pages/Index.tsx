import { useState } from "react";
import { stages, getEncountersByStage } from "@/data/encounters";
import EncounterCard from "@/components/EncounterCard";

const stageEmojis = ["🐾", "🦊", "🏕️", "🦅", "🐺"];

export default function Index() {
  const [activeStage, setActiveStage] = useState(1);
  const stageEncounters = getEncountersByStage(activeStage);
  const currentStage = stages.find(s => s.numero === activeStage)!;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="bg-primary text-primary-foreground py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
            🐺 Escuela de Manada
          </h1>
          <p className="text-lg opacity-90 font-body">
            50 encuentros progresivos para formar grandes lobatos
          </p>
          <p className="text-sm mt-2 opacity-70">
            3 horas por encuentro · 5 etapas · Juegos, técnica y aventura
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Stage selector */}
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
              <span>{stageEmojis[stage.numero - 1]}</span>
              {stage.nombre}
            </button>
          ))}
        </div>

        {/* Stage description */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <h2 className="font-display font-bold text-lg mb-1">
            Etapa {currentStage.numero}: {currentStage.nombre}
          </h2>
          <p className="text-sm text-muted-foreground">
            {currentStage.descripcion}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Encuentros {currentStage.encuentros[0]} al {currentStage.encuentros[currentStage.encuentros.length - 1]}
          </p>
        </div>

        {/* Encounter list */}
        <div className="space-y-3">
          {stageEncounters.map((encounter) => (
            <EncounterCard key={encounter.id} encounter={encounter} />
          ))}
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground border-t border-border mt-8">
        <p>🐺 Siempre Mejor · Escuela de Manada Scout</p>
      </footer>
    </div>
  );
}
