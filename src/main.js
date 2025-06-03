// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// import echarts from 'echarts'

import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
import { componentPlugin } from './components'

// import { getCategory } from './apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
    
// })
const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
// app.config.globalProperties.$echarts = echarts
app.mount('#app')
   
