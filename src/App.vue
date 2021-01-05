<template>
  <Header v-if="state.headerShow" />
  <router-view />
</template>
<script>
import Header from "./components/header/index";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
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
