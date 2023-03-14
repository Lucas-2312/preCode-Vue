export default [
    {
        path: '/',
        redirect: '/login',
        name: '/',
        meta: {
            title: '登录',
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页',
        }
    }, {
        path: '/404',
        name: '404',
        component: () => import('@/views/common/404.vue'),
        meta: {
            title: '404',
        }
    }
]