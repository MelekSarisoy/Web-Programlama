import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css', 
    '@fortawesome/fontawesome-free/css/all.min.css',// Bootstrap CSS dosyasını dahil et
    'bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons'ı ekle
  ],
  plugins: [
    '~/plugins/firebase'
  ],
  vite: {
    optimizeDeps: {
      include: ['bootstrap'] // Bootstrap gibi kütüphaneleri optimize et
    }
  },
  modules: ['@pinia/nuxt'],

});