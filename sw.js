// Service worker: permite abrir el Rosario sin conexión.
// La página se pide primero a la red (para recibir siempre la última versión)
// y, si no hay conexión, se usa la copia guardada.
const CACHE = "rosario-v3";
const ARCHIVOS = ["./", "./index.html", "./mes-maria.js", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const req = event.request;
    if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
    event.respondWith(
        fetch(req)
            .then(res => {
                const copia = res.clone();
                caches.open(CACHE).then(c => c.put(req, copia));
                return res;
            })
            .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
});
