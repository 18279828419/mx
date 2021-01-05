<template>
  <div class="home">
    <main>
      <div class="headBg"></div>
      <div class="content">
        <div class="portrait">
          <img src="@/assets/images/touxiang.png" alt="">
        </div>
        <div>
          <!-- <pre v-highlightjs><code class="css hljs">
           {
             border:1px solid red;
           }
            </code></pre> -->
        </div>
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
  setup () {
    const state = reactive({
      username: "",
      password: "",
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    });
    const login = () => { };
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
    // background-image: url("./../../assets/images/homeBg.jpg");
    // background-size: cover;
    // background-repeat: no-repeat;
    .headBg {
      height: 300px;
      width: 100%;
      background-image: url("./../../assets/images/headBg8.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .content {
      background: rgba(255, 255, 255, 0.6);
      min-height: 1000px;
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .portrait {
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
}
</style>
