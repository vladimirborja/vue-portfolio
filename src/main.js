import { createApp } from 'vue'
import App from './App.vue'
import { vScrollReveal } from './directives/scrollReveal'
import './style.css'

const app = createApp(App)
app.directive('scroll-reveal', vScrollReveal)
app.mount('#app')