<template>
  <div class="Err404">
    <main>
      <p>找不到页面啦!</p>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Err404"
};
</script>
<style lang="less" scoped>
.Err404 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  main {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-image: url("https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/404error.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    p {
      font-size: 32px;
      font-weight: 600;
      font-family: "YouYuan";
      text-align: center;
      margin-top: 400px;
    }
  }
}
</style>
