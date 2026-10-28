# Vite: `document is not defined` in a worker on CSS hot update

A module worker with a non-literal dynamic `import()` gets `injectQuery` from `/@vite/client`, so the whole HMR client runs in the worker. When a linked stylesheet changes, that copy calls `document.querySelectorAll("link")` and throws.

1. `npm install`, then `npm run dev`
2. Open the page and the browser console
3. Edit `style.css` and save
4. `ReferenceError: document is not defined` at `@vite/client` `handleMessage`
