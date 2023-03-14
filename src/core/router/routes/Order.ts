export default [
    {
        path: '/order',
        name: 'order',
        meta: {
            title: '需求管理',
        },
        children: [{
            path: '/bug',
            name: 'bug',
            meta: {
                title: 'bug单',
            },
            children: [
                {
                    path: '/order/bug/Introduce',
                    name: 'introduce',
                    component: () => import('@/views/Introduce.vue'),
                    meta: {
                        title: '简介',
                        keepAlive: true,
                        isNav: true,
                    }
                },
                {
                    path: '/order/bug/Introduce2',
                    name: 'introduce2',
                    component: () => import('@/views/Introduce2.vue'),
                    meta: {
                        title: '简介2',
                        keepAlive: false,
                        isNav: true,
                    }
                }
            ]
        }
        ],
    },
]