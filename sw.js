self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => { self.clients.claim(); });
self.addEventListener("fetch", e => {
  // passa tudo pra rede (sem cache agressivo pra simplificar)
});
