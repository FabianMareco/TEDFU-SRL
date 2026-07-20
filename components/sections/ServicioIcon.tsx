const PATHS: Record<string, React.ReactNode> = {
  llave: (
    <>
      <path d="M14 10a5 5 0 1 0-7.5 4.33V21l2.5-1.5L11.5 21v-6.67A5 5 0 0 0 14 10Z" />
      <path d="M14 10h7M18 10v3" />
    </>
  ),
  planificacion: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </>
  ),
  gestion: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      <path d="M16 4.5 17.5 6 21 2.5" />
    </>
  ),
  ferroviaria: (
    <>
      <path d="M5 4h14v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Z" />
      <path d="M5 9h14M9 4v5M15 4v5" />
      <path d="m7 21 2-4M17 21l-2-4" />
    </>
  ),
  mantenimiento: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.9 2.9-2.4-2.4 2.3-3.5Z" />
    </>
  ),
  demolicion: (
    <>
      <path d="M4 21h16" />
      <path d="M6 21V9l6-4 6 4v12" />
      <path d="M10 21v-4h4v4M9 12h.01M15 12h.01" />
      <path d="m2 7 4 2M22 7l-4 2" />
    </>
  ),
  instalaciones: (
    <>
      <path d="M13 2 6 13h5l-1 9 7-11h-5l1-9Z" />
    </>
  ),
  reformas: (
    <>
      <path d="M3 21v-4l11-11 4 4L7 21H3Z" />
      <path d="m12 8 4 4M17 3l4 4-2 2-4-4 2-2Z" />
    </>
  ),
};

export function ServicioIcon({ icono }: { icono: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {PATHS[icono] ?? PATHS.reformas}
    </svg>
  );
}
