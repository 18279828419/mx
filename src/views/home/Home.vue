<template>
  <div class="home">
    <Header />
    <main>
      <div class="content"></div>
    </main>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import Header from "./../../components/header/index";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Header
  },
  setup() {
    const state = reactive({
      username: "",
      password: "",
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    });
    const login = () => {};
    onMounted(() => {
      console.log("组件已挂载");
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
    background: linear-gradient(-180deg, #00abff, #00ffde);
    .content {
      background: rgba(255, 255, 255, 0.5);
      height: 1000px;
      width: 1200px;
      margin: 0 auto;
      h1 {
        font-size: 26px;
      }
    }
  }
}
</style>
