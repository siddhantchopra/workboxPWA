importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([{"revision":"1175d3ae7dbab96c1a825f75b19a89f8","url":"css/main.css"},{"revision":"e010eec6d47487d8a2795870fe2a7e18","url":"index.html"},{"revision":"ae52cc56bb6d44edc197cf14f9ee0b4d","url":"js/app.js"},{"revision":"a842a8cfa782730ac6d20be6b0ce3dd7","url":"workbox-f195749a.js"}]);

