"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CATEGORIA_LABELS, type CategoriaObra, type Obra } from "@/lib/types/obra";

const inputStyles =
  "mt-1.5 w-full rounded-md border border-tedfu-dark/20 px-4 py-3 text-sm focus:border-tedfu-orange focus:outline-none focus:ring-1 focus:ring-tedfu-orange";

export function ObraForm({
  obra,
  onListo,
  onCancelar,
}: {
  obra: Obra | null;
  onListo: () => void;
  onCancelar: () => void;
}) {
  const [titulo, setTitulo] = useState(obra?.titulo ?? "");
  const [categoria, setCategoria] = useState<CategoriaObra>(obra?.categoria ?? "edificios");
  const [cliente, setCliente] = useState(obra?.cliente ?? "");
  const [descripcion, setDescripcion] = useState(obra?.descripcion ?? "");
  const [imagenes, setImagenes] = useState((obra?.imagenes ?? []).join("\n"));
  const [destacada, setDestacada] = useState(obra?.destacada ?? false);
  const [orden, setOrden] = useState(String(obra?.orden ?? 99));
  const [error, setError] = useState("");
  const [guardando, setGuardando] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!titulo.trim() || !cliente.trim() || !descripcion.trim()) {
      setError("Completá título, cliente y descripción.");
      return;
    }
    const listaImagenes = imagenes
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (listaImagenes.length === 0) {
      setError(
        "Agregá al menos una imagen (ruta dentro de /multimedia, ej: /multimedia/obra.jpg).",
      );
      return;
    }

    const datos = {
      titulo: titulo.trim(),
      categoria,
      cliente: cliente.trim(),
      descripcion: descripcion.trim(),
      imagenes: listaImagenes,
      destacada,
      orden: Number(orden) || 99,
    };

    setGuardando(true);
    try {
      const { getFirestoreDb } = await import("@/lib/firebase/client");
      const { addDoc, collection, doc, setDoc } = await import("firebase/firestore");
      if (obra) {
        await setDoc(doc(getFirestoreDb(), "obras", obra.id), datos);
      } else {
        await addDoc(collection(getFirestoreDb(), "obras"), datos);
      }
      onListo();
    } catch (err) {
      console.error(err);
      setError("No se pudo guardar la obra. Probá de nuevo.");
      setGuardando(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <h2 className="text-lg font-bold text-tedfu-dark">
        {obra ? "Editar obra" : "Nueva obra"}
      </h2>

      <label htmlFor="obra-titulo" className="mt-5 block text-sm font-medium text-tedfu-dark">
        Título
      </label>
      <input
        id="obra-titulo"
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className={inputStyles}
      />

      <label htmlFor="obra-categoria" className="mt-4 block text-sm font-medium text-tedfu-dark">
        Categoría
      </label>
      <select
        id="obra-categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value as CategoriaObra)}
        className={inputStyles}
      >
        {(Object.keys(CATEGORIA_LABELS) as CategoriaObra[]).map((cat) => (
          <option key={cat} value={cat}>
            {CATEGORIA_LABELS[cat]}
          </option>
        ))}
      </select>

      <label htmlFor="obra-cliente" className="mt-4 block text-sm font-medium text-tedfu-dark">
        Cliente
      </label>
      <input
        id="obra-cliente"
        type="text"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        className={inputStyles}
      />

      <label htmlFor="obra-descripcion" className="mt-4 block text-sm font-medium text-tedfu-dark">
        Descripción
      </label>
      <textarea
        id="obra-descripcion"
        rows={4}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className={inputStyles}
      />

      <label htmlFor="obra-imagenes" className="mt-4 block text-sm font-medium text-tedfu-dark">
        Imágenes (una ruta por línea)
      </label>
      <textarea
        id="obra-imagenes"
        rows={3}
        value={imagenes}
        onChange={(e) => setImagenes(e.target.value)}
        placeholder={"/multimedia/mi-obra-1.jpg\n/multimedia/mi-obra-2.jpg"}
        className={inputStyles}
      />
      <p className="mt-1 text-xs text-tedfu-dark/50">
        Subí las fotos a la carpeta /public/multimedia del proyecto (o usá URLs de
        Firebase Storage) y pegá acá las rutas.
      </p>

      <div className="mt-4 flex flex-wrap items-end gap-6">
        <label className="flex items-center gap-2 text-sm font-medium text-tedfu-dark">
          <input
            type="checkbox"
            checked={destacada}
            onChange={(e) => setDestacada(e.target.checked)}
            className="h-4 w-4 accent-tedfu-orange"
          />
          Obra destacada
        </label>

        <div>
          <label htmlFor="obra-orden" className="block text-sm font-medium text-tedfu-dark">
            Orden
          </label>
          <input
            id="obra-orden"
            type="number"
            min={1}
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="mt-1.5 w-24 rounded-md border border-tedfu-dark/20 px-3 py-2 text-sm focus:border-tedfu-orange focus:outline-none"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-6 flex gap-3">
        <Button type="submit" disabled={guardando}>
          {guardando ? "Guardando..." : "Guardar obra"}
        </Button>
        <button
          type="button"
          onClick={onCancelar}
          className="rounded-md px-4 py-2 text-sm font-medium text-tedfu-dark/60 hover:text-tedfu-dark"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
