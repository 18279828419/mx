<template>
  <Header class="Header" v-if="state.headerShow" />
  <router-view />
  <Footer class="Footer" v-if="state.headerShow" />
</template>
<script>
import Header from "./components/header/index";
import Footer from "./components/footer/Footer";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import goTo from "./assets/js/scrollTo";
export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      headerShow: true,
      footerShow: true
    });
    // 挂载
    onMounted(() => {
      // 路由导航
      router.beforeEach(to => {
        if (to.path === "/Err404") {
          state.headerShow = false;
          state.footerShow = false;
        } else {
          state.headerShow = true;
          state.footerShow = true;
        }
        // 置顶
        goTo(0);
      });
    });
    return { state };
  }
};
</script>
<style lang="less">
#app {
  background: #f0f0f0;
  padding-top: 68px;
  .Header {
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .Footer {
    overflow: hidden;
  }
}
</style>
