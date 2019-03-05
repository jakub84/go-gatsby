/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "5-31756512084e0d8cbd88.js"
  },
  {
    "url": "app-c255e2642fc3368f1d27.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9ce9f16df6e1dfdafb9b.js"
  },
  {
    "url": "component---src-pages-index-jsx-f8d048a4044d2da3f9e7.js"
  },
  {
    "url": "component---src-pages-index-jsx.e866efc591bf3fc96046.css"
  },
  {
    "url": "fx/splash.svg",
    "revision": "f394eaa65736e1d17f75e0dfff09d3cb"
  },
  {
    "url": "header/go_logo-white.svg",
    "revision": "b5d58646982a7b26b7526d4ab0249ef9"
  },
  {
    "url": "header/go_logo.svg",
    "revision": "425aa8a6561112d95a4f256442b139a8"
  },
  {
    "url": "header/header-background.svg",
    "revision": "2294c6d19fdb9fe9462eb139f7b445f7"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "78b5608da7e580fe1fa8398081952734"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b35278337087b862826690a69c71f9f0"
  },
  {
    "url": "pages-manifest-c0316c7fb1d94110556b.js"
  },
  {
    "url": "product-icons/balony-icon.svg",
    "revision": "332ce6bf02a7b621137e85c6d4abaf60"
  },
  {
    "url": "product-icons/choragiewki-icon.svg",
    "revision": "fcd8cf8143ee312b64fd1c4a9be8cc3b"
  },
  {
    "url": "product-icons/czapeczki-icon.svg",
    "revision": "1dfbb78fb0bee5b6ac2f6e7a257f8902"
  },
  {
    "url": "product-icons/daszki-icon.svg",
    "revision": "3cf08d63dd7f0a33ff582cfd28f25524"
  },
  {
    "url": "product-icons/flagi-wsz-icon.svg",
    "revision": "c64e2eb4b6caf8a1cef58fd0cef5074a"
  },
  {
    "url": "product-icons/kokardy-narodowe-icon.svg",
    "revision": "f61175d8cd2e32108803762468f764d2"
  },
  {
    "url": "product-icons/torby-icon.svg",
    "revision": "cb3f74027bff8890ec4d31a23b792e15"
  },
  {
    "url": "product-icons/wiatraczki-icon.svg",
    "revision": "54a92688907fdc084fcdf7e87c76ee48"
  },
  {
    "url": "static/go_logo-425aa8a6561112d95a4f256442b139a8.svg"
  },
  {
    "url": "static/go_logo-white-b5d58646982a7b26b7526d4ab0249ef9.svg"
  },
  {
    "url": "static/header-background-2294c6d19fdb9fe9462eb139f7b445f7.svg"
  },
  {
    "url": "webpack-runtime-5355b03f1cf93224ed74.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (!cachedResponse) {
          return fetch(offlineShell).then(response => {
            if (response.ok) {
              return caches.open(cacheName).then(cache =>
                // Clone is needed because put() consumes the response body.
                cache.put(offlineShell, response.clone()).then(() => response)
              )
            } else {
              return fetch(event.request)
            }
          })
        }

        return cachedResponse
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
