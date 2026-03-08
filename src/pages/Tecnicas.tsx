import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ChevronDown, ChevronUp, Star } from "lucide-react";
import { techniques, techCategories, Technique } from "@/data/techniques";

const difficultyColors: Record<string, string> = {
  "fácil": "bg-green-100 text-green-800",
  "medio": "bg-yellow-100 text-yellow-800",
  "avanzado": "bg-red-100 text-red-800",
};

export default function Tecnicas() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = techniques.filter((t) => {
    const matchSearch =
      t.nombre.toLowerCase().includes(search.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "todas" || t.categoria === selectedCategory;
    return matchSearch && matchCategory;
  });

  const currentCat = techCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-gradient-to-br ${currentCat?.color || "from-amber-700 to-yellow-500"} text-white py-8 px-4 transition-all duration-300`}>
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">
            🪢 Nudos y Técnicas
          </h1>
          <p className="text-sm opacity-80">
            Guía práctica de nudos, señales, primeros auxilios y campismo
          </p>
          <p className="text-xs opacity-60 mt-1">
            {techniques.length} técnicas · 4 categorías
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar técnica..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              <span>{cat.icono}</span>
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground mb-3">
          {filtered.length} técnica{filtered.length !== 1 ? "s" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Cards */}
        <div className="space-y-3">
          {filtered.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              expanded={expandedId === tech.id}
              onToggle={() => setExpandedId(expandedId === tech.id ? null : tech.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-4xl mb-2">🔍</p>
            <p className="font-medium">No se encontraron técnicas</p>
            <p className="text-sm">Intenta con otra búsqueda o categoría</p>
          </div>
        )}
      </main>
    </div>
  );
}

function TechCard({ tech, expanded, onToggle }: { tech: Technique; expanded: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-3 hover:bg-accent/30 transition-colors"
      >
        <span className="text-2xl mt-0.5">{tech.icono}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display font-bold text-foreground">{tech.nombre}</h3>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${difficultyColors[tech.dificultad]}`}>
              {tech.dificultad}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{tech.descripcion}</p>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-border pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="font-display font-semibold text-sm text-primary mb-2">
            📋 Paso a paso:
          </h4>
          <ol className="space-y-2 ml-1">
            {tech.pasos.map((paso, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-foreground">{paso}</span>
              </li>
            ))}
          </ol>

          {tech.consejos && tech.consejos.length > 0 && (
            <div className="mt-3 bg-muted/50 rounded-lg p-3">
              <h4 className="font-display font-semibold text-sm text-accent-foreground mb-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5" /> Consejos:
              </h4>
              <ul className="space-y-1">
                {tech.consejos.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-1.5">
                    <span>•</span>
                    <span>{c}</span>
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
