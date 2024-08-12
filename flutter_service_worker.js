'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "777ffa12791512e8fadcf72e98f672ca",
"version.json": "35d0e5bc984e014cbe69f99291ef9f9d",
"index.html": "39aa585a0f1ce990044e202e74fd1e96",
"/": "39aa585a0f1ce990044e202e74fd1e96",
"main.dart.js": "fa9bce990c08ebd0f9ef41f48932f9eb",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1fe627d611cf2c5aaa44a1cf7c4b46a",
"assets/AssetManifest.json": "0c6e88dd14014a8b4b63662b6f76e74d",
"assets/NOTICES": "0ffc6da2bbbf44208f8392e9870b56cf",
"assets/FontManifest.json": "3498d783fbe9cac4c0509353a77ec05f",
"assets/AssetManifest.bin.json": "a848c6916e8d15d449f24254cdd18739",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "457be1de57a71c1e7696f90c05366730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "ba07ac4889c7af1479f77906ad0c86c3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1b4b481bd578ac4e9b750b80203a20b0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5d4bb02aeaa32713117538185656bb9c",
"assets/fonts/SFMono-RegularItalic.ttf": "8eddf7adea62d66b9e4d031b58dfaaa6",
"assets/fonts/Calibre-Semibold.ttf": "8325d174436d55e995c7214faafcd47b",
"assets/fonts/Calibre-LightItalic.ttf": "3ede1be73648125ed40cfd07e1292bf1",
"assets/fonts/SFMono-SemiboldItalic.ttf": "ca70ba8a9030ed9bb7e081f63fd3831b",
"assets/fonts/Calibre-MediumItalic.ttf": "6eb2ac5a1d38f19c7085b131356b355e",
"assets/fonts/SFMono-MediumItalic.ttf": "92f9fb02060aabf378f0639de5e033ef",
"assets/fonts/Calibre-SemiboldItalic.ttf": "71941c0c0420e703494d6e2a62bc12d4",
"assets/fonts/Calibre-Light.ttf": "73b7f4385ae2f8028e1b365a48038582",
"assets/fonts/Calibre-Regular.ttf": "96e0a7c47fdd7a8f05007837ead73b35",
"assets/fonts/Calibre-RegularItalic.ttf": "c408807a3001d1f7773f5f7fe513c165",
"assets/fonts/Bellandha.ttf": "d0413b9282edacaa2deb0d5ab361ea2a",
"assets/fonts/MaterialIcons-Regular.otf": "64866654020f3e8b58cd18148e308af9",
"assets/fonts/SFMono-Regular.ttf": "d892da9f8895428033ec68a6c0426ba6",
"assets/fonts/Calibre-Medium.ttf": "88178c3f2a309ad11520ee62765072d0",
"assets/fonts/SFMono-Medium.ttf": "02bbb63875ebdbf463e764bb3d8ff190",
"assets/fonts/SFMono-Semibold.ttf": "8282ed99a84b8e9c803baf3df5b76c01",
"assets/assets/user_data.json": "4394ac359d7a2e9ba43852fce270834b",
"assets/assets/user_data_with_projects.json": "52d4ff71a7d14c47b5149c5af33fe510",
"assets/assets/me.jpeg": "280a2cdb3ccdc8a353f65a019587427a",
"assets/assets/me_background.png": "e6e8fd0781161b3c9129b3a257eb1407",
"assets/assets/Siddharth_Signature_bg.png": "39fd7b4e1ccbc5a769c72b2a85242a04",
"assets/assets/Siddharth_Signature.png": "336e56db86fe7e37deb41c78e4d81346",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
