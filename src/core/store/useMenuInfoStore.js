import {
    defineStore
} from 'pinia' //引入pinia

/**
 * 摘自官方文档
 * 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
 * 第一个参数是你的应用中 Store 的唯一 ID。
 */
export const useMenuInfoStore = defineStore('menuInfo', {
    state: () => ({
        asideMenuInfo: {},
        activeTabMenu: '',
        tabMenus: []
    }),
    getters: {
        nextTab: (state) => {
            return (targetName) => {
                if (state.activeTabMenu === targetName) {
                    state.tabMenus.forEach((tab, index) => {
                        if (tab.path === targetName) {
                            const nextTab = state.tabMenus[index + 1] || state.tabMenus[index - 1]
                            if (nextTab) {
                                state.activeTabMenu = nextTab.path
                            }
                        }
                    })
                }
                return state.activeTabMenu
            }
        },
    },
    actions: {
        initAsideMenuInfo(menuInfo) {
            this.asideMenuInfo = menuInfo
        },
        addTabMenu(tab) {
            if (this.tabMenus.length === 0) {
                this.tabMenus = [tab]
            } else {
                let isOpen = false
                for (let index = 0; index < this.tabMenus.length; index++) {
                    if (this.tabMenus[index].path == tab.path) {
                        isOpen = true
                        break
                    }
                }
                if (!isOpen) {
                    this.tabMenus.push(tab)
                }
            }

        },
    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'menuInfo',
            storage: localStorage,
            //指定要长久化的字段
            // paths: ['asideMenuInfo', 'activeTabMenu', 'tabMenus'],
        }]
    }
})