<template>
  <div class="footer">
    <p>
      Copyright ©<a href="http://beian.miit.gov.cn/">赣ICP备2021000417号</a>
    </p>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: null,
  components: {},
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 44px;
  background: #373d41;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #f0f0f0;
    text-align: center;
    line-height: 44px;
    a {
      margin-left: 20px;
      color: #f0f0f0;
    }
  }
}
</style>
