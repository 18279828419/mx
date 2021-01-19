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
          <span class="baiduSearch">
            <input type="text" name="baiduSearch" placeholder="神奇的百度" v-model="state.baidu" id="" @keydown.enter="baiduSearch" />
            <span class="search" @click="baiduSearch">
              搜索
            </span>
          </span>
        </div>
      </div>
      <div class="content">
        <div class="leftContent">
          <!-- 头像 -->
          <div class="portrait">
            <img src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/touxiang.png" alt="" />
          </div>
          <!-- 个人信息 -->
          <div class="personalMsg">
            <div v-for="(item, index) in state.personalMsgList" :key="index">
              <span>{{ item.msg }}</span>
            </div>
            <span class="weChat">
              <span>WeChat</span>
              <img src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/WeChat.jpg" alt="" />
            </span>
          </div>
          <div class="visitors">
            <p>访问量</p>
            <a href="https://info.flagcounter.com/LxAB"><img
                src="https://s01.flagcounter.com/count2/LxAB/bg_FFFFFF/txt_000000/border_CCCCCC/columns_1/maxflags_4/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
                alt="Flag Counter" border="0" /></a>
          </div>
        </div>
        <div class="centerContent">
          <div :class="{
              blogs: true,
              animate__animated: true,
              animate__fadeInLeft: index % 2 === 0 ? true : false,
              animate__fadeInRight: index % 2 !== 0 ? true : false
            }" v-for="(item, index) in state.blogsList" :key="index" @click="blogsCheck(item.id)">
            <h2>{{ item.title }}</h2>
            <p class="details">{{ item.details }}</p>
            <p class="footer">
              <span class="type">{{ item.type }}</span>
              <span class="creatTime">{{ item.creatTime }}</span>
              <span class="author">{{ item.author }}</span>
            </p>
          </div>
          <div class="paging">
            <nav aria-label="Page paging">
              <ul class="pagination justify-content-center">
                <li :class="{'page-item':true,'disabled':state.currentPage===1?true:false}">
                  <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true" >&laquo;</span>
                  </a>
                </li>
                <li :class="{'page-item':true,'active':state.currentPage===index+1?true:false}" v-for="(item,index) in state.totalPage" :key="index"><a class="page-link">{{item}}</a></li>
                <li  :class="{'page-item':true,'disabled':state.currentPage===state.totalPage?true:false}">
                  <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
import blogsList from "@/assets/js/blogsList";
import { useRouter } from "vue-router";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  setup () {
    const router = useRouter();
    const state = reactive({
      articleCount: 0, // 文章数量
      operationDate: 0, // 运行天数
      baidu: "", // 搜索
      currentPage: 1, // 当前页
      totalPage: 0, // 总页数
      personalMsgList: [
        { msg: "沐心" },
        { msg: "QQ：1392660067" },
        { msg: "email：1392660067@qq.com" }
      ],
      blogsList: blogsList
    });
    const baiduSearch = () => {
      window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + state.baidu);
    };
    const blogsCheck = id => {
      router.push({ path: `/Page${id}` });
    };
    // 挂载
    onMounted(() => {
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
      // 总页数
      state.totalPage = Math.ceil(state.articleCount / 10)
    });
    return { state, blogsCheck, baiduSearch };
  }
};
</script>
<style lang="less" scoped>
.home {
  main {
    width: 100%;
    height: 100%;
    // background: linear-gradient(-180deg, #00abff, #00ffde);
    // background-image: url("https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/homeBg.jpg");
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
        width: 600px;
        span {
          font-size: 14px;
          font-weight: 500;
          color: #333;
          line-height: 50px;
        }
        .baiduSearch {
          display: flex;
          align-self: center;
          input {
            outline: none;
            border: 1px solid #cdcdcd;
            border-radius: 8px;
            height: 28px;
            width: 180px;
            padding-left: 15px;
            box-sizing: border-box;
            position: relative;
            background: #eee;
          }
          .search {
            display: inline-block;
            height: 28px;
            width: 40px;
            background: #eee;
            align-items: center;
            color: #333;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            border-radius: 8px;
            margin-left: 5px;
            cursor: pointer;
            box-shadow: inset 0px 0px 5px #aaa;
          }
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
      .disabled {
        cursor: no-drop;
        background: #eee;
      }
      .active {
        background-color: #337ab7;
        color: #fff;
      }
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
            box-sizing: border-box;
            &:hover {
              background: #ddd;
              border-radius: 8px;
              padding-left: 10px;
            }
          }
          .weChat {
            position: relative;
            cursor: pointer;
            span {
              font-size: 14px;
              line-height: 30px;
              display: block;
              box-sizing: border-box;
              &:hover {
                border-radius: 8px;
                background: #ddd;
              }
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
        .visitors {
          background: #fff;
          width: 250px;
          min-height: 155px;
          padding: 20px;
          box-sizing: border-box;
          margin-top: 30px;
          border-radius: 8px;
          p {
            font-size: 14px;
            line-height: 14px;
            margin: 10px 0;
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
            margin: 0;
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
        // 分页
        .paging {
          margin: 20px auto;
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
