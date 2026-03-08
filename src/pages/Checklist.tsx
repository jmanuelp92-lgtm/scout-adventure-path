import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Plus, Trash2, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

interface CheckItem {
  id: string;
  texto: string;
  checked: boolean;
}

interface CheckCategory {
  id: string;
  nombre: string;
  icono: string;
  items: CheckItem[];
}

interface ChecklistData {
  [templateId: string]: CheckCategory[];
}

const STORAGE_KEY = "scout-checklists";

const templates: { id: string; nombre: string; icono: string; descripcion: string; categorias: { nombre: string; icono: string; items: string[] }[] }[] = [
  {
    id: "campamento",
    nombre: "Campamento",
    icono: "🏕️",
    descripcion: "Todo lo necesario para un campamento de fin de semana",
    categorias: [
      {
        nombre: "Documentos y Permisos",
        icono: "📋",
        items: [
          "Permisos firmados por los padres",
          "Lista de asistentes con contactos de emergencia",
          "Registro de alergias y condiciones médicas",
          "Seguro de accidentes vigente",
          "Permiso del lugar de campamento",
          "Itinerario impreso para padres y dirigentes",
        ],
      },
      {
        nombre: "Equipo Personal",
        icono: "🎒",
        items: [
          "Mochila de campamento",
          "Saco de dormir",
          "Aislante o colchoneta",
          "Carpa (verificar que esté completa)",
          "Linterna con pilas extra",
          "Cantimplora o botella de agua",
          "Plato, vaso y cubiertos personales",
          "Ropa de cambio (2-3 mudas)",
          "Ropa de lluvia / poncho",
          "Zapatos extra / sandalias",
          "Pañoleta scout",
          "Útiles de aseo personal",
          "Protector solar y repelente",
          "Gorra o sombrero",
        ],
      },
      {
        nombre: "Equipo de Grupo",
        icono: "⛺",
        items: [
          "Carpas suficientes para todos",
          "Plásticos o lonas protectoras",
          "Cuerdas (mínimo 20 metros)",
          "Estacas extra",
          "Hacha y sierra (si es permitido)",
          "Pala para letrina y fogata",
          "Bandera del grupo",
          "Megáfono o silbato",
        ],
      },
      {
        nombre: "Cocina y Alimentación",
        icono: "🍳",
        items: [
          "Menú planificado para cada comida",
          "Alimentos no perecederos",
          "Agua potable suficiente",
          "Ollas, sartén, cucharón",
          "Estufa de campamento o leña",
          "Fósforos/encendedor (2 fuentes)",
          "Bolsas de basura (varias)",
          "Jabón y esponja para lavar",
          "Papel aluminio",
          "Tabla de cortar y cuchillo",
        ],
      },
      {
        nombre: "Salud y Seguridad",
        icono: "🏥",
        items: [
          "Botiquín completo",
          "Suero oral",
          "Medicamentos de scouts con condiciones",
          "Termómetro",
          "Manual de primeros auxilios",
          "Teléfonos de emergencia del área",
          "Radio o celular cargado",
          "Silbato de emergencia",
        ],
      },
      {
        nombre: "Actividades y Programa",
        icono: "📖",
        items: [
          "Programa del campamento impreso",
          "Materiales para actividades",
          "Cuerdas para prácticas de nudos",
          "Brújula",
          "Material para fogata de consejo",
          "Cancionero",
          "Juegos preparados",
          "Materiales de manualidades (si aplica)",
        ],
      },
    ],
  },
  {
    id: "reunion",
    nombre: "Reunión Semanal",
    icono: "📅",
    descripcion: "Lista para preparar una reunión ordinaria en el local",
    categorias: [
      {
        nombre: "Antes de la Reunión",
        icono: "✅",
        items: [
          "Revisar el programa del encuentro",
          "Preparar materiales de las actividades",
          "Confirmar asistencia de dirigentes",
          "Verificar espacio disponible y limpio",
          "Cargar celular / dispositivos",
          "Revisar si hay cumpleaños o fechas especiales",
        ],
      },
      {
        nombre: "Materiales Generales",
        icono: "📦",
        items: [
          "Bandera del grupo y de patrullas",
          "Libro de asistencia",
          "Silbato",
          "Cuerdas para prácticas",
          "Marcadores y papel bond",
          "Cinta adhesiva",
          "Parlante o bocina (si se necesita)",
          "Botiquín básico",
        ],
      },
      {
        nombre: "Materiales del Encuentro",
        icono: "🎯",
        items: [
          "Material específico de la actividad técnica",
          "Material para el juego principal",
          "Material para la actividad de reflexión",
          "Premios o reconocimientos (si aplica)",
        ],
      },
      {
        nombre: "Al Finalizar",
        icono: "🏁",
        items: [
          "Tomar asistencia",
          "Guardar materiales",
          "Limpiar el espacio",
          "Evaluar la reunión con los dirigentes",
          "Anotar observaciones para la próxima",
          "Informar a padres (si es necesario)",
        ],
      },
    ],
  },
  {
    id: "salida",
    nombre: "Salida / Excursión",
    icono: "🥾",
    descripcion: "Checklist para salidas de un día fuera del local",
    categorias: [
      {
        nombre: "Logística",
        icono: "🚌",
        items: [
          "Transporte confirmado (ida y vuelta)",
          "Punto de encuentro definido y comunicado",
          "Hora de salida y regreso claras",
          "Permisos firmados de los padres",
          "Dinero o fondo del grupo",
          "Contacto del lugar de destino",
        ],
      },
      {
        nombre: "Equipo Personal",
        icono: "🎒",
        items: [
          "Mochila de día",
          "Agua suficiente (mínimo 1.5 litros)",
          "Almuerzo y snacks",
          "Protector solar y gorra",
          "Ropa cómoda y zapatos adecuados",
          "Pañoleta scout",
          "Documento de identidad",
        ],
      },
      {
        nombre: "Equipo del Grupo",
        icono: "🧰",
        items: [
          "Botiquín de primeros auxilios",
          "Lista de asistentes con emergencias",
          "Registro de alergias",
          "Celular cargado con crédito",
          "Mapa del lugar o ruta",
          "Silbato",
          "Bolsas de basura",
        ],
      },
      {
        nombre: "Programa",
        icono: "📋",
        items: [
          "Actividades planificadas",
          "Materiales para actividades",
          "Plan B por clima o imprevistos",
          "Responsables asignados por actividad",
        ],
      },
    ],
  },
];

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function initTemplate(templateId: string): CheckCategory[] {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return [];
  return template.categorias.map((cat) => ({
    id: generateId(),
    nombre: cat.nombre,
    icono: cat.icono,
    items: cat.items.map((texto) => ({ id: generateId(), texto, checked: false })),
  }));
}

function loadChecklists(): ChecklistData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

function saveChecklists(data: ChecklistData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function Checklist() {
  const [data, setData] = useState<ChecklistData>(loadChecklists);
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [newItemCat, setNewItemCat] = useState<string | null>(null);
  const [newItemText, setNewItemText] = useState("");

  useEffect(() => { saveChecklists(data); }, [data]);

  const activeData = activeTemplate ? data[activeTemplate] : null;

  const ensureTemplate = (id: string) => {
    if (!data[id]) {
      setData((prev) => ({ ...prev, [id]: initTemplate(id) }));
    }
    setActiveTemplate(id);
    setExpandedCat(null);
  };

  const toggleItem = (catId: string, itemId: string) => {
    if (!activeTemplate) return;
    setData((prev) => {
      const cats = (prev[activeTemplate] || []).map((cat) =>
        cat.id === catId
          ? { ...cat, items: cat.items.map((it) => (it.id === itemId ? { ...it, checked: !it.checked } : it)) }
          : cat
      );
      return { ...prev, [activeTemplate]: cats };
    });
  };

  const addItem = (catId: string) => {
    if (!activeTemplate || !newItemText.trim()) return;
    setData((prev) => {
      const cats = (prev[activeTemplate] || []).map((cat) =>
        cat.id === catId
          ? { ...cat, items: [...cat.items, { id: generateId(), texto: newItemText.trim(), checked: false }] }
          : cat
      );
      return { ...prev, [activeTemplate]: cats };
    });
    setNewItemText("");
    setNewItemCat(null);
  };

  const removeItem = (catId: string, itemId: string) => {
    if (!activeTemplate) return;
    setData((prev) => {
      const cats = (prev[activeTemplate] || []).map((cat) =>
        cat.id === catId ? { ...cat, items: cat.items.filter((it) => it.id !== itemId) } : cat
      );
      return { ...prev, [activeTemplate]: cats };
    });
  };

  const resetTemplate = () => {
    if (!activeTemplate) return;
    if (!confirm("¿Reiniciar esta checklist? Se perderán los ítems personalizados.")) return;
    setData((prev) => ({ ...prev, [activeTemplate]: initTemplate(activeTemplate) }));
  };

  const totalItems = activeData?.reduce((sum, cat) => sum + cat.items.length, 0) || 0;
  const checkedItems = activeData?.reduce((sum, cat) => sum + cat.items.filter((i) => i.checked).length, 0) || 0;
  const progress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-orange-700 to-amber-500 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">✅ Checklist Scout</h1>
          <p className="text-sm opacity-80">Listas de verificación para no olvidar nada</p>
          <p className="text-xs opacity-60 mt-1">3 plantillas · Personalizable · Se guarda en tu celular</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {!activeTemplate ? (
          /* Template selection */
          <div className="space-y-3">
            <h2 className="font-display font-bold text-lg text-foreground mb-2">Elige una checklist</h2>
            {templates.map((t) => {
              const saved = data[t.id];
              const savedTotal = saved?.reduce((s, c) => s + c.items.length, 0) || 0;
              const savedChecked = saved?.reduce((s, c) => s + c.items.filter((i) => i.checked).length, 0) || 0;
              const hasProgress = saved && savedChecked > 0;

              return (
                <button
                  key={t.id}
                  onClick={() => ensureTemplate(t.id)}
                  className="w-full text-left rounded-xl border border-border bg-card shadow-sm p-4 hover:bg-accent/30 transition-colors flex items-center gap-4"
                >
                  <span className="text-3xl">{t.icono}</span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground">{t.nombre}</h3>
                    <p className="text-sm text-muted-foreground">{t.descripcion}</p>
                    {hasProgress && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${Math.round((savedChecked / savedTotal) * 100)}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{savedChecked}/{savedTotal}</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          /* Active checklist */
          <>
            <button
              onClick={() => setActiveTemplate(null)}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
            >
              <ArrowLeft className="w-3 h-3" /> Volver a las checklists
            </button>

            {/* Progress */}
            <div className="bg-card border border-border rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display font-bold text-foreground">
                  {templates.find((t) => t.id === activeTemplate)?.icono}{" "}
                  {templates.find((t) => t.id === activeTemplate)?.nombre}
                </h2>
                <button onClick={resetTemplate} className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1">
                  <RotateCcw className="w-3 h-3" /> Reiniciar
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? "bg-green-500" : "bg-primary"}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{checkedItems}/{totalItems}</span>
              </div>
              {progress === 100 && (
                <p className="text-sm text-green-600 font-semibold mt-2 text-center">🎉 ¡Todo listo! No falta nada.</p>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-3">
              {activeData?.map((cat) => {
                const catChecked = cat.items.filter((i) => i.checked).length;
                const catTotal = cat.items.length;
                const isExpanded = expandedCat === cat.id;
                const allDone = catChecked === catTotal && catTotal > 0;

                return (
                  <div key={cat.id} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                    <button
                      onClick={() => setExpandedCat(isExpanded ? null : cat.id)}
                      className="w-full text-left p-4 hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{allDone ? "✅" : cat.icono}</span>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-sm text-foreground">{cat.nombre}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 bg-muted rounded-full h-1.5 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${allDone ? "bg-green-500" : "bg-primary"}`}
                                style={{ width: `${catTotal > 0 ? (catChecked / catTotal) * 100 : 0}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{catChecked}/{catTotal}</span>
                          </div>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-border divide-y divide-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {cat.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 px-4 py-2.5 group">
                            <button
                              onClick={() => toggleItem(cat.id, item.id)}
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                                item.checked
                                  ? "bg-primary border-primary text-primary-foreground"
                                  : "border-border hover:border-primary"
                              }`}
                            >
                              {item.checked && <Check className="w-3 h-3" />}
                            </button>
                            <span className={`text-sm flex-1 ${item.checked ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {item.texto}
                            </span>
                            <button
                              onClick={() => removeItem(cat.id, item.id)}
                              className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}

                        {/* Add item */}
                        {newItemCat === cat.id ? (
                          <div className="px-4 py-2.5 flex gap-2">
                            <input
                              type="text"
                              value={newItemText}
                              onChange={(e) => setNewItemText(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && addItem(cat.id)}
                              placeholder="Nuevo ítem..."
                              autoFocus
                              className="flex-1 text-sm bg-muted border border-border rounded px-2 py-1 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button
                              onClick={() => addItem(cat.id)}
                              className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded font-medium"
                            >
                              Agregar
                            </button>
                            <button
                              onClick={() => { setNewItemCat(null); setNewItemText(""); }}
                              className="text-xs text-muted-foreground px-2"
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setNewItemCat(cat.id)}
                            className="w-full px-4 py-2.5 text-sm text-primary hover:bg-accent/30 flex items-center gap-2 transition-colors"
                          >
                            <Plus className="w-4 h-4" /> Agregar ítem
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
