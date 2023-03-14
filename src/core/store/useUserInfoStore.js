import {
    defineStore
} from 'pinia' //引入pinia

/**
 * 摘自官方文档
 * 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
 * 第一个参数是你的应用中 Store 的唯一 ID。
 */
export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        userInfo: null,
        isLogin: false
    }),
    getters: {
        // isLogin: (state) => state.userInfo === null
        // isLogin() {
        //     return !(this.userInfo === null)
        // }
    },
    actions: {
        login() {
            this.userInfo = {
                name: '昌老师'
            }
        },
        logout() {
            this.userInfo = null
            this.isLogin = false
        },
    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'userInfo',
            storage: localStorage,
            //指定要长久化的字段
            // paths: ['asideMenuInfo', 'activeTabMenu', 'tabMenus'],
        }]
    }
})