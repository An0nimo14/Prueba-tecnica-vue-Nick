import { createApp } from 'vue'
import App from './App.vue'  // ❌ NO './app/App.vue'

import '../assets/styles/base.css'
import '../assets/styles/layout.css'
import '../assets/styles/utilities.css'
import '../assets/styles/brutal-components.css'

createApp(App).mount('#app')