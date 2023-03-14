import {
  createRouter,
  createWebHistory
} from 'vue-router'
import {
  useUserInfoStore
} from '@/core/store/useUserInfoStore'


// 动态引入./routes 下路由
// 路由信息集合
let routerList = [];
const moduleFiles =
  import.meta.globEager('./routes/*.ts')

for (const key in moduleFiles) {
  if (Object.hasOwnProperty.call(moduleFiles, key)) {
    if (moduleFiles[key].default) {
      routerList.push(...moduleFiles[key].default)
    }
  }
}
console.log('routerList', routerList)
const router = createRouter({
  /**  
   * 摘自官方文档
   * createWebHashHistory:它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，它在 SEO 中确实有不好的影响。
   * createWebHistory:当使用这种历史模式时，URL 会看起来很 "正常"，例如 https://example.com/user/id。漂亮!
   *    不过，问题来了。由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 https://example.com/user/id，就会得到一个 404 错误。这就尴尬了。
   *    不用担心：要解决这个问题，你需要做的就是在你的服务器上添加一个简单的回退路由。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 index.html 相同的页面。漂亮依旧!
   */
  history: createWebHistory(),
  scrollBehavior: () => ({
    left: 0,
    top: 0
  }),

  routes: [
    ...routerList
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({
      path: '/404'
    })
  } else {
    const userInfoStore = useUserInfoStore()
    if (to.path == '/login') {
      userInfoStore.logout()
      next()
    } else {
      if (userInfoStore.isLogin) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  }

})
export default router