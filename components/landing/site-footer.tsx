import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-extrabold tracking-tight">Fixeado</p>
          <p className="max-w-xs text-sm leading-6 text-primary-foreground/80">
            Qué es Fixeado: red de talleres verificados de tu zona para reparar
            tu celular con recogida y envío a domicilio y garantía de
            funcionamiento.
          </p>
        </div>
        <nav aria-label="Enlaces del sitio" className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Explorar
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Clientes
              </Link>
            </li>
            <li>
              <Link href="/afiliados" className="hover:underline">
                Afiliados
              </Link>
            </li>
            <li>
              <Link href="/#como-funciona" className="hover:underline">
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:underline">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Contacto
          </p>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Email: contacto@fixeado.com</li>
            <li>Teléfono: +000 000 000 000</li>
            <li>Horario: Lun a Sáb, 9:00 a 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Fixeado. Todos los derechos reservados.</p>
          <p>Contacto de ejemplo pendiente de datos reales.</p>
        </div>
      </div>
    </footer>
  );
}
