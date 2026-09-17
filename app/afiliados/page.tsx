import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/landing/section-heading";
import { StepsGrid } from "@/components/landing/steps-grid";
import { Checklist } from "@/components/landing/checklist";
import { FaqList, type FaqItem } from "@/components/landing/faq-list";
import { CtaBand } from "@/components/landing/cta-band";

export const metadata: Metadata = {
  title: "Fixeado Afiliados | Más clientes de tu zona para tu taller",
  description:
    "Postulá tu taller a Fixeado: demanda de tu zona, logística de recogida y envío, reseñas comprobables y respaldo de garantía.",
};

const BENEFITS = [
  {
    title: "Demanda de tu zona",
    description:
      "Recibí solicitudes de clientes cercanos a tu taller, sin gastar en publicidad.",
  },
  {
    title: "Logística incluida",
    description:
      "Coordinamos la recogida y el envío a domicilio por vos.",
  },
  {
    title: "Reseñas comprobables",
    description:
      "Cada trabajo suma reputación verificada que atrae más clientes.",
  },
  {
    title: "Respaldo de garantía",
    description:
      "Operás bajo el paraguas de confianza de la garantía Fixeado.",
  },
];

const AFFILIATE_STEPS = [
  {
    title: "Postulá tu taller",
    description:
      "Completá el formulario con los datos de tu taller y tu experiencia.",
  },
  {
    title: "Verificamos tu taller",
    description:
      "Validamos local físico, experiencia y capacidad de respuesta.",
  },
  {
    title: "Recibí solicitudes",
    description:
      "Empezás a recibir órdenes de reparación de clientes de tu zona.",
  },
  {
    title: "Repará y crecé",
    description:
      "Entregás con garantía, sumás reseñas y aumentás tus ingresos.",
  },
];

const REQUIREMENTS = [
  "Taller físico con atención al público",
  "Experiencia comprobable en reparación de celulares",
  "Compromiso de garantía en cada reparación entregada",
  "Cumplimiento de SLA de diagnóstico y entrega acordado",
];

const AFFILIATE_FAQS: FaqItem[] = [
  {
    question: "¿Cuánto cuesta afiliarse?",
    answer:
      "No hay costo fijo de afiliación. Solo se aplica una comisión por orden completada, cuyo porcentaje está a definir y se informa antes de activar tu taller.",
  },
  {
    question: "¿Cómo recibo los clientes?",
    answer:
      "Te asignamos solicitudes de tu zona según tu capacidad y especialidad. Aceptás las órdenes desde un panel simple y coordinamos la logística.",
  },
  {
    question: "¿Quién hace la recogida y el envío?",
    answer:
      "Fixeado coordina la logística de recogida y devolución a domicilio, para que tu taller se concentre en reparar.",
  },
  {
    question: "¿Qué pasa si una reparación falla en garantía?",
    answer:
      "El caso vuelve a tu taller para revisión sin costo para el cliente, con acompañamiento del equipo Fixeado y reglas claras de cada caso.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-12 pt-12 sm:px-6 sm:pt-16">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="inline-flex w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Red de talleres afiliados
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Más clientes de tu zona para tu taller
            </h1>
            <p className="text-base leading-7 text-muted sm:text-lg">
              Sumate a la red Fixeado: te enviamos demanda cercana, resolvemos
              la logística de recogida y envío, y respaldamos tu trabajo con
              garantía y reseñas comprobables.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/afiliados#postular"
                className="rounded-md bg-cta px-6 py-3 text-center text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
              >
                Postular taller
              </Link>
              <Link
                href="/afiliados#como-funciona"
                className="rounded-md border border-primary/20 bg-surface px-6 py-3 text-center text-sm font-semibold text-primary transition-colors hover:border-primary/40"
              >
                Cómo funciona
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Beneficios"
            title="Todo lo que gana tu taller al afiliarse"
            description="Demanda, logística y confianza para que te concentres en reparar."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit.title}
                className="flex flex-col gap-2 rounded-xl border border-primary/10 bg-background p-5"
              >
                <h3 className="text-base font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Cómo funciona para afiliados en 4 pasos"
            description="De la postulación a tus primeras órdenes en tu zona."
          />
          <StepsGrid steps={AFFILIATE_STEPS} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Requisitos"
            title="Requisitos para afiliarte"
            description="Pedimos estos mínimos para mantener la confianza de los clientes."
          />
          <Checklist items={REQUIREMENTS} />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Comisión simple"
            title="Sin costo fijo, comisión por orden"
            description="Modelo simple: solo ganamos cuando tu taller gana."
          />
          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2 rounded-xl border border-primary/10 bg-surface p-6 text-center">
              <p className="text-sm font-medium text-muted">Comisión por orden</p>
              <p className="text-3xl font-extrabold text-primary">% a definir</p>
              <p className="text-sm leading-6 text-muted">
                Porcentaje final pendiente de confirmación antes del lanzamiento.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-accent/40 bg-surface p-6 text-center">
              <p className="text-sm font-medium text-muted">Costo fijo</p>
              <p className="text-3xl font-extrabold text-primary">$ 0</p>
              <p className="text-sm leading-6 text-muted">
                Sin matrícula ni mensualidad para talleres afiliados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow="Dudas frecuentes"
            title="Preguntas frecuentes de talleres"
          />
          <FaqList items={AFFILIATE_FAQS} />
        </div>
      </section>

      <div id="postular">
        <CtaBand
          title="Postulá tu taller hoy"
          description="Contanos sobre tu taller y te contactamos para la verificación. Sin costo fijo y con clientes de tu zona esperando."
          primaryLabel="Postular taller"
          primaryHref="/afiliados#postular"
          secondaryLabel="Ver requisitos"
          secondaryHref="/afiliados#como-funciona"
        />
      </div>
    </main>
  );
}
