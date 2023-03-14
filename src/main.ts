import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import pinia from '@/core/store'
import router from '@/core/router'
import tools from '@/core/tools'
import App from './App.vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.provide("tools", tools)
app.use(ElementPlus).use(pinia).use(router)

app.mount('#app')
