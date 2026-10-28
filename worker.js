// A dynamic import whose specifier isn't a string literal. Vite rewrites it to
// `import(__vite__injectQuery(url, 'import'))`, importing `injectQuery` from
// /@vite/client, so the whole client (and its HMR socket) runs in this worker.
self.onmessage = async () => {
    const url = './greeting.js';
    const { greeting } = await import(url);
    console.log(greeting);
};
