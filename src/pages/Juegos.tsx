import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Clock, Users, ChevronDown, ChevronUp, Package } from "lucide-react";
import { games, gameCategories, Game } from "@/data/games";

const branchLabels: Record<string, { label: string; color: string }> = {
  manada: { label: "Manada", color: "bg-amber-100 text-amber-800" },
  tropa: { label: "Tropa", color: "bg-emerald-100 text-emerald-800" },
  comunidad: { label: "Comunidad", color: "bg-blue-100 text-blue-800" },
  clan: { label: "Clan", color: "bg-red-100 text-red-800" },
};

export default function Juegos() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("todos");
  const [selectedBranch, setSelectedBranch] = useState("todas");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return games.filter((g) => {
      const matchSearch =
        g.nombre.toLowerCase().includes(search.toLowerCase()) ||
        g.descripcion.toLowerCase().includes(search.toLowerCase());
      const matchType = selectedType === "todos" || g.tipo === selectedType;
      const matchBranch = selectedBranch === "todas" || g.ramas.includes(selectedBranch);
      return matchSearch && matchType && matchBranch;
    });
  }, [search, selectedType, selectedBranch]);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-indigo-700 to-violet-500 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">🎲 Juegos Scout</h1>
          <p className="text-sm opacity-80">Banco de juegos para cada momento y cada rama</p>
          <p className="text-xs opacity-60 mt-1">{games.length} juegos · Interior y exterior</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar juego..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
        </div>

        {/* Type filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
          {gameCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedType(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedType === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              <span>{cat.icono}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Branch filter */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedBranch("todas")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedBranch === "todas"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            Todas las ramas
          </button>
          {Object.entries(branchLabels).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setSelectedBranch(key)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedBranch === key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {val.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mb-3">
          {filtered.length} juego{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Game cards */}
        <div className="space-y-3">
          {filtered.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              expanded={expandedId === game.id}
              onToggle={() => setExpandedId(expandedId === game.id ? null : game.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-4xl mb-2">🎲</p>
            <p className="font-medium">No se encontraron juegos</p>
            <p className="text-sm">Intenta con otra búsqueda o filtro</p>
          </div>
        )}
      </main>
    </div>
  );
}

function GameCard({ game, expanded, onToggle }: { game: Game; expanded: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <button onClick={onToggle} className="w-full text-left p-4 hover:bg-accent/30 transition-colors">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">{game.icono}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-foreground">{game.nombre}</h3>
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{game.descripcion}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" /> {game.duracion} min
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="w-3 h-3" /> {game.participantes.min}-{game.participantes.max}
              </span>
              {game.ramas.map((r) => (
                <span key={r} className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${branchLabels[r]?.color}`}>
                  {branchLabels[r]?.label}
                </span>
              ))}
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-border pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Materiales */}
          <div className="mb-3">
            <h4 className="font-display font-semibold text-sm text-primary mb-1 flex items-center gap-1">
              <Package className="w-3.5 h-3.5" /> Materiales:
            </h4>
            <ul className="space-y-0.5 ml-1">
              {game.materiales.map((m, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-1.5">
                  <span>•</span><span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instrucciones */}
          <h4 className="font-display font-semibold text-sm text-primary mb-2">📋 Instrucciones:</h4>
          <ol className="space-y-2 ml-1">
            {game.instrucciones.map((paso, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-foreground">{paso}</span>
              </li>
            ))}
          </ol>

          {/* Variantes */}
          {game.variantes && game.variantes.length > 0 && (
            <div className="mt-3 bg-muted/50 rounded-lg p-3">
              <h4 className="font-display font-semibold text-sm text-accent-foreground mb-1">💡 Variantes:</h4>
              <ul className="space-y-0.5">
                {game.variantes.map((v, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-1.5">
                    <span>•</span><span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
