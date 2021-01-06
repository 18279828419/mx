const blogsList = [
  {
    id: 0,
    title: "git常用操作",
    details:
      "在githubg官网创建一个新的仓库下载git工具安装第一次使用时, 需要在控制台输入git config --global user.name 'one'git config --global user.email '123456@qq.com'获取秘钥ssh-keygen -t rsa -C '123456@qq.com'然后连续回车3次查找秘钥在C:\\Users\\Administrator\\.ssh\\id_rsa.pub（将文件丢入vscode或者其他编码器中即可复制） 中获取秘钥，ctrl+A复制全部然后在github中的setting中的  “SSH and GPG keys”  中添加秘钥",
    type: "类型：git",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  },
  {
    id: 1,
    title: "vue广告栏上下滚动效果",
    details:
      "html部分<div class='roll'><img src='xxx.jpg' alt /><ul :class='{marquee_top:animate}'><li v-for='(item, index) in msg' :key='index'><span class='txtWrap'><span class='txt'>{{item.name}}抢得商品{{item.goods}}</span><span class='txt'>已有123人申请</span></span>",
    type: "类型：vue",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  },
  {
    id: 2,
    title: "获取范围内的随机整数",
    details:
      "var x = 1var y = 10var stochastic= parseInt(Math.random() * (y - x + 1) + x); //1-10之间的随机整数（包含x和y）",
    type: "类型：js",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  },
  {
    id: 3,
    title: "TS接口初步理解",
    details:
      "说明：接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约也就是定义 1：确定属性、2：可选属性、3：任意属性:4：只读属性",
    type: "类型：ts",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  },
  {
    id: 4,
    title: "屏蔽按键组合键",
    details:
      "function KeyDown(){ if ((window.event.altKey)&&((window.event.keyCode==37)||   //屏蔽 Alt+ 方向键 ←(window.",
    type: "类型：js",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  },
  {
    id: 5,
    title: "div的宽高详解",
    details:
      " window.innerWidth //除去菜单栏的窗口宽度* window.innerHeight//除去菜单栏的窗口高度* window.outerWidth",
    type: "类型：html",
    creatTime: "时间：2021/01/06",
    author: "作者：沐心"
  }
];
export default blogsList;
