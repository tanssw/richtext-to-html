import { createRouter, createWebHashHistory } from 'vue-router'

import Converter from './pages/converter/Converter.vue'
import NotFound from './pages/error/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Converter, name: 'Converter'},
        {path: '/404', component: NotFound, name: 'NotFound'},
        {path: '/:pathMatch(.*)*', redirect: '/404'}
    ]
})

export default router