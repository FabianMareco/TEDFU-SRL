import { Hero } from "@/components/sections/Hero";
import { Metricas } from "@/components/sections/Metricas";
import { Nosotros } from "@/components/sections/Nosotros";
import { Servicios } from "@/components/sections/Servicios";
import { Obras } from "@/components/sections/Obras";
import { Clientes } from "@/components/sections/Clientes";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Metricas />
      <Nosotros />
      <Servicios />
      <Obras />
      <Clientes />
      <Contacto />
    </>
  );
}
