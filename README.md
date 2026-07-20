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

## Variables de entorno

Ver `.env.local.example`. Se necesitan las credenciales del proyecto Firebase
(web + cuenta de servicio) y el número de WhatsApp de contacto
(`NEXT_PUBLIC_WHATSAPP_NUMBER`, formato internacional sin espacios, ej.
`5491122334455`).

## Estructura

- `app/` — rutas (App Router)
- `components/ui/` — componentes base del sistema de diseño
- `components/layout/` — header, footer, botón de WhatsApp
- `lib/firebase/` — clientes de Firebase (web y admin)
- `lib/types/` — tipos de las colecciones de Firestore
- `public/multimedia/` — fotos de obras provistas por el cliente
