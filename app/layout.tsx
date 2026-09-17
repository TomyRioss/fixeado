import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";

export const metadata: Metadata = {
  title: "Fixeado | Reparación de celulares a domicilio en tu zona",
  description:
    "Fixeado conecta tu celular con talleres verificados de tu zona: recogida y envío a domicilio con garantía de funcionamiento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="flex min-h-full flex-col bg-background text-primary">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
