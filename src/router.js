import { createRouter, createWebHashHistory } from 'vue-router'

import index from './views/index.vue'
import about from './views/about.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: index },
    { path: '/about', component: about }
  ]
})
