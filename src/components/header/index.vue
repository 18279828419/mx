<template>
  <div class="headerWrap">
    <div class="header">
      <img src="./../../assets/logo.png" alt="" />
      <div class="project">
        <span>vue</span>
        <span>jquery</span>
        <span>react</span>
        <span>git</span>
      </div>
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
    </div>
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
    position: relative;
    img {
      display: inline-block;
      width: 54px;
      height: 48px;
      cursor: pointer;
    }
    .project {
      width: 260px;
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
    }
    .menuList {
      width: 90px;
      background: #fff;
      border-radius: 6px;
      position: absolute;
      left: -100px;
      top: 80px;
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
          margin: 3px auto;
          cursor: pointer;
          &:hover {
            background: #00abff;
          }
        }
      }
    }
  }
}
</style>
