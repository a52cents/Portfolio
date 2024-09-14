import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react(),
    VitePWA({
      registerType:'autoUpdate',
      includeAssets:'./src',
      manifest:{
        name:'Portfolio de Kalim Aouziou',
        short_name:'Portfolio',
        description:'Voici le portfolio professionnel de Kalim Aouziou',
        display_override:["standalone", 'fullscreen',"minimal-ui"],
        display:'standalone'
      }
    })
  ],
})
