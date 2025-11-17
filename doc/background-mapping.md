# Background Image Mapping

Overview of how design backgrounds are used across the site. Paths refer to files under `design/`.

- `bg.jpg`: Global site background (applied in `app/layout.tsx`).
- `bg1.png`: Homepage hero (`app/page.tsx`) and tier list hero (`app/guides/tier-list/page.tsx`).
- `bg2.png`: Guides index hero (`app/guides/page.tsx`) and new players guide hero (`app/guides/new-players/page.tsx`).
- `bg3.png`: News hero (`app/news/page.tsx`) and weapons overview hero (`app/guides/weapons/page.tsx`).
- `bg4.png`: Videos hero (`app/videos/page.tsx`) and builds / bosses heroes (`app/guides/builds/page.tsx`, `app/guides/bosses/page.tsx`).
- `bg5.png`: Codes hero (`app/guides/codes/page.tsx`).

All hero sections follow the same pattern:

- `relative overflow-hidden` section container with dark base background.
- `next/image` with `fill`, `object-cover`, and ~35–40% opacity.
- A dark gradient overlay from `slate-950` to keep text readable.

