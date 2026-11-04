# OneCity

**Your City. Everything You Need.**

OneCity is a city-life platform for India that helps residents discover, compare, enquire about and book everyday local services.

## MVP — Jaipur pilot

The first release focuses on four areas:

1. **Home Services** — electrician, plumber, AC repair, RO repair, appliance repair, cleaning and pest control.
2. **Property** — rental homes, PGs, hostels and property enquiries.
3. **Emergency** — verified emergency contacts and essential public information.
4. **Government Assistance** — scheme information, eligibility guidance and links to official portals.

The first pilot will validate real supply and customer demand in a small number of Jaipur localities before expanding.

## Technology

- React + TypeScript + Vite
- Tailwind CSS
- Supabase (PostgreSQL, Auth, Storage and Row-Level Security)
- PWA-first responsive web application
- Capacitor for Android packaging after the web experience is stable

## Brand

- Primary: `#F28C28`
- Dark navy: `#263C54`
- Background: `#E9EEF3`
- Font: Poppins
- Tagline: **Your City. Everything You Need.**

## Development principles

- Build one working module at a time.
- Use real provider and property data; never present demo data as verified.
- Enforce permissions in the backend and database, not only in the UI.
- Keep emergency information accessible without login or payment.
- Protect private contact details and documents.
- Do not store payment credentials or expose secret keys in the frontend.
- Test on low-end Android devices and slow networks.

## Local development

After the initial app scaffold is added:

```bash
npm install
npm run dev
```

## Planned repository structure

```text
onecity/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── public/
├── supabase/
│   ├── migrations/
│   └── seed/
├── docs/
└── README.md
```

## Current status

Repository initialized. Application scaffold, Supabase schema, authentication, role permissions and marketplace workflows are next.

## Important

OneCity is an independent private platform, not a government service. Government scheme details and emergency contacts must be verified against authoritative sources and display a last-verified date.
