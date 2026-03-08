import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import type { Encounter } from "@/data/encounters";

interface EncounterCardProps {
  encounter: Encounter;
}

const stageColors: Record<number, string> = {
  1: "stage-badge-1",
  2: "stage-badge-2",
  3: "stage-badge-3",
  4: "stage-badge-4",
  5: "stage-badge-5",
};

const stageBorders: Record<number, string> = {
  1: "border-l-stage-1",
  2: "border-l-stage-2",
  3: "border-l-stage-3",
  4: "border-l-stage-4",
  5: "border-l-stage-5",
};

export default function EncounterCard({ encounter }: EncounterCardProps) {
  const totalMinutes = encounter.actividades.reduce((sum, a) => sum + a.duracion, 0);

  return (
    <Link
      to={`/encuentro/${encounter.id}`}
      className={`block bg-card rounded-lg border-l-4 ${stageBorders[encounter.etapa]} shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 p-4`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stageColors[encounter.etapa]}`}>
              #{encounter.id}
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              {totalMinutes} min
            </span>
          </div>
          <h3 className="font-display font-semibold text-foreground leading-tight mb-1">
            {encounter.titulo}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {encounter.objetivo}
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 mt-2" />
      </div>
    </Link>
  );
}
