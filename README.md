## Available Scripts

To get started with Workbox (developed by google for PWA)

### `npm install workbox-cli`
### `workbox wizard`
### `workbox generateSW`

Then create a file in root directory named "src-sw.js" and paste the following code
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

## Add following code to workbox-config.js
"swSrc": "src-sw.js"

## run `workbox injectManifest`

#### everytime you want to make a custom change, do it in src-sw.js and run `workbox injectManifest`

### Generate manifest.json visit
https://app-manifest.firebaseapp.com/


