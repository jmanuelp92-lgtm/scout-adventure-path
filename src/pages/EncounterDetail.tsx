import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Target, Quote } from "lucide-react";
import { getEncounterByBranchAndId, getStagesByBranch } from "@/data/encounters-index";
import { getBranchById } from "@/data/branches";
import ActivityBlock from "@/components/ActivityBlock";
import logoScout from "@/assets/logo-scout.png";

export default function EncounterDetail() {
  const { branchId, id } = useParams();
  const encounter = getEncounterByBranchAndId(branchId || "", Number(id));
  const branch = getBranchById(branchId || "");
  const stages = getStagesByBranch(branchId || "");

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
