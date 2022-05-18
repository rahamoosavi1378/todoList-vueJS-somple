import { StoreVar } from '@/Store'
import App from '@/App.vue'

import {createApp} from 'vue'
import {createStore} from 'vuex'

const Store = createStore(StoreVar)

const app = createApp(App)
app.use(Store)
app.mount('#app')
