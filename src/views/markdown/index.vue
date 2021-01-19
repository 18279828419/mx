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
    <div class="tool">
      <span></span>
    </div>
    <div class="markdownBox">
      <div class="markdownWrite">
        <textarea v-model="state.content"></textarea>
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
// import { mavonEditor } from "mavon-editor"; //Markdown; //Markdown
// import "mavon-editor/dist/css/index.css"; //Markdown
export default {
  // install(Vue) {
  //   Vue.use(mavonEditor);
  // },
  name: "markdown",
  components: {
    // mavonEditor
  },
  setup() {
    const state = reactive({
      content: "",
      toolList: [
        { id: 0, name: "" },
        { id: 0, name: "" },
        { id: 0, name: "" },
        { id: 0, name: "" },
        { id: 0, name: "" },
        { id: 0, name: "" }
      ]
    });
    const marChange = () => {};

    onMounted(() => {
      document.onkeydown = function() {
        if (event.keyCode == 9) {
          state.content += " ";
          return false;
        }
      };
    });
    return { state, marChange };
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
    .markdownWrite {
      width: 550px;
      min-height: 900px;
      background-color: #fff;
      border: 1px solid #333;
      padding: 15px;
      textarea {
        width: 100%;
        min-height: 900px;
        resize: none;
        outline: none;
        font-family: "Consolas";
        border: none;
      }
    }
    .markdownShow {
      width: 550px;
      min-height: 900px;
      background-color: #fff;
      overflow-x: hidden;
      padding: 15px;
      border: 1px solid #333;
      .hljs {
        width: 550px !important;
      }
    }
  }
}
</style>
