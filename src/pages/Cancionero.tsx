import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Music } from "lucide-react";
import { songs, categorias, type Song } from "@/data/songs";
import logoScout from "@/assets/logo-scout.png";

export default function Cancionero() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSong, setExpandedSong] = useState<number | null>(null);

  const filtered = songs.filter((song) => {
    const matchCategory = activeCategory === "todas" || song.categoria === activeCategory;
    const matchSearch = song.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.letra.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const ramaColors: Record<string, string> = {
    todas: "bg-primary/10 text-primary",
    manada: "bg-amber-500/10 text-amber-700",
    tropa: "bg-emerald-500/10 text-emerald-700",
    comunidad: "bg-blue-500/10 text-blue-700",
    clan: "bg-red-500/10 text-red-700",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 mb-3">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="text-center">
            <span className="text-4xl mb-2 block">🎵</span>
            <h1 className="font-display text-3xl font-bold mb-1">Cancionero Scout</h1>
            <p className="text-sm opacity-80">Canciones para cada momento de la reunión</p>
            <p className="text-xs mt-1 opacity-60">{songs.length} canciones</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar canción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-display font-semibold text-xs whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              <span>{cat.icono}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Songs */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Music className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-display font-semibold">No se encontraron canciones</p>
            </div>
          )}
          {filtered.map((song) => (
            <div
              key={song.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedSong(expandedSong === song.id ? null : song.id)}
                className="w-full text-left p-4 flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <span className="text-lg">
                    {categorias.find((c) => c.id === song.categoria)?.icono || "🎵"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground truncate">{song.titulo}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-muted-foreground">
                      {categorias.find((c) => c.id === song.categoria)?.label}
                    </span>
                    {song.rama && song.rama !== "todas" && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ramaColors[song.rama]}`}>
                        {song.rama.charAt(0).toUpperCase() + song.rama.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
                <span className={`text-muted-foreground transition-transform ${expandedSong === song.id ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {expandedSong === song.id && (
                <div className="px-4 pb-4 border-t border-border pt-3">
                  <pre className="whitespace-pre-wrap text-sm text-foreground/80 leading-relaxed font-body">
                    {song.letra}
                  </pre>
                </div>
              )}
            </div>
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
