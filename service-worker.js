self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('banca-brasil-v4').then(cache => {
            return cache.addAll([
                '/index.html',
                '/script.js',
                '/icon.png',
                'https://cdn.tailwindcss.com',
                'https://rafaeldantasl.github.io/LotoHack/resultados.js?v=20240524',
                'https://rafaeldantasl.github.io/LotoHack/palpites.js?v=20240524'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});