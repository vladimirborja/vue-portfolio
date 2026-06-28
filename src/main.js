import { createApp } from 'vue'
import App from './App.vue'
import { vScrollReveal } from './directives/scrollReveal'
import { vCardSpotlight } from './directives/cardSpotlight'
import { vTilt } from './directives/tilt'
import './style.css'

const app = createApp(App)
app.directive('scroll-reveal', vScrollReveal)
app.directive('card-spotlight', vCardSpotlight)
app.directive('tilt', vTilt)
app.mount('#app')