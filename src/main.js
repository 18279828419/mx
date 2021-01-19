import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "./../tool/rem"; // 移动端rem转换
import VueHighlightJS from "vue3-highlightjs"; // 代码高亮
import "highlight.js/styles/night-owl.css"; // 代码高亮
import animated from "animate.css";
import VueMarkdownIt from "vue3-markdown-it";
// 引入jQuery、bootstrap
import $ from "jquery";
import "bootstrap";
// 引入bootstrap样式
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// 全局注册 $
let app = (createApp(App)
  .use(store)
  .use(router)
  .use(VueHighlightJS)
  .use(animated)
  .use(VueMarkdownIt).prototype.$ = $);

app.mount("#app");
