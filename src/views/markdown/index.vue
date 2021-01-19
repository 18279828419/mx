<template>
  <div class="markdownWrap">
    <div class="tip">
      <span>
        书写区
      </span>
      <span>
        展示区
      </span>
    </div>
    <div class="markdownBox">
      <div class="markdownWrite">
        <textarea v-model="state.content"></textarea>
      </div>
      <div class="tool">
        <!-- <span class="btn btn-default" html="'<h1>我爱你<h1>'" data-toggle="popover,tooltip" data-placement="right"  title="右侧的 Tooltip"
        v-for="(item,index) in state.toolList" :key="index">{{item.name}}</span> -->
        <div class="btn-group" v-for="(item,index) in state.toolList" :key="index">
          <button @click="handleTool(item)" type="button" :class="{'dropdown-toggle':item.childer?true:false,'btn-default':true,'btn':true}"
            data-toggle="dropdown">{{item.name}}
            <span class="caret"></span>
          </button>
          <ul v-show="item.childer?true:false" class="dropdown-menu" role="menu">
            <li @click.stop="handleTool(i)" v-for="(i,ind) in item.childer" :key="ind">
              {{i.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="markdownShow">
        <!-- breaks将\n段落转换为<br>。 -->
        <vue3-markdown-it :source="state.content" :html="true" :breaks="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "markdown",
  components: {
  },
  setup () {
    const state = reactive({
      content: "",
      toolList: [
        {
          id: 0, name: "标题", childer: [
            { id: 1001, name: "h1", instrument: '# 标题\n' },
            { id: 1002, name: "h2", instrument: '## 标题\n' },
            { id: 1003, name: "h3", instrument: '### 标题\n' },
            { id: 1004, name: "h4", instrument: '#### 标题\n' },
            { id: 1005, name: "h5", instrument: '##### 标题\n' },
            { id: 1006, name: "h6", instrument: '###### 标题\n' },
          ]
        },
        { id: 1, name: "加粗", instrument: '**加粗样式**' },
        { id: 2, name: "斜体",instrument: '*斜体样式*' },
        { id: 3, name: "删除线",instrument: '~~删除线格式~~ '  },
        { id: 4, name: "无序",instrument: ' - List item'  },
        { id: 5, name: "有序",instrument: '1. List item'  },
        {
          id: 6, name: "代码块", childer: [
            { id: 6001, name: "HTML",instrument: '```html\nList item\n```\n'  },
            { id: 6002, name: "JS",instrument: '```javascript\nList item\n```\n'  },
            { id: 6003, name: "CSS",instrument: '```css\nList item\n```\n'  },
          ]
        },
      ]
    });
    const handleTool = (item) => {
      console.log(item)
      if (!item.childer) {
        state.content += item.instrument
      } else {
        return;
      }
      console.log(state.content)
    };

    onMounted(() => {
      document.onkeydown = function () {
        if (event.keyCode == 9) {
          state.content += " ";
          return false;
        }
      };
      $("[data-toggle='popover']").popover();
      $("[data-toggle='tooltip']").tooltip();
    });
    return { state, handleTool };
  }
};
</script>
<style lang="less" scoped>
.markdownWrap {
  height: 100%;
  width: 100%;
  .tip {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: 0 auto;
    height: 44px;
    span {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      line-height: 44px;
    }
  }
  .markdownBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 auto;
    width: 1200px;
    .tool {
      display: flex;
      flex-direction: column;
      width: 80px;
      background-color: #fff;
      border-radius: 8px;
    }
    .markdownWrite {
      width: 550px;
      min-height: 900px;
      background-color: #fff;
      border: 1px solid #333;
      font-family: "Consolas";
      padding: 15px;
      textarea {
        width: 100%;
        min-height: 900px;
        font-size: 16px;
        resize: none;
        outline: none;
        font-family: "Consolas";
        border: none;
      }
    }
    .markdownShow {
      width: 550px;
      font-size: 18px;
      min-height: 900px;
      background-color: #fff;
      overflow-x: scroll;
      padding: 20px;
      border: 1px solid #333;
      .hljs {
        width: 550px !important;
      }
    }
  }
  .dropdown-toggle,
  .btn {
    outline: none;
    &:focus {
      border: none;
      box-shadow: none;
    }
  }
  .btn-default {
    height: 40px;
    border: none;
    &:hover {
      background-color: #b9efff;
    }
  }
  .dropdown-menu {
    padding: 10px;
    box-sizing: border-box;
    li {
      margin: 5px 0;
      padding: 0 15px;
      box-sizing: border-box;
      &:hover {
        border-radius: 4px;
        background-color: #b9efff;
        cursor: pointer;
      }
    }
  }
}
</style>
