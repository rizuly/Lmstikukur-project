// import Vue from 'vue'
// import { createApp } from 'vue'
import App from './app.vue';
import { router } from './main.js'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
    el: '#app',
    router,
    render: function (createElement) {
        return createElement(App)
    }
})