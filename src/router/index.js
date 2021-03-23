import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component:() => import('../views/Players/Players.vue')
  },
  {
    path: '/players/:id',
    name: 'Players Details',
    component: () => import('../views/Players/PlayersDetails.vue'),
    props: true
    /*Props degerini true olarak degistirdigimizde route degerimizin propsları da kabul ettigini belirtmis oluyoruz.
    Bu sayede örnegimizdeki ':id' degerini bir property olarak ilgili componentlerde tanımlayarak dinamik bir link yapısı yaratmıs
    oluyoruz.
    */
    
  },
  // redirect
  {
    path: '/all-players',
    redirect: '/players'

    /* Vue redirect yapisi, ilgili path url adresine gidildiginde onun nereye yonlendirilmesini istiyorsak 'redirect' propertysine
    yonlendirmek istedigimiz sayfanin 'path' adresini yazarız. 
    */
  },
  // catchAll 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),

    /* Bulunmayan route degerleri girildiginde bunu yakalamak icin catchAll(.*) regex fonksiyonunu kullanırız. 
    Belirttigimiz path degerlerinden farkli bir deger girildiginde Vue bunu 'catchAll' ile yakalayıp bize 'NotFound' componentini doner.

    '/:catchAll(.*)' yazımının tam olarak bu sekilde olması gerekiyor ki ilgili fonksiyon cagrılırken hata alınmasın.
    
    */
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

  /*
  createwebhistory =>  Web browser history api kullanarak önceki route verilerine gitmemizi sağlar.
  process.env.BASE_URL => Projemizin base url adresini barındırır.
  Burayı %99 ihtimalle değiştirmeyiz sabit kalır.
  */
