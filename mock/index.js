export default [{
    type: 'get',
    url: '/user/login',
    response: () => {
        return {
            isAuth: true
        }
    }
}, {
    type: 'post',
    url: '/user/menu',
    response: () => {
        return {
            menuList: [{
                level: 1,
                id: '1',
                sort: 1,
                name: 'home'
            }, {
                level: 1,
                id: '2',
                sort: 2,
                name: 'userManage'
            }, {
                level: 1,
                id: '3',
                sort: 3,
                name: 'systemManage'
            }, {
                level: 1,
                id: '4',
                sort: 4,
                name: 'order',
                children: [{
                    level: 2,
                    id: '4-1',
                    parentId: '4',
                    sort: 1,
                    name: 'bug',
                    children: [{
                            level: 3,
                            id: '4-1-1',
                            parentId: '4-1',
                            sort: 1,
                            name: 'introduce'
                        },
                        {
                            level: 3,
                            id: '4-1-2',
                            parentId: '4-1',
                            sort: 2,
                            name: 'introduce2'
                        }
                    ]
                }],
            }],
            statusCode: 200
        }
    }
}]