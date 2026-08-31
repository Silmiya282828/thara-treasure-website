# Thara Treasures

React + Vite port of the original single-file `thara-treasures_1.html`.

## Running it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`, `npm run preview` serves that build.

## Layout

```
src/
  main.jsx              app entry, mounts inside <ShopProvider>
  App.jsx               page composition + overlay mounting
  styles.css            the original stylesheet, unchanged
  images.js             filename -> hashed asset URL map
  assets/images/        the 24 photos, extracted from the base64 blob
  data/products.js      PRODUCTS, CATS, YOU — catalogue content
  lib/shop.js           pricing, WhatsApp helpers, label lookups
  store/shop.jsx        bag / saved / variant / overlay state
  hooks/useReveal.js    scroll-reveal IntersectionObserver
  components/           header, hero, sections, cards, drawers, modal
```

## Notes on the port

- The 1.8 MB base64 `IMAGES` object is gone. Each photo is a real file under
  `src/assets/images/`, imported through `import.meta.glob`, so Vite hashes them and
  the browser caches them separately from the JS bundle.
- The stylesheet is byte-for-byte the original, so every class name still applies. Markup
  was converted to JSX against those same classes rather than restyled.
- Interaction state that was spread over module-level `let` variables and delegated
  `document` click handlers now lives in one context (`store/shop.jsx`), so only one
  overlay can be open at a time and the bag badge stays in sync automatically.
- Checkout is still a demo: the form is uncontrolled and `Place order` just clears the bag
  and shows the confirmation. No payment provider is wired up.
