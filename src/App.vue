<template>
  <Header class="Header" v-if="state.headerShow" />
  <router-view />
</template>
<script>
import Header from "./components/header/index";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import goTo from "./assets/js/scrollTo";
export default {
  components: {
    Header
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      headerShow: true
    });
    // 挂载
    onMounted(() => {
      // 路由导航
      router.beforeEach(to => {
        // 置顶
        goTo(0);
        if (to.path === "/Err404") {
          state.headerShow = false;
        } else {
          state.headerShow = true;
        }
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
}
</style>
