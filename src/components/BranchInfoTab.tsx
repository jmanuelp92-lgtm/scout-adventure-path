import {
  BookOpen, Heart, Hand, Users, ShieldCheck, Shirt, Volume2,
  Compass, Star, Flag, Church, UtensilsCrossed, Music, Info
} from "lucide-react";
import type { BranchInfo } from "@/data/branch-info";

interface BranchInfoTabProps {
  info: BranchInfo;
}

function InfoSection({ icon: Icon, title, children }: { icon: typeof BookOpen; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

export default function BranchInfoTab({ info }: BranchInfoTabProps) {
  return (
    <div className="space-y-4">
      {/* Lema */}
      <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Lema</p>
        <p className="font-display text-3xl font-bold">{info.lema}</p>
        <p className="text-sm opacity-70 mt-2">Patrono: {info.patrono}</p>
      </div>

      {/* Promesa */}
      <InfoSection icon={ShieldCheck} title="Promesa">
        <p className="italic font-medium">"{info.promesa}"</p>
      </InfoSection>

      {/* Ley */}
      <InfoSection icon={BookOpen} title={info.leyTitulo}>
        <ol className="space-y-2">
          {info.ley.map((art, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-bold text-primary shrink-0">{i + 1}.</span>
              <span>{art}</span>
            </li>
          ))}
        </ol>
      </InfoSection>

      {/* Máximas (solo Manada) */}
      {info.maximas && (
        <InfoSection icon={Star} title="Máximas del Lobato">
          <ol className="space-y-1.5">
            {info.maximas.map((m, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold text-primary shrink-0">{i + 1}.</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </InfoSection>
      )}

      {/* Oración */}
      <InfoSection icon={Church} title={info.oracionTitulo}>
        <p className="italic">"{info.oracion}"</p>
      </InfoSection>

      {/* Oración de la comida */}
      <InfoSection icon={UtensilsCrossed} title="Oración de la Comida">
        <p className="italic">"{info.oracionComida}"</p>
      </InfoSection>

      {/* Grito */}
      <InfoSection icon={Volume2} title={info.grito}>
        <p>{info.gritoDescripcion}</p>
      </InfoSection>

      {/* Saludo */}
      <InfoSection icon={Hand} title={info.saludo}>
        <p>{info.saludoDescripcion}</p>
      </InfoSection>

      {/* Formación */}
      <InfoSection icon={Users} title={`Formación: ${info.formacion}`}>
        <p>{info.formacionDescripcion}</p>
      </InfoSection>

      {/* Estructura */}
      <InfoSection icon={Flag} title="Estructura">
        <p>{info.estructura}</p>
      </InfoSection>

      {/* Marco Simbólico */}
      <InfoSection icon={Compass} title="Marco Simbólico">
        <p>{info.marcoSimbolico}</p>
      </InfoSection>

      {/* Uniforme */}
      <InfoSection icon={Shirt} title="Uniforme">
        <ul className="space-y-1">
          {info.uniforme.map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </InfoSection>

      {/* Himno (solo Clan) */}
      {info.himno && (
        <InfoSection icon={Music} title={info.himno.titulo}>
          <pre className="whitespace-pre-wrap font-body text-sm italic">{info.himno.letra}</pre>
        </InfoSection>
      )}

      {/* Datos extra */}
      {info.datosExtra?.map((dato, i) => (
        <InfoSection key={i} icon={Info} title={dato.titulo}>
          <p>{dato.contenido}</p>
        </InfoSection>
      ))}
    </div>
  );
}
