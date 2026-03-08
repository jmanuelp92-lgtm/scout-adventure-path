import { Clock, Gamepad2, BookOpen, Coffee, Wrench, Heart, Flag } from "lucide-react";
import type { Activity } from "@/data/encounters";

const typeConfig: Record<Activity["tipo"], { icon: typeof Clock; label: string; className: string }> = {
  ceremonia: { icon: Flag, label: "Ceremonia", className: "bg-primary/10 text-primary border-primary/20" },
  juego: { icon: Gamepad2, label: "Juego", className: "bg-accent/20 text-accent-foreground border-accent/30" },
  técnica: { icon: BookOpen, label: "Técnica", className: "bg-secondary/20 text-secondary border-secondary/30" },
  descanso: { icon: Coffee, label: "Descanso", className: "bg-muted text-muted-foreground border-border" },
  actividad: { icon: Wrench, label: "Actividad", className: "bg-primary/10 text-primary border-primary/20" },
  reflexión: { icon: Heart, label: "Reflexión", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

interface ActivityBlockProps {
  activity: Activity;
  index: number;
}

export default function ActivityBlock({ activity, index }: ActivityBlockProps) {
  const config = typeConfig[activity.tipo];
  const Icon = config.icon;

  return (
    <div className={`rounded-lg border p-4 ${config.className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/80 shadow-sm">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">
              {config.label}
            </span>
            <span className="flex items-center text-xs opacity-60">
              <Clock className="w-3 h-3 mr-1" />
              {activity.duracion} min
            </span>
          </div>
          <h4 className="font-display font-semibold text-base">{activity.titulo}</h4>
        </div>
      </div>

      <p className="text-sm mb-3 opacity-80">{activity.descripcion}</p>

      {activity.materiales && activity.materiales.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">Materiales:</p>
          <div className="flex flex-wrap gap-1.5">
            {activity.materiales.map((m, i) => (
              <span key={i} className="text-xs bg-background/60 px-2 py-0.5 rounded-full">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-60">Instrucciones:</p>
        <ol className="space-y-1.5">
          {activity.instrucciones.map((inst, i) => (
            <li key={i} className="text-sm flex gap-2">
              <span className="font-bold opacity-50 shrink-0">{i + 1}.</span>
              <span>{inst}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
