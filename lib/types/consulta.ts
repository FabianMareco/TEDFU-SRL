export type TipoObraConsulta =
  | "reforma"
  | "obra-nueva"
  | "mantenimiento"
  | "infraestructura"
  | "demolicion"
  | "otro";

export type EstadoConsulta = "nueva" | "contactado" | "cerrada";

export interface Consulta {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  tipoObra: TipoObraConsulta;
  ubicacion: string;
  descripcion: string;
  estado: EstadoConsulta;
  creadoEn: number;
}
