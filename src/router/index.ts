import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import detail from '@/pages/detail.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: index,
            name: 'index'
        },
        {
            path: '/detail/:id/:type',
            component: detail,
            name: 'detail'
        }
    ]
})