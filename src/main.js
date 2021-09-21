import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from './sass/main.scss'  

import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'  

library.add(fas , fab)   

createApp().config.productionTip = false    
createApp(App).component('fa', FontAwesomeIcon ).use(store).use(router).use(main).mount('#app')
