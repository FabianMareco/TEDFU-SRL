# TEDFU S.R.L. — Sitio web institucional

Sitio institucional de TEDFU S.R.L., constructora con 10 años de trayectoria en
obras públicas y privadas (infraestructura ferroviaria, instituciones
educativas, edificios y obra civil).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Firebase (Firestore + Auth) para las colecciones `obras` y `consultas`, y el
  panel `/admin`

## Desarrollo

```bash
npm install
cp .env.local.example .env.local  # completar credenciales de Firebase y WhatsApp
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

El sitio funciona sin Firebase configurado: la galería usa el seed local
(`lib/data/obras-seed.ts`) y el formulario abre WhatsApp igual (solo no
persiste la consulta). Con Firebase configurado, la galería lee la colección
`obras` y el formulario guarda en `consultas`.

## Configuración de Firebase

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
   con Firestore y Authentication (proveedor Email/Contraseña).
2. Crear el usuario admin (email/contraseña de Lino) en Authentication.
3. Copiar las credenciales web y de cuenta de servicio a `.env.local`
   (ver `.env.local.example`).
4. Publicar las reglas de seguridad de `firestore.rules` en Firestore.
5. Poblar las obras iniciales: `npm run seed`.

## Variables de entorno

Ver `.env.local.example`. Se necesitan las credenciales del proyecto Firebase
(web + cuenta de servicio) y el número de WhatsApp de contacto
(`NEXT_PUBLIC_WHATSAPP_NUMBER`, formato internacional sin espacios, ej.
`5491122334455`). En Vercel, cargar las mismas variables en Project Settings →
Environment Variables.

## Panel de administración

`/admin` — protegido con Firebase Auth. Permite crear, editar, eliminar y
destacar obras, y ver las consultas recibidas con su estado
(nueva / contactado / cerrada).

## Contenido pendiente de confirmar

- **Valores TEDFU** (`lib/data/empresa.ts`): las 5 palabras del acrónimo son
  una propuesta; reemplazar por las que elija Lino.
- **Número de WhatsApp y teléfono** (`lib/constants.ts` + env var): hoy hay un
  placeholder `5491100000000`.
- **Fotos reales**: copiar las fotos de obras a `public/multimedia/` y
  actualizar las rutas en el seed o desde el panel admin (hoy hay placeholders
  SVG).

## Estructura

- `app/` — rutas (App Router): home, `/admin`, sitemap, robots, OG image
- `components/ui/` — componentes base del sistema de diseño
- `components/layout/` — header, footer, botón de WhatsApp
- `components/sections/` — secciones de la home (hero, nosotros, servicios,
  obras, clientes, contacto)
- `components/admin/` — panel de administración
- `lib/firebase/` — clientes de Firebase (web y admin)
- `lib/data/` — seed de obras y contenido de la empresa
- `lib/types/` — tipos de las colecciones de Firestore
- `scripts/seed-obras.ts` — carga el seed en Firestore (`npm run seed`)
- `public/multimedia/` — fotos de obras provistas por el cliente
