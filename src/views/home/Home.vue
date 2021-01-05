<template>
  <div class="home">
    <main>
      <div class="content">
        <h1>欢迎来到我的小梦想</h1>
        <p>承载着</p>
        <p>希望的风</p>
        <p>荡漾着</p>
        <p>青春的雨</p>
        <p>终于迎来了自己的第一个网站</p>
        <div></div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import goTo from "./../../assets/js/scrollTo";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  setup() {
    const state = reactive({
      username: "",
      password: "",
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    });
    const login = () => {};
    // 挂载
    onMounted(() => {
      // 置顶
      goTo(0);
    });
    return { state, login };
  }
};
</script>
<style lang="less" scoped>
.home {
  main {
    width: 100%;
    height: 100%;
    // background: linear-gradient(-180deg, #00abff, #00ffde);
    background-image: url("./../../assets/images/homeBg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .content {
      background: rgba(255, 255, 255, 0.6);
      min-height: 1000px;
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      h1 {
        font-size: 26px;
        font-weight: 400;
        text-align: center;
        margin-top: 30px;
        color: #333;
      }
      p {
        font-size: 24px;
        font-weight: 400;
        text-align: center;
        margin-top: 30px;
        color: #333;
      }
    }
  }
}
</style>
