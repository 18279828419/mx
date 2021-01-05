import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/reset.less";
import "./../tool/rem"; // 移动端rem转换

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
