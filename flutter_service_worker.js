'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b15e6ac65b01445d294376ce19b257d",
"assets/AssetManifest.bin.json": "0c36dce80785ce13d1297eee7872763b",
"assets/AssetManifest.json": "ad33e4af90b2db168ca298fea82b074f",
"assets/assets/data/map_style.json": "0109146db42f288eaaa6d89a37175a57",
"assets/assets/img/airpods_pro.png": "99568e4e64fa06a971978dad1ea4bde2",
"assets/assets/img/amazon_prime.png": "43b74c3b216a62779840f9b23892d441",
"assets/assets/img/bio.jpg": "9da25349d0316a5a44f1e0761ba557c5",
"assets/assets/img/bluetooth_speaker.jpg": "f4bdbd205eef850c73fd527198c49c51",
"assets/assets/img/bowman.jpg": "832ae1cf60d5a76a91bec6798be3ed37",
"assets/assets/img/brackett.jpg": "d06abfd09129c518a52dd262daedbae8",
"assets/assets/img/brooks.jpg": "185c4df4f4c7c248b3bd98f29215033e",
"assets/assets/img/business.jpg": "e809f9a730308bf68a9471d2a5f980ec",
"assets/assets/img/cfa_red.png": "62efccd5223641d5c848932e030e3378",
"assets/assets/img/cooper.jpg": "2067cb7129fe67064b73b7435915c944",
"assets/assets/img/dining.jpg": "0dd4ad11211a0a7c29a4c9e18f112cba",
"assets/assets/img/fitbit.png": "af9fc985c98d2a9c96cd893a55d7b23f",
"assets/assets/img/fluor.jpg": "e0281aa028af0eebedabcc19eb60f929",
"assets/assets/img/freeman.jpg": "2b97f1a318b5fc165c956d25f773a2e7",
"assets/assets/img/hardin.jpg": "6545236a09175351a723611c7194a715",
"assets/assets/img/hub.jpg": "4ee0a068d0fda17135bc00f7d8a7d758",
"assets/assets/img/littlejohn.jpg": "934feacfa9e95ad77fc9ea2fd7adb76f",
"assets/assets/img/long.jpg": "c2337ab028dd82ff04e57a7631c0c6d6",
"assets/assets/img/mcadams.jpg": "0b3c52edcf1b60269a00eca7606890ef",
"assets/assets/img/movie_tickets.jpg": "9122f26f2fda783dfca440c28e640da6",
"assets/assets/img/netflix.png": "ea2389888c0b92d89d1228b64ba647ad",
"assets/assets/img/online_course.png": "03c8b1d6673225449abb2bc55409576e",
"assets/assets/img/outdoor.jpg": "27882f33439e0c213044db2900480bb4",
"assets/assets/img/portable_charger.jpg": "6312218bb3f6af91e8e9fbd84c8e5560",
"assets/assets/img/profilepic.jpg": "1668f882b545dae33f4d050062ce32f9",
"assets/assets/img/progress_bar.png": "f5384c83aaab65d9e055b3b6d6cbd394",
"assets/assets/img/riggs.jpg": "82bc22081838706ea96da93553cb6263",
"assets/assets/img/sikes.jpg": "08000f28aa8b45ee9d3566655b831c8b",
"assets/assets/img/sirrine.jpg": "16c98ecc12847f5a0d3808bfa1987cdc",
"assets/assets/img/six_flags.jpeg": "299c13d34aa36ac77fde9a774a42b507",
"assets/assets/img/spotify.png": "f7c70458f57a93e073745f9f48d29612",
"assets/assets/img/stadium.jpg": "ea25a80f3dcb195620029402d79be7de",
"assets/assets/img/starbucks.png": "31112c56d52736adabb8825e867bcb89",
"assets/assets/img/static-paw-003940-c_orange_1.jpg": "7e7ee9f5cb3f9e74994509f97ebd9104",
"assets/assets/img/strode.jpg": "f532f68ae1de1ea3953c1ea5007637e9",
"assets/assets/img/tillman.jpg": "da611aad1faf18b60f85711740fd4365",
"assets/assets/img/whole_foods.png": "a8e6cc72f4b3cce5b7c7f8adc03aae20",
"assets/assets/img/yoga_class.jpg": "6ab628ff95f1d7c577e3d786d41962f9",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "12c4a58a116b99aae61a73093ce7612c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d06b11fc8120119b3c371430db60c88e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "571931ba5da7f6f8b5587d5365133509",
"/": "571931ba5da7f6f8b5587d5365133509",
"main.dart.js": "8f31ae6a13ef082a61b3f378d542d9b3",
"manifest.json": "9e71daf2c10e5b54aea2129b3fcdd1fa",
"version.json": "3fc7197b8cef6d049c61de8f100937e5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
