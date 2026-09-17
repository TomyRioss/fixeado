import { SectionHeading } from "@/components/landing/section-heading";
import { HeroSearch } from "@/components/landing/hero-search";
import { HeroDevices } from "@/components/landing/hero-devices";
import { StepsGrid } from "@/components/landing/steps-grid";
import { ReviewCard, type ReviewItem } from "@/components/landing/review-card";
import { Checklist } from "@/components/landing/checklist";
import { FaqList, type FaqItem } from "@/components/landing/faq-list";
import { CtaBand } from "@/components/landing/cta-band";

const CLIENT_STEPS = [
  {
    title: "Reporta tu falla",
    description:
      "Contanos qué le pasa a tu celular y en qué zona estás en menos de un minuto.",
  },
  {
    title: "Recogemos a domicilio",
    description:
      "Coordinamos el retiro de tu equipo en tu casa o trabajo, sin traslados.",
  },
  {
    title: "Reparamos en tu zona",
    description:
      "Un taller verificado de tu zona diagnostica y repara con repuestos adecuados.",
  },
  {
    title: "Devolvemos con garantía",
    description:
      "Te devolvemos el celular funcionando y con garantía por escrito.",
  },
];

const REVIEWS: ReviewItem[] = [
  {
    name: "Carolina M.",
    shop: "Taller Centro Móvil",
    rating: "5.0/5",
    text: "Retiraron mi celular a la mañana y a la tarde ya funcionaba. El seguimiento por zona me dio mucha tranquilidad.",
  },
  {
    name: "Diego R.",
    shop: "Taller Norte Celular",
    rating: "4.9/5",
    text: "Cambio de pantalla con garantía incluida. El precio cotizado fue el precio final, sin sorpresas.",
  },
  {
    name: "Lucía F.",
    shop: "Taller Sur Digital",
    rating: "5.0/5",
    text: "No encendía después de mojarse. Lo recogieron, lo repararon y volvió funcionando con garantía.",
  },
];

const GUARANTEE_ITEMS = [
  "Garantía de funcionamiento en toda reparación entregada",
  "Diagnóstico confirmado antes de reparar, sin costos ocultos",
  "Recogida a domicilio con registro del estado del equipo",
  "Envío de devolución coordinado a tu domicilio",
  "Soporte post-reparación dentro del período de garantía",
  "Talleres verificados y evaluados por clientes reales",
];

const FAILURE_TYPES = [
  {
    title: "Pantalla",
    description: "Roturas, táctil que no responde, líneas o manchas.",
  },
  {
    title: "Batería",
    description: "Se descarga rápido, se apaga sola o se hincha.",
  },
  {
    title: "Carga",
    description: "No carga, pin flojo o carga intermitente.",
  },
  {
    title: "Agua",
    description: "Contacto con líquidos, humedad o fallas posteriores.",
  },
  {
    title: "Software",
    description: "Lentitud, reinicios, fallas de sistema o virus.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "¿Cómo funciona la recogida y el envío?",
    answer:
      "Coordinás un horario y retiramos tu celular a domicilio. Luego de la reparación, lo devolvemos en la dirección acordada con registro del estado en cada tramo.",
  },
  {
    question: "¿Qué cubre la garantía de funcionamiento?",
    answer:
      "Cubre que la falla reparada funcione correctamente durante el período informado en tu orden. Si la falla vuelve, el taller la revisa sin costo adicional.",
  },
  {
    question: "¿Cuánto tarda una reparación típica?",
    answer:
      "Depende de la falla: pantallas y baterías suelen resolverse el mismo día, mientras que daños por agua o placa pueden tomar más tiempo según diagnóstico.",
  },
  {
    question: "¿Cómo sé que el taller es verificado?",
    answer:
      "Solo publicamos talleres con local físico, experiencia comprobable y reseñas verificadas de clientes reales de su zona.",
  },
];

export default function ClientsPage() {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[100svh] w-full overflow-hidden bg-cta">
        <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-5 text-center lg:items-start lg:text-left">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-cta-foreground sm:text-5xl lg:text-left">
              Arregla tu celular sin salir de casa.
            </h1>
            <HeroSearch />
          </div>
          <div className="flex w-full items-center justify-center">
            <HeroDevices />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Reparar tu celular sin moverte de casa"
            description="Cuatro pasos simples desde el reporte hasta la devolución con garantía."
          />
          <StepsGrid steps={CLIENT_STEPS} />
        </div>
      </section>

      <section className="border-y border-primary/10 bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Reseñas comprobables"
            title="Clientes reales, talleres reales"
            description="Opiniones verificadas de reparaciones realizadas en talleres de la red."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary">
        <span
          aria-hidden="true"
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cta/15 blur-3xl"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            tone="dark"
            eyebrow="Garantía Fixeado"
            title="Garantía de funcionamiento en cada orden"
            description="Recogida y envío registrados, diagnóstico confirmado y respaldo por escrito."
          />
          <Checklist items={GUARANTEE_ITEMS} tone="dark" />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Fallas frecuentes"
            title="Tipos de fallas comunes que reparamos"
            description="Estas son las reparaciones más pedidas en la red de talleres."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {FAILURE_TYPES.map((failure, index) => (
              <article
                key={failure.title}
                className="group flex flex-col gap-3 rounded-2xl border border-primary/10 bg-surface p-6 shadow-[0_1px_2px_rgba(11,27,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_32px_-20px_rgba(11,27,51,0.35)]"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-10 rounded-full bg-cta transition-all duration-300 group-hover:w-14"
                />
                <span
                  aria-hidden="true"
                  className="text-xs font-extrabold tracking-[0.14em] text-muted/70"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold text-primary">
                  {failure.title}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {failure.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-surface">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              align="left"
              eyebrow="Dudas frecuentes"
              title="Preguntas frecuentes de clientes"
            />
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Cotizá tu reparación hoy"
        description="Reportá tu falla, coordinamos la recogida a domicilio y un taller verificado de tu zona lo deja funcionando con garantía."
        primaryLabel="Cotizar reparación"
        primaryHref="/#cotizar"
        secondaryLabel="Ver cómo funciona"
        secondaryHref="/#como-funciona"
      />
    </main>
  );
}
