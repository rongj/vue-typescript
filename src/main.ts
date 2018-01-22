import Vue from 'vue'


import App from './App.vue'
import router from './router/index'

import '@/assets/scss/reset.scss'

const app: Vue = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app