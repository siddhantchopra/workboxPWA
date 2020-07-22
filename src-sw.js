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

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

