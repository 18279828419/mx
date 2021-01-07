<template>
  <div class="page">
    <h1>获取两整数区间内的随机整数</h1>
    <pre v-highlightjs>
      <code class="javascript hljs">
var x = 1
var y = 10
var stochastic= parseInt(Math.random() * (y - x + 1) + x); //1-10之间的随机整数（包含x和y）
      </code></pre>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "page2",
  components: {},
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped></style>
