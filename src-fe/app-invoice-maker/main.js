// import { createWebHistory } from 'vue-router'
import list from './list.vue'
import detail from './detail.vue'
import invoice from './invoice.vue'
// import Hasil from './Hasil.vue'

const routes = [
    {
        path: '/',
        name: 'list',
        component: list
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: detail
    },
    {
        path: '/invoice/:id',
        name: 'invoice',
        component: invoice
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes,
});

export  {
    router
}

    


