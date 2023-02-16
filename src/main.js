import { createApp } from "vue";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueCookies from 'vue-cookies'
import Axios from 'axios'

import "ant-design-vue/dist/antd.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd).mount("#app");
app.use(VueCookies)

app.config.globalProperties.$http = Axios
Axios.defaults.baseURL = import.meta.env.VITE_BASE_URL