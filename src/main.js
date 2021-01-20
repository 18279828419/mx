import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "./../tool/rem"; // 移动端rem转换
import VueHighlightJS from "vue3-highlightjs"; // 代码高亮
import "highlight.js/styles/night-owl.css"; // 代码高亮
import "./assets/js/fireworks.js";
// 全局注册 $
createApp(App)
  .use(store)
  .use(router)
  .use(VueHighlightJS)
  .mount("#app");
