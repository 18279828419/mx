<template>
  <div class="page">
    <h1>屏蔽按键组合键</h1>
    <h2>键盘码keyCode：</h2>
    <main>
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/keycode.png"
        alt=""
      />
      <h2>（其他键盘码网上可查）</h2>
      <pre v-highlightjs><code class="javascript hljs">
function KeyDown(){    
  if ((window.event.altKey)&&
      ((window.event.keyCode==37)||   //屏蔽 Alt+ 方向键 ←
       (window.event.keyCode==39))){  //屏蔽 Alt+ 方向键 →
     alert("不准你使用ALT+方向键前进或后退网页！");
     event.returnValue=false;
     }
  if ((event.keyCode==8)||            //屏蔽退格删除键
      (event.keyCode==116)){          //屏蔽 F5 刷新键
     event.keyCode=0;
     event.returnValue=false;
     }
  if ((event.ctrlKey)&&(event.keyCode==78)){   //屏蔽 Ctrl+n
     event.returnValue=false;
     }
  if ((event.shiftKey)&&(event.keyCode==121)){ //屏蔽 shift+F10
     event.returnValue=false;
     }
  if (event.keyCode==122){ //屏蔽 F11
     event.returnValue=false;
     }
  }
         </code></pre>
    </main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "Page4",
  components: {},
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped>
main {
  img {
    width: 100%;
  }
}
</style>
