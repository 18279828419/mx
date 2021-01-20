<template>
  <div class="markdownWrap">
    <div id="markdown"></div>
  </div>
  <div class="btnBox">
    <span class="save" @click="saveHtml">保存</span>
    <span class="clear" @click="clearEditor">清空</span>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "markdown",
  components: {},
  setup() {
    const state = reactive({
      editor: null
    });
    // 保存
    var saveHtml = () => {
      let html = state.editor.txt.html();
      console.log(html);
    };
    // 清空
    var clearEditor = () => {
      state.editor.txt.clear();
    };
    // 建立配置文本编辑器
    var createMark = () => {
      const E = window.wangEditor;
      state.editor = new E("#markdown");
      // 设置编辑区域高度为 500px
      state.editor.config.height = 900;
      state.editor.config.zIndex = 10;
      // 配置菜单栏，设置不需要的菜单
      state.editor.config.menus = [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "indent",
        "lineHeight",
        "foreColor",
        "backColor",
        "link",
        "list",
        "todo",
        "justify",
        "quote",
        "emoticon",
        "image",
        // "video",
        "table",
        "code",
        "splitLine",
        "undo",
        "redo"
      ];
      // 挂载highlight插件
      state.editor.highlight = window.hljs;
      //插入代码语言配置
      state.editor.config.languageType = [
        "Bash",
        "C",
        "C#",
        "C++",
        "CSS",
        "Java",
        "JavaScript",
        "JSON",
        "TypeScript",
        "Plain text",
        "Html",
        "XML",
        "SQL",
        "Go",
        "Kotlin",
        "Lua",
        "Markdown",
        "PHP",
        "Python",
        "Shell Session",
        "Ruby"
      ];
      // 样式过滤
      //从其他地方（如网页、word 等）复制文本到编辑器中，
      //编辑器会默认过滤掉复制文本的样式，这样可以让编辑器内容更加简洁
      state.editor.config.pasteFilterStyle = true;
      // 如果复制的内容有图片又有文字，则只粘贴文字，不粘贴图片
      state.editor.config.pasteIgnoreImg = true;
      // 创建
      state.editor.create();
      clearEditor();
    };
    onMounted(() => {
      createMark();
    });
    return { state, saveHtml, clearEditor, createMark };
  }
};
</script>
<style lang="less" scoped>
.markdownWrap {
  width: 1200px;
  margin: 0 auto;
}
#markdown {
  height: 100%;
}
.btnBox {
  z-index: 100;
  position: fixed;
  right: 30px;
  bottom: 70px;
  display: flex;
  flex-direction: column;
  .save {
    display: inline-block;
    width: 120px;
    height: 40px;
    background: #26c3ea;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    border-radius: 8px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    &:active {
      background: #05cdff;
    }
  }
  .clear {
    display: inline-block;
    margin: 15px 0 0;
    width: 120px;
    height: 40px;
    background: #367680;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    border-radius: 8px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    &:active {
      background: #4fb5c5;
    }
  }
}
</style>
