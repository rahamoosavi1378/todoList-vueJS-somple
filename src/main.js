import {createApp} from 'vue'

import App from '@/App.vue'
import Store from './StoreDB/Store'
// import {createStore} from 'vuex'

const app = createApp(App)
app.use(Store)
app.mount('#app')
