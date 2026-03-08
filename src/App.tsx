import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BranchView from "./pages/BranchView";
import EncounterDetail from "./pages/EncounterDetail";
import Cancionero from "./pages/Cancionero";
import Tecnicas from "./pages/Tecnicas";
import Juegos from "./pages/Juegos";
import Planificador from "./pages/Planificador";
import ManualSalud from "./pages/ManualSalud";
import NotFound from "./pages/NotFound";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PWAInstallPrompt />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cancionero" element={<Cancionero />} />
          <Route path="/tecnicas" element={<Tecnicas />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/planificador" element={<Planificador />} />
          <Route path="/manual-salud" element={<ManualSalud />} />
          <Route path="/:branchId" element={<BranchView />} />
          <Route path="/:branchId/encuentro/:id" element={<EncounterDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
