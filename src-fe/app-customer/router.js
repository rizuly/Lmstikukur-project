import List from './list.vue'
import Detail from "./detail.vue";
import kirim from "./kirim.vue"

const routes = [{
    path: '/',
    name: 'List',
    component: List,
},
{
    path: '/:id',
    name: 'Detail',
    component: Detail,
},
{
    path: '/customer/post',
    name: 'Buat customer',
    component: kirim,
}
];

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes,
});

export {
    router
}