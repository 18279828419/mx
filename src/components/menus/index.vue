<template>
  <div class="menuList">
    <ul>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.menuList {
  width: 90px;
  background: #fff;
  border-radius: 6px;
  ul {
    min-height: 300px;
    width: 90px;
    border-radius: 6px;
    padding: 15px 0;
    li {
      color: #333;
      height: 32px;
      width: 70px;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      border-radius: 8px;
      margin: 0 auto;
      cursor: pointer;
      &:hover {
        background: #00abff;
      }
    }
  }
}
</style>
