// 滚动平滑
const goTo = target => {
  var scrollT =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (scrollT > target) {
    var timer = setInterval(function() {
      var scrollT =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var step = Math.floor(-scrollT / 10);
      document.documentElement.scrollTop = document.body.scrollTop =
        step + scrollT;
      if (scrollT <= target) {
        document.body.scrollTop = document.documentElement.scrollTop = target;
        clearTimeout(timer);
      }
    }, 10);
  } else if (scrollT == 0) {
    timer = setInterval(function() {
      var scrollT =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var step = Math.floor(60);
      document.documentElement.scrollTop = document.body.scrollTop =
        step + scrollT;
      if (scrollT >= target) {
        document.body.scrollTop = document.documentElement.scrollTop = target;
        clearTimeout(timer);
      }
    }, 10);
  } else if (scrollT < target) {
    timer = setInterval(function() {
      var scrollT =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var step = Math.floor(scrollT / 10);
      document.documentElement.scrollTop = document.body.scrollTop =
        step + scrollT;
      if (target >= scrollT) {
        document.body.scrollTop = document.documentElement.scrollTop = target;
        clearTimeout(timer);
      }
    }, 10);
  } else if (target == scrollT) {
    return false;
  }
};
export default goTo;
