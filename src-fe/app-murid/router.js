import List from './list.vue'
import Detail from "./detail.vue";

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
];

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes,
});

export {
    router
}