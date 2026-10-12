# Silva_Homestay

Website for **Silva Homestay & Bike Rental**, Anuradhapura — a one-page site built from the
"Silva Homestay & Bike Rental" Claude Design prototype.

**Stack:** Next.js 16 (App Router; the page is prerendered as static HTML), React 19, Tailwind CSS v4, lucide-react icons,
`next/font` (Geist + Instrument Serif). No backend: the booking form opens the guest's email app with a
pre-filled request.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (must pass before deploy)
npm run lint
```

## Where things live

```
src/
  content/content.ts   ← ALL copy, prices, contact details, destinations and image paths
  app/globals.css      ← design tokens (shadcn/ui light theme + Silva gold) and base component classes
  app/layout.tsx       ← fonts, <title>/description metadata
  app/page.tsx         ← section order
  components/          ← one file per section; client components only where interactive
    booking-context.tsx   shared "selected package" state → package buttons pre-fill the form
    places.tsx            cover-flow destination carousel (arrows, dots, drag/swipe, ←/→ keys)
    destination-modal.tsx destination detail dialog (focus trap, Escape, scroll lock)
    gallery.tsx           grid + lightbox
    enquiry-form.tsx      booking form → mailto:
  lib/                 ← scroll helper, viewport / reduced-motion hooks, distance formatting
public/images/         ← client photos (photos/), destination photos (destinations/), logo
```

To change text, prices or photos, edit `src/content/content.ts`. Components don't hard-code copy.

### Destination distances

Each destination has `distanceKm` and `estimatedBikeTime`, both `null` today. Once the homestay's map pin
is confirmed, fill in road distances and the cards and detail window will show
"Approx. X.X km from Silva Homestay · about N min by bike" automatically. Leave them `null` until verified.

## Design fidelity notes

- Breakpoints follow the design: header/hero switch at **860px**; carousel geometry at **1100px**
  (5 cards) / **700px** (3 cards) / below (1 card + peeks, full-screen detail window).
- Accent gold `#C9A227`, ink `#6D5715`, wash `#FBF8EE` are the values the prototype rendered with
  (its runtime derives ink/wash from the accent).
- The prototype's design-tool "tweaks" (accent picker, hide rates, stacked hero) were not carried over —
  the defaults (gold, rates shown, split hero) are built in.
- `prefers-reduced-motion` disables the hero drift, card tilt and all transitions.

## Open questions for the client

Carried over from the design chats — tracked as `TODO(client)` comments in `content.ts`:

1. **Email** — brief says `silvahomestayandrental@gmail.com`; the flyers say
   `silvahomestayandbikerental@gmail.com`. Which is live? (Site uses the first.)
2. **Map pin / full address** — needed before showing any distances or a map.
3. Is **Rs. 4,500** per night? Room count, room types, guest capacity per room.
4. **WhatsApp** — is 076 138 6213 on WhatsApp? (Not labelled as such until confirmed.)
5. Check-in / check-out times; booking and cancellation policy.
6. **Fact-check** the five destination histories (UNESCO / Central Cultural Fund) — especially the
   Jetavanaramaya ~120 m height, Ruwanwelisaya restoration dates and Faxian's early-5th-century visit.
7. Better photos: a larger **Abhayagiri** image (current one is 678px wide), and original camera files
   for the bikes photo.
8. The Package 02 image (`sacred-city-stupa.avif`) is a stock photo the designer added, not the client's —
   confirm the licence or replace it with a client photo.
