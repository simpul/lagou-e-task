/*
  将下面异步代码使用 Promise 的方法改进
  尽量用看上去像同步代码的方式
  setTimeout(function () {
    var a = 'hello'
    setTimeout(function () {
      var b = 'lagou'
      setTimeout(function () {
        var c = 'I ♥ U'
        console.log(a + b +c)
      }, 10)
    }, 10)
  }, 10)
*/

let a, b, c;

new Promise((resolve) => {
  setTimeout(() => {
    a = 'hello';
    resolve();
  }, 1000);
}).then(() => {
  setTimeout(() => {
    b = 'lagou';
  }, 1000);
}).then(() => {
  setTimeout(() => {
    c = 'I ♥ U';
    console.log(a + b + c);
  }, 1000);
});
