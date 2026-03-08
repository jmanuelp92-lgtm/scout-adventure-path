export interface Activity {
  tipo: "ceremonia" | "juego" | "técnica" | "descanso" | "actividad" | "reflexión";
  titulo: string;
  duracion: number;
  descripcion: string;
  materiales?: string[];
  instrucciones: string[];
}

export interface Encounter {
  id: number;
  titulo: string;
  etapa: number;
  objetivo: string;
  lema: string;
  actividades: Activity[];
}

export interface Stage {
  numero: number;
  nombre: string;
  descripcion: string;
  icono: string;
  encuentros: number[];
}
