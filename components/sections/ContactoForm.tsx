"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { buildWhatsappUrl } from "@/lib/constants";
import {
  construirMensajeWhatsapp,
  guardarConsulta,
  TIPOS_OBRA,
  type DatosConsulta,
} from "@/lib/consultas";
import type { TipoObraConsulta } from "@/lib/types/consulta";
import { cn } from "@/lib/cn";

type Errores = Partial<Record<keyof DatosConsulta, string>>;

const CAMPOS_INICIALES: DatosConsulta = {
  nombre: "",
  telefono: "",
  email: "",
  tipoObra: "" as TipoObraConsulta,
  ubicacion: "",
  descripcion: "",
};

function validar(datos: DatosConsulta): Errores {
  const errores: Errores = {};
  if (!datos.nombre.trim()) errores.nombre = "Ingresá tu nombre.";
  if (!datos.telefono.trim()) {
    errores.telefono = "Ingresá un teléfono para contactarte.";
  } else if (!/^[\d\s()+-]{6,20}$/.test(datos.telefono.trim())) {
    errores.telefono = "El teléfono solo puede tener números, espacios, + y guiones.";
  }
  if (!datos.email.trim()) {
    errores.email = "Ingresá tu email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email.trim())) {
    errores.email = "El email no parece válido. Revisalo, por favor.";
  }
  if (!datos.tipoObra) errores.tipoObra = "Elegí el tipo de obra.";
  if (!datos.ubicacion.trim()) errores.ubicacion = "Contanos dónde es la obra.";
  if (!datos.descripcion.trim()) {
    errores.descripcion = "Contanos brevemente qué necesitás.";
  } else if (datos.descripcion.trim().length < 10) {
    errores.descripcion = "Contanos un poco más (mínimo 10 caracteres).";
  }
  return errores;
}

const inputStyles =
  "w-full rounded-md border border-tedfu-white/20 bg-tedfu-white/5 px-4 py-3 text-sm text-tedfu-white placeholder:text-tedfu-white/40 focus:border-tedfu-orange focus:outline-none focus:ring-1 focus:ring-tedfu-orange";

const inputErrorStyles = "border-red-400 focus:border-red-400 focus:ring-red-400";

export function ContactoForm() {
  const [datos, setDatos] = useState<DatosConsulta>(CAMPOS_INICIALES);
  const [errores, setErrores] = useState<Errores>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const setCampo = (campo: keyof DatosConsulta, valor: string) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
    if (errores[campo]) setErrores((prev) => ({ ...prev, [campo]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    setEnviando(true);
    await guardarConsulta(datos);
    const url = buildWhatsappUrl(construirMensajeWhatsapp(datos));
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviando(false);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-lg border border-tedfu-orange/40 bg-tedfu-white/5 p-8 text-center">
        <p className="text-2xl font-bold text-tedfu-orange">¡Recibimos tu consulta!</p>
        <p className="mt-2 text-tedfu-white/80">
          Lino te va a contactar a la brevedad. Si no se abrió WhatsApp,{" "}
          <a
            href={buildWhatsappUrl(construirMensajeWhatsapp(datos))}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-tedfu-orange underline"
          >
            tocá acá para escribirle directo
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setDatos(CAMPOS_INICIALES);
            setEnviado(false);
          }}
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          value={datos.nombre}
          onChange={(e) => setCampo("nombre", e.target.value)}
          aria-invalid={!!errores.nombre}
          className={cn(inputStyles, errores.nombre && inputErrorStyles)}
          placeholder="Tu nombre"
        />
        {errores.nombre && <p className="mt-1 text-sm text-red-300">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          autoComplete="tel"
          value={datos.telefono}
          onChange={(e) => setCampo("telefono", e.target.value)}
          aria-invalid={!!errores.telefono}
          className={cn(inputStyles, errores.telefono && inputErrorStyles)}
          placeholder="11 1234-5678"
        />
        {errores.telefono && <p className="mt-1 text-sm text-red-300">{errores.telefono}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={datos.email}
          onChange={(e) => setCampo("email", e.target.value)}
          aria-invalid={!!errores.email}
          className={cn(inputStyles, errores.email && inputErrorStyles)}
          placeholder="tu@email.com"
        />
        {errores.email && <p className="mt-1 text-sm text-red-300">{errores.email}</p>}
      </div>

      <div>
        <label htmlFor="tipoObra" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Tipo de obra
        </label>
        <select
          id="tipoObra"
          value={datos.tipoObra}
          onChange={(e) => setCampo("tipoObra", e.target.value)}
          aria-invalid={!!errores.tipoObra}
          className={cn(
            inputStyles,
            "appearance-none",
            !datos.tipoObra && "text-tedfu-white/40",
            errores.tipoObra && inputErrorStyles,
          )}
        >
          <option value="" disabled className="text-tedfu-dark">
            Elegí una opción
          </option>
          {TIPOS_OBRA.map((tipo) => (
            <option key={tipo.value} value={tipo.value} className="text-tedfu-dark">
              {tipo.label}
            </option>
          ))}
        </select>
        {errores.tipoObra && <p className="mt-1 text-sm text-red-300">{errores.tipoObra}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="ubicacion" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Ubicación de la obra
        </label>
        <input
          id="ubicacion"
          type="text"
          value={datos.ubicacion}
          onChange={(e) => setCampo("ubicacion", e.target.value)}
          aria-invalid={!!errores.ubicacion}
          className={cn(inputStyles, errores.ubicacion && inputErrorStyles)}
          placeholder="Barrio / localidad (ej: Vicente López)"
        />
        {errores.ubicacion && <p className="mt-1 text-sm text-red-300">{errores.ubicacion}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="descripcion" className="mb-1.5 block text-sm font-medium text-tedfu-white">
          Descripción del proyecto
        </label>
        <textarea
          id="descripcion"
          rows={4}
          value={datos.descripcion}
          onChange={(e) => setCampo("descripcion", e.target.value)}
          aria-invalid={!!errores.descripcion}
          className={cn(inputStyles, "resize-y", errores.descripcion && inputErrorStyles)}
          placeholder="Contanos qué necesitás: qué hay que hacer, superficie aproximada, plazos..."
        />
        {errores.descripcion && (
          <p className="mt-1 text-sm text-red-300">{errores.descripcion}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={enviando} className="w-full sm:w-auto">
          {enviando ? "Enviando..." : "Enviar consulta por WhatsApp"}
        </Button>
        <p className="mt-3 text-xs text-tedfu-white/50">
          Al enviar se abre WhatsApp con tu consulta ya escrita para mandársela a Lino.
        </p>
      </div>
    </form>
  );
}
