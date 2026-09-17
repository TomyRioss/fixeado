"use client";

import dynamic from "next/dynamic";

const HeroDevicesCanvas = dynamic(
  () =>
    import("@/components/landing/hero-devices-canvas").then(
      (m) => m.HeroDevicesCanvas
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-[320px] w-full animate-pulse rounded-2xl bg-white/10 sm:h-[400px] lg:h-[440px]"
      />
    ),
  }
);

export function HeroDevices() {
  return (
    <div className="w-full">
      <HeroDevicesCanvas />
      <p className="mt-2 text-center text-xs font-medium text-white/70 lg:text-right">
        Monitor 24&Prime; &middot; Laptop 14&Prime; &middot; Tablet 10.9&Prime;
        &middot; Celular 6.1&Prime; &mdash; escala proporcional
      </p>
    </div>
  );
}
