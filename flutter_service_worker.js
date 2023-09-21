'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/tutorial/tapSpeedUp.png": "7735c490cb4b397a77ea546ba0c5bbe6",
"assets/assets/tutorial/dangerZone.png": "a4933ceb4b11755a15722dccaf92d6d9",
"assets/assets/tutorial/bounceOffWalls.png": "820b4af96d3b0febde878426b18cb733",
"assets/assets/tutorial/aimAtSlimes.png": "7ac6c576848fef87364d1e5a3224887c",
"assets/assets/tutorial/moreSlimes.png": "04cea2594751086bd14c57e64d96648f",
"assets/assets/tutorial/emptyHealthbar.png": "69b649ef8c417754ec6f08596ffdaf84",
"assets/assets/images/water5.png": "8780c9f9f5b110cbf4507509c2c59781",
"assets/assets/images/slime.png": "eb9d7848d44d9b7240b0e17e95de0541",
"assets/assets/images/water1.png": "6b6477e6bf3cd9ede889c9c35045ce07",
"assets/assets/images/player.png": "10a5000aa3cc976c2396349aa772eaea",
"assets/assets/images/water4.png": "7c48c8dc23bea594a3442eabf96ee2a2",
"assets/assets/images/water2.png": "8780c9f9f5b110cbf4507509c2c59781",
"assets/assets/images/water6.png": "c599f2542ad28b0787a305bcc0637097",
"assets/assets/images/LICENSE.txt": "d53ca7f38ff48ea093224f1db100e39b",
"assets/assets/images/plains.png": "5bf91f554e71b1ad1f65400dd1ef0c13",
"assets/assets/images/water3.png": "43ba077101aabf647688b7ba835302d6",
"assets/assets/icon/icon.png": "200c6796f58c158ea77785510c3fb209",
"assets/assets/google_fonts/Atkinson_Hyperlegible/OFL.txt": "c0b382bdcb3f310e3b5d81eea44a2f1f",
"assets/assets/google_fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-Regular.ttf": "28147924c6c58c46f245a75ebf336a53",
"assets/assets/google_fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-Italic.ttf": "163da8d6ac918cef1e8ffd56a33849c4",
"assets/assets/google_fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-BoldItalic.ttf": "a18eedb73a9ff74da81c1885bc57b779",
"assets/assets/google_fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-Bold.ttf": "08fc19673abeac2cafa733008e8662f1",
"assets/assets/google_fonts/Silkscreen/OFL.txt": "632dea16b7f77cd13e2b361816329c1d",
"assets/assets/google_fonts/Silkscreen/Silkscreen-Bold.ttf": "fd3bfe91d4b413d3f68d73b8e1cdf846",
"assets/assets/google_fonts/Silkscreen/Silkscreen-Regular.ttf": "5bed8502768fedf857a0ec8b81350f39",
"assets/AssetManifest.json": "5ac0e3c6cd6de9683548129804c29315",
"assets/NOTICES": "53203e41958c99372c3df23122579b45",
"assets/AssetManifest.bin": "fd8cf41c87824514592af6a4ccbfeac6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"CNAME": "67a98be39be60f8ce7e19ee9993ba26e",
"version.json": "ccf716aecb9ea7b2ad52f0b075613c0a",
"icons/Icon-maskable-192.png": "0661623ecf05cb6838ea7942a906582d",
"icons/Icon-192.png": "0661623ecf05cb6838ea7942a906582d",
"icons/Icon-maskable-512.png": "35849d12a0f13b0cda1f5702856fc870",
"icons/Icon-512.png": "35849d12a0f13b0cda1f5702856fc870",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "311b1fc832edb8734d6f70361b9900d2",
"/": "311b1fc832edb8734d6f70361b9900d2",
"favicon.png": "bd984020c623c115148bf8717ffb9137",
"main.dart.js": "88e4778bf7f49497f60913bb5628a34d",
"manifest.json": "b6543056aad46a1097340bbbb16c3020"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
