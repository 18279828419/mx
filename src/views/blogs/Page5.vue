<template>
  <div class="page">
    <h1>div的宽高详解</h1>
    <h2>属性：</h2>
    <pre v-highlightjs><code class="javascript hljs">
window.innerWidth //除去菜单栏的窗口宽度
window.innerHeight//除去菜单栏的窗口高度
window.outerWidth//包括菜单栏的窗口宽度
window.outerHeight//包括菜单栏的窗口宽度
window.screen.height//电脑屏幕的高度
window.screen.width//电脑屏幕的宽度
window.screen.availHeight//电脑屏幕的可利用高度
window.screen.availWidth//电脑屏幕的可利用宽度
window.screenTop//浏览器距离屏幕的高度
window.screenLeft//浏览器距离屏幕的宽度
document.body.clientWidth//指元素的自身宽度（网页可见区域宽）（包括padding，即内容+padding；如果没有滚动条，即元素本身宽高，如果有滚动条，滚动条会遮盖元素宽高，此时，该属性就是其本来宽高减去滚动条的宽度）
document.body.clientHeight//指元素的自身的高度（网页可见区域高）（包括padding即内容+padding）
document.body.clientLeft//子级div内容位置到父级内容区域的宽度距离(即border值)
document.body.clientTop//子级div内容位置到父级内容区域的高度距离(即border值)
document.body.offsetWidth//指定元素的宽度（包括padding，border和内容；如果没有padding和border，则offsetWidth == clientWidth）
document.body.offsetHeight//指定元素的高度（包括padding，border和内容）
document.body.offsetTop//距离父级元素的高度
document.body.offsetLeft//距离父级元素的宽度
document.body.scrollWidth//获取的是文档（全文）的宽度（当指定的宽度小于浏览器窗口的时候，为浏览器的宽度）
document.body.scrollHeight//获取的是文档（全文）的高度（当指定的高度小于浏览器窗口的时候，为浏览器的高度）
document.body.scrollTop//文档被滚动上去的高（即滚动条往上滚动的距离）
document.body.scrollLeft//文档被滚动右去的宽（即滚动条往右滚动的距离）
 </code></pre>
    <h2>scroll拓展</h2>
    <p>谷歌浏览器下</p>
    <p>当指定的宽高小于浏览器窗口的时候</p>
    <p>scrollWidth为浏览器的宽度</p>
    <p>scrollHeight为浏览器的高度</p>
    <p>当给的宽高大于浏览器窗口，且内容小于给定的宽高时</p>
    <p>scrollWidth为给定的宽度+padding、margin和border</p>
    <p>scrollHeight为给定的宽度+padding、margin和border</p>
    <p>当给定的宽高大于浏览器窗口，且内容大于给定的宽高</p>
    <p>scrollWidth为内容宽度+所有的padding,margin和border</p>
    <p>scrollHeight为内容高度+所有的padding,margin和border</p>
    <p>该属性是可读写的</p>
    <p>指当元素其中的内容超出其宽高的时候，元素被卷起的高度或宽度</p>
    <h2>HTML精确定位：</h2>
    <pre v-highlightjs><code class="javascript hljs">
// scrollLeft,scrollWidth,clientWidth,offsetWidth   
scrollHeight: 获取对象的滚动高度。   
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离   
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离   
scrollWidth:获取对象的滚动宽度   
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度   
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置   
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置   
event.clientX 相对文档的水平坐标   
event.clientY 相对文档的垂直坐标   
event.offsetX 相对容器的水平坐标   
event.offsetY 相对容器的垂直坐标   
document.documentElement.scrollTop 垂直方向滚动的值   
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量  
</code></pre>
    <h2>某些兼容性问题</h2>
    <p>
      相对于屏幕:screenX/Y
    </p>
    <p>获取的是点击位置相对于屏幕的左边距与上边距</p>
    <p>相对于浏览器窗口：clientX/Y</p>
    <p>获取的是鼠标点击位置相对于浏览器可视区域的左边距和上边距</p>
    <p>相对于文档：pageX/Y</p>
    <p>相对于元素：offsetX/Y</p>
    <p>
      兼容性：
      在Chrome可以通过document.body.scrollLeft，document.body.scrollTop计算出页面滚动位移，而在IE下可以通过document.documentElement.scrollLeft
      ，document.documentElement.scrollTop
    </p>
    <p>兼容通用写法：</p>
    <pre v-highlightjs><code class="javascript hljs">
function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    return { 'x': x, 'y': y };
}

</code></pre>
    <main>
      <h2>图解部分：</h2>
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/scroll1.jpg"
        alt=""
      />
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/scroll2.png"
        alt=""
      />
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/scroll3.jpg"
        alt=""
      />
    </main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "Page5",
  components: {},
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped></style>
