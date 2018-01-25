import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import '@/assets/scss/reset.scss'

import * as filters from './utils/filters'
let filterObj: any = filters;
Object.keys(filterObj).forEach(key => {
    Vue.filter(key, filterObj[key])
})

const app: Vue = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

export default app