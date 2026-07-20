export type CategoriaObra = "ferroviarias" | "educativas" | "edificios" | "obra-publica";

export const CATEGORIA_LABELS: Record<CategoriaObra, string> = {
  ferroviarias: "Ferroviarias",
  educativas: "Educativas",
  edificios: "Edificios",
  "obra-publica": "Obra pública",
};

export interface Obra {
  id: string;
  titulo: string;
  categoria: CategoriaObra;
  descripcion: string;
  cliente: string;
  imagenes: string[];
  destacada: boolean;
  orden: number;
}
