import {
    createPinia
} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'


const pinia = createPinia().use(piniaPluginPersist)

export default pinia