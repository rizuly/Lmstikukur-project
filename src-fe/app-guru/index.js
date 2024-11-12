import App from './app.vue';
import {
    router
} from './router.js';

new Vue({
    el: '#app',
    router,
    // store,
    render: function (createElement) {
        return createElement(App);
    },
});
