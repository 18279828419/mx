<template>
  <div class="home">
    <main>
      <!-- 头部背景 -->
      <div class="headBg"></div>
      <!-- 统计 -->
      <div class="statistics">
        <div class="statisMsg">
          <span>文章：{{ state.articleCount }}</span>
          <span>运行天数：{{ state.operationDate }}</span>
          <span>访问量：{{ state.visitorCount }}</span>
        </div>
      </div>
      <div class="content">
        <div class="leftContent">
          <!-- 头像 -->
          <div class="portrait">
            <img
              src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/touxiang.png"
              alt=""
            />
          </div>
          <!-- 个人信息 -->
          <div class="personalMsg">
            <div v-for="(item, index) in state.personalMsgList" :key="index">
              <span>{{ item.msg }}</span>
            </div>
            <span class="weChat">
              <span>WeChat</span>
              <img
                src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/WeChat.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
        <div class="centerContent">
          <div
            class="blogs"
            v-for="(item, index) in state.blogsList"
            :key="index"
          >
            <h2>{{ item.title }}</h2>
            <p class="details">{{ item.details }}</p>
            <p class="footer">
              <span class="type">{{ item.type }}</span>
              <span class="creatTime">{{ item.creatTime }}</span>
              <span class="author">{{ item.author }}</span>
            </p>
          </div>
        </div>
        <div class="rightContent">
          <div class="motto">
            你不勇敢，没人替你坚强
          </div>
          <div class="weather">
            <div id="weather-v2-plugin-standard"></div>
          </div>
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
import { reactive, onMounted } from "vue";
import goTo from "./../../assets/js/scrollTo";
import blogsList from "@/assets/js/blogsList";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  setup() {
    const state = reactive({
      articleCount: 0, // 文章数量
      operationDate: 0, // 运行天数
      visitorCount: 15, // 访问量
      personalMsgList: [{ msg: "沐心" }, { msg: "QQ：1392660067" }],
      blogsList: blogsList
    });
    const login = () => {};
    // 挂载
    onMounted(() => {
      // 置顶
      goTo(0);
      // 文章数量
      state.articleCount = state.blogsList.length;
      // 运行天数
      var date0106 = 1609862400; // 2021/01/06时间戳（秒）
      var nowDate = parseInt(new Date().getTime() / 1000);
      state.operationDate = Math.ceil((nowDate - date0106) / 60 / 60 / 24); // 向上舍入
      // 天气组件
      window.WIDGET = {
        CONFIG: {
          layout: 2,
          width: "250",
          height: "300",
          background: 1,
          dataColor: "FFFFFF",
          language: "zh",
          borderRadius: "8",
          key: "6vxTzkTq5s"
        }
      };
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://apip.weatherdt.com/standard/static/js/weather-standard-common.js?v=2.0";
      document.getElementsByTagName("head")[0].appendChild(script);
    });
    return { state, login };
  }
};
</script>
<style lang="less" scoped>
.home {
  background: #f0f0f0;
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
      background-image: url("https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/headBg8.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .statistics {
      height: 50px;
      width: 100%;
      background: #fff;
      .statisMsg {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 400px;
        span {
          font-size: 14px;
          font-weight: 500;
          color: #333;
          line-height: 50px;
        }
      }
    }
    .content {
      // background: rgba(255, 255, 255, 0.6);
      min-height: 1000px;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .leftContent {
        width: 250px;
        display: inline-block;
        .portrait {
          position: relative;
          height: 30px;
          img {
            position: absolute;
            top: -150px;
            width: 150px;
            height: 150px;
            border-radius: 16px;
            left: 50px;
          }
        }
        .personalMsg {
          border-radius: 8px;
          background: #fff;
          padding: 20px;
          box-sizing: border-box;
          span {
            font-size: 14px;
            line-height: 30px;
            display: block;
          }
          .weChat {
            position: relative;
            cursor: pointer;
            span {
              font-size: 14px;
              line-height: 30px;
              display: block;
            }
            img {
              display: none;
              width: 100px;
              height: 100px;
              position: absolute;
              top: -110px;
              left: 0;
            }
            &:hover > img {
              display: inline-block;
            }
            // &:hover > ::after {
            //   content: "";
            //   width: 30px;
            //   height: 30px;
            //   background-image: url("");
            //   position: absolute;
            //   top: -30px;
            //   left: 50%;
            //   transform: translateX(-50%);
            // }
          }
        }
      }
      .centerContent {
        display: inline-block;
        width: 650px;
        .blogs {
          height: 130px;
          width: 650px;
          padding: 20px;
          box-sizing: border-box;
          background: #fff;
          border-radius: 8px;
          margin-top: 30px;
          cursor: pointer;
          &:hover {
            box-shadow: inset 0px 0px 17px #aaa;
          }
          h2 {
            font-size: 16px;
            color: #333;
            font-weight: 600;
          }
          .details {
            width: 560px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
            font-size: 14px;
            line-height: 14px;
            margin: 20px 0;
            font-weight: 400;
          }
          .footer {
            width: 300px;
            display: flex;
            justify-content: space-between;
            white-space: nowrap;
            .type {
              font-size: 12px;
              color: #333;
              font-weight: 400;
            }
            .creatTime {
              font-size: 12px;
              color: #333;
              font-weight: 400;
            }
            .author {
              font-size: 12px;
              color: #333;
              font-weight: 400;
            }
          }
        }
      }
      .rightContent {
        width: 250px;
        .motto {
          height: 100px;
          background: #fff;
          margin-top: 30px;
          border-radius: 8px;
          position: relative;
          text-align: center;
          line-height: 100px;
          font-size: 20px;
          font-family: "LiSu";
          box-shadow: 0px 0px 17px #aaa;
          white-space: nowrap;
          &::after {
            // content: "\u000d\u000a\u5ea7\u53f3\u94ed";
            content: "座右铭";
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;
            width: 48px;
            height: 16px;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            background: linear-gradient(-90deg, #00abff, #00ffde);
          }
        }
        .weather {
          margin-top: 30px;
        }
      }
    }
  }
  // https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/wechat.jpg
}
</style>
