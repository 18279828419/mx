<template>
  <div class="page">
    <h1>vue实现广告栏的上下滚动效果</h1>
    <p>HTML部分</p>
    <pre v-highlightjs>
      <code class="html hljs">
 &lt;div class="roll"&gt;
  &lt;img src="xxx.jpg" alt /&gt;
  &lt;ul :class="{marquee_top:animate}"&gt;
    &lt;li v-for="(item, index) in msg" :key="index"&gt;
      &lt;span class="txtWrap"&gt;
        &lt;span class="txt"&gt;<font v-pre>{{item.name}}</font>抢得商品<font v-pre>{{item.goods}}</font>&lt;/span&gt;
        &lt;span class="txt"&gt;已有123人申请&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
      </code>
    </pre>
    <p>js部分</p>
    <pre v-highlightjs>
      <code class="javascript hljs">
data () {
  return {
	 msg: [
	      {
	        name: '张**',
	        goods: '牙膏'
	      },
	      {
	        name: '王**',
	        goods: '牙刷'
	      },
	      {
	        name: '钟**',
	        goods: '肥皂'
	      }
	    ],
	  animate: false,
	  setInTime:'' // 定时器
  }
 },
mounted:{
	this.setInTime = setInterval(this.showMarquee, 3000)
},
destroyed () {
    clearInterval(this.setInTime) // 页面销毁时清除定时器
 },
methods:{
	// 滚动栏滚动
    showMarquee () {
      this.animate = true
      setTimeout(() => {
        this.msg.push(this.msg[0])
        this.msg.shift()
        this.animate = false
      }, 500)
    },
}
      </code>
    </pre>
    <p>关键css部分</p>
    <pre v-highlightjs>
      <code class="css hljs">
.marquee_top {
        transition: all 0.5s;
        margin-top: -26px; /* 容器高度 */
 }
      </code></pre>
    <p>实现效果：3秒向上滚动一次</p>
    <main>
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/gundong.gif"
        alt=""
      />
    </main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
// @ is an alias to /src
export default {
  name: "page1",
  components: {},
  setup() {
    const state = reactive({});
    // 挂载
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped></style>
