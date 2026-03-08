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

// Re-export everything from branch files
export { stages as manadaStages, encounters as manadaEncounters } from "./encounters-manada";
export { tropaStages, tropaEncounters } from "./encounters-tropa";
export { comunidadStages, comunidadEncounters } from "./encounters-comunidad";
export { clanStages, clanEncounters } from "./encounters-clan";
export { branches, getBranchById } from "./branches";

import { stages as manadaStages, encounters as manadaEncounters } from "./encounters-manada";
import { tropaStages, tropaEncounters } from "./encounters-tropa";
import { comunidadStages, comunidadEncounters } from "./encounters-comunidad";
import { clanStages, clanEncounters } from "./encounters-clan";

const stagesMap: Record<string, Stage[]> = {
  manada: manadaStages,
  tropa: tropaStages,
  comunidad: comunidadStages,
  clan: clanStages,
};

const encountersMap: Record<string, Encounter[]> = {
  manada: manadaEncounters,
  tropa: tropaEncounters,
  comunidad: comunidadEncounters,
  clan: clanEncounters,
};

export function getStagesByBranch(branchId: string): Stage[] {
  return stagesMap[branchId] || [];
}

export function getEncountersByBranch(branchId: string): Encounter[] {
  return encountersMap[branchId] || [];
}

export function getEncountersByBranchAndStage(branchId: string, stageNum: number): Encounter[] {
  const encounters = encountersMap[branchId] || [];
  const stages = stagesMap[branchId] || [];
  const stage = stages.find(s => s.numero === stageNum);
  if (!stage) return [];
  return encounters.filter(e => stage.encuentros.includes(e.id));
}

export function getEncounterByBranchAndId(branchId: string, id: number): Encounter | undefined {
  const encounters = encountersMap[branchId] || [];
  return encounters.find(e => e.id === id);
}
