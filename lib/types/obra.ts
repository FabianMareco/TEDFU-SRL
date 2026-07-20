export type CategoriaObra = "ferroviarias" | "educativas" | "edificios" | "obra-publica";

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
