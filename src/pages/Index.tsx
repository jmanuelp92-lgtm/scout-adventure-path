import { useState } from "react";
import { Link } from "react-router-dom";
import { branches } from "@/data/branches";
import { techniques } from "@/data/techniques";
import logoScout from "@/assets/logo-scout.png";

const branchColors: Record<string, string> = {
  manada: "from-amber-600 to-yellow-500",
  tropa: "from-emerald-700 to-green-500",
  comunidad: "from-blue-700 to-cyan-500",
  clan: "from-red-700 to-orange-500",
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src={logoScout} alt="Logo Grupo Scout 2 Caballeros de Don Bosco" className="w-28 h-28 mx-auto mb-4 rounded-full object-cover bg-white shadow-lg" />
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">
            Escuela Scout
          </h1>
          <p className="font-display text-lg opacity-90">
            Grupo Scout 2 Caballeros de Don Bosco
          </p>
          <p className="text-sm opacity-70">Cúcuta — Colombia</p>
          <p className="text-xs mt-2 opacity-60">
            200 encuentros · 4 ramas · 3 horas cada uno
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="font-display text-xl font-bold mb-4 text-center">Elige tu rama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {branches.map((branch) => (
            <Link
              key={branch.id}
              to={`/${branch.id}`}
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${branchColors[branch.id]} p-6 text-white`}>
                <span className="text-4xl mb-3 block">{branch.icono}</span>
                <h3 className="font-display text-2xl font-bold">{branch.nombre}</h3>
                <p className="text-sm opacity-80 mt-1">{branch.edades}</p>
              </div>
              <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
                <p className="text-sm text-muted-foreground">{branch.descripcion}</p>
                <p className="text-xs text-primary font-semibold mt-2">50 encuentros · 5 etapas →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tools Section */}
        <h2 className="font-display text-xl font-bold mb-4 mt-8 text-center">Herramientas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/cancionero"
            className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-purple-700 to-pink-500 p-6 text-white">
              <span className="text-4xl mb-3 block">🎵</span>
              <h3 className="font-display text-2xl font-bold">Cancionero</h3>
              <p className="text-sm opacity-80 mt-1">Canciones para cada momento</p>
            </div>
            <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
              <p className="text-sm text-muted-foreground">Apertura, fogata, marcha, despedida y más</p>
              <p className="text-xs text-primary font-semibold mt-2">20 canciones · 7 categorías →</p>
            </div>
          </Link>
          <Link
            to="/tecnicas"
            className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-amber-700 to-yellow-500 p-6 text-white">
              <span className="text-4xl mb-3 block">🪢</span>
              <h3 className="font-display text-2xl font-bold">Nudos y Técnicas</h3>
              <p className="text-sm opacity-80 mt-1">Guía práctica paso a paso</p>
            </div>
            <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
              <p className="text-sm text-muted-foreground">Nudos, señales de pista, primeros auxilios y campismo</p>
              <p className="text-xs text-primary font-semibold mt-2">{techniques.length} técnicas · 4 categorías →</p>
            </div>
          </Link>
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
