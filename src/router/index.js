import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HelloWorld.vue'
import AboutView from '../components/AboutView.vue'

const routes = [
    {path: '/home', name: home, component: HomeView},
    {path: '/about', name: about, component: AboutView},
]

const router = createRouter ({
    history: createMemoryHistory(),
    routes,
})

export default router
