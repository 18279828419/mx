<template>
  <div class="headerWrap">
    <div class="header">
      <div class="logo" @click="toHome">
        <img src="./../../assets/logo.png" alt="" />
        <span>小梦想</span>
      </div>
      <div class="project">
        <span
          :class="item.id === state.headerActiveId ? 'isActive' : ''"
          v-for="item in state.headerList"
          :key="item.id"
          @click="headerSelected(item.id)"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      headerList: [
        { id: 0, name: "首页" },
        { id: 1, name: "vue" },
        { id: 2, name: "react" },
        { id: 3, name: "git" },
        { id: 4, name: "我的" },
        { id: 5, name: "其他" }
      ],
      headerActiveId: 0 // 头部点击项id
    });
    // 点击头部菜单
    const headerSelected = id => {
      state.headerActiveId = id;
      switch (id) {
        case 0:
          router.push({ path: "/" });
          break;
        case 1:
          router.push({ path: "/vue" });
          break;
        case 2:
          router.push({ path: "/vue" });
          break;
        case 3:
          router.push({ path: "/vue" });
          break;
        case 4:
          router.push({ path: "/vue" });
          break;
        case 5:
          router.push({ path: "/vue" });
          break;
      }
    };
    // 回到首页
    const toHome = () => {
      router.push({
        name: "Home"
      });
    };
    // 组件已挂载
    onMounted(() => {});
    return { state, headerSelected, toHome, router };
  }
};
</script>

<style lang="less" scoped>
.headerWrap {
  width: 100%;
  height: 68px;
  // background: linear-gradient(-180deg, #00abff, #00ffde);
  background: #333;
  .header {
    height: 68px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 68px;
      position: relative;
      cursor: pointer;
      img {
        display: inline-block;
        width: 54px;
        height: 48px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      span {
        font-family: "LiSu";
        font-size: 36px;
        line-height: 68px;
        font-weight: 400;
        color: #f0f0f0;
        display: inline-block;
        margin-left: 60px;
      }
    }
    .project {
      width: 400px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        color: #fff;
        font-size: 16px;
        font-weight: 500px;
        cursor: pointer;
        &:hover {
          color: #00abff;
        }
      }
      .isActive {
        color: #00abff;
      }
    }
  }
}
</style>
