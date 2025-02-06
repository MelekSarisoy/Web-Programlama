import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // If you're using Vue Router

const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // ✅ Register Pinia
app.use(router); // ✅ If using Vue Router

app.mount("#app"); // ✅ Only mount after using Pinia
