## Primer Archivo

export default defineConfig({
plugins: [
vue({
template: {
compilerOptions: {
isCustomElement: (tag) => tag === 'encap-tutor',
},
},
}),
vueDevTools(),
],
resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url)),
},
},
})

## Main Ts

import './assets/main.css'
// Importar el punto de entrada del Web Component
import './assets/tutor-widget/encap-tutor.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

## App.vue

  <main>
    <TheWelcome />

    <!-- Renderiza el Web Component aquí -->
    <encap-tutor
      user-id="123"
      course-id="abc"
      module-id="module1"
      student-name="Admin"
      course-progress="50"
    ></encap-tutor>

  </main>
 
##  assets/tutor-widget
encap-tutor.js
