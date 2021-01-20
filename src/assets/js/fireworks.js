/* 鼠标特效 */
var a_idx = 0;
// eslint-disable-next-line no-undef
$(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array(
      "❤阿门阿前❤",
      "❤一棵葡萄树❤",
      "❤阿嫩阿嫩❤",
      "❤绿地刚发芽❤",
      "❤蜗牛背着那重重的壳呀❤",
      "❤一步一步地往上爬❤",
      "❤阿树阿上❤",
      "❤两只黄鹂鸟❤",
      "❤阿嘻阿嘻❤",
      "❤哈哈在笑它❤",
      "❤葡萄成熟还早得很哪❤",
      "❤现在上来干什么❤"
    );
    var $i = $("<span></span>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 999999999999999,
      top: y - 20,
      left: x,
      position: "absolute",
      fontWeight: "bold",
      userSelect: "none",
      color:
        "rgb(" +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        "," +
        ~~(255 * Math.random()) +
        ")"
    });
    $("body").append($i);
    $i.animate(
      {
        top: y - 180,
        opacity: 0
      },
      1500,
      function() {
        $i.remove();
      }
    );
  });
});
