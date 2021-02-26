//cache
//install
//activate
//fetch
let passChecks=[
    '/scripts',
    'css',
    '/index.html'
];
let passUrl=(url='')=>{
    if(url.substr(-1)==='/')return true;
    else return passChecks.some(check=>url.includes(check));
}

let cacheName='static-files-02';

self.addEventListener('activate',(e)=>{
    e.waitUntil(caches.keys().then(keys=>Promise.all(
                                                    keys.map( key=>caches.delete(key) )
                                                    )
                                    )
                )
})

self.addEventListener('fetch',(e)=>{
    if(!passUrl(e.request.url))return;
    e.respondWith(caches.open(cacheName).then(cache=>{
                return cache.match(e.request).then(response=>{
                        if(response)return response;
                        else return fetch(e.request).then(fetch_response=>{
                                            cache.put(e.request,fetch_response.clone());
                                            return fetch_response;
                                    }).catch(err=>{
                                        console.log(err);
                                        return fetch(e.request)
                                    });
             })
        })
    )//respondwith closing.
})