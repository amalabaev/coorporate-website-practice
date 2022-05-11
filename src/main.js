import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from './components/UI/UI.js'
import common from './components/common/common.js'

const app = createApp(App)

UI.forEach(item => app.component(item.name, item.component))
common.forEach(item => app.component(item.name, item.component))

app.use(store).use(router).mount('#app')
