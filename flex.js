function refreshViewport() {
  var dpr = window.devicePixelRatio,
    userAgent = window.navigator.userAgent.toLocaleLowerCase(),
    num = 1;
  if (/iphone/gi.test(userAgent)) {
    if (dpr >= 2) {
      num = 1 / dpr;
    }
  }
  var dom = document.getElementsByName('viewport')[0]
  if (dom) {
    dom.setAttribute('content', 'width=device-width, initial-scale=' + num + ', maximum-scale=' + num + ', minimum-scale=' + num + ', user-scalable=0')
  } else {
    dom = document.createElement('meta');
    dom.setAttribute('name', 'viewport')
    dom.setAttribute('content', 'width=device-width, initial-scale=' + num + ', maximum-scale=' + num + ', minimum-scale=' + num + ', user-scalable=0')
    document.getElementsByTagName('head')[0].appendChild(dom)
  }
}

// 设置html的font-size
function refreshRem() {
  var width = document.documentElement.getBoundingClientRect().width;
  var rem = 100 * (width / 425);
  document.documentElement.style.fontSize = rem + 'px';
}

window.addEventListener('resize', function () {
  refreshViewport();
  refreshRem()
})

refreshViewport();
refreshRem()