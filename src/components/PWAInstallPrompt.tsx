import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSTip, setShowIOSTip] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // Detect iOS
    const ios = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    setIsIOS(ios);
    if (ios) setShowIOSTip(true);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setDeferredPrompt(null);
    setDismissed(true);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowIOSTip(false);
  };

  if (dismissed) return null;
  if (!deferredPrompt && !showIOSTip) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="bg-primary text-primary-foreground rounded-2xl shadow-2xl p-4 flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/20 shrink-0">
          <Download className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm">Instalar Escuela Scout</p>
          {isIOS ? (
            <p className="text-xs opacity-80 mt-0.5">
              Toca <strong>Compartir</strong> (↑) → <strong>"Agregar a inicio"</strong>
            </p>
          ) : (
            <p className="text-xs opacity-80 mt-0.5">
              Úsala sin internet como una app
            </p>
          )}
        </div>
        {!isIOS && (
          <button
            onClick={handleInstall}
            className="shrink-0 bg-primary-foreground text-primary font-display font-bold text-sm px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            Instalar
          </button>
        )}
        <button onClick={handleDismiss} className="shrink-0 p-1 opacity-60 hover:opacity-100">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
