const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
worker.addEventListener('error', (event) => console.error('worker error:', event.message));
worker.postMessage('load');
