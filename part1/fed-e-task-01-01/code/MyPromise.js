/*
尽可能还原 Promise 中的每一个 API, 并通过注释的方式描述思路和原理.
*/
class MyPromise {
  constructor(exec) {
    this.state = 'pending'; // promise的状态，有pending, fulfilled, rejected
    this.value = undefined; // promise成功状态返回的结果
    this.reason = undefined; // promise失败状态抛出的原因
    this.onResolvedCbs = []; // then方法中成功状态的回调函数队列
    this.onRejectedCbs = []; // then方法中失败状态的回调函数队列

    let resolve = value => {
      if (this.state === 'pending') {
        this.value = value;
        this.onResolvedCbs.forEach(fn => fn()); // 依次调用成功回调队列中的函数
        this.state = 'fulfilled';
      }
    };
    let reject = reason => {
      this.reason = reason;
      this.onRejectedCbs.forEach(fn => fn()); // 依次调用失败回调队列中的函数
      this.state = 'rejected';
    };

    try {
      exec(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 对传入的参数进行处理
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    let promise2 = new MyPromise((resolve, reject) => { // 原promise执行then方法后，返回一个新的promise
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value); // 回调函数的参数传的是原promise在状态决定后的value值
            resolvePromise(x, promise2, resolve, reject); // 根据执行回调函数返回的结果，判断返回的新的promis2的状态
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(x, promise2, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      // 在原promise的状态还没有决定的情况下，将onFulfilled和onRejected回调压入待执行函数数组中
      if (this.state === 'pending') {
        this.onResolvedCbs.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(x, promise2, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCbs.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(x, promise2, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    // 此方法用于判断原promise执行了then中的回调函数后的返回值x与新返回的proimse2的关系
    function resolvePromise(x, promise2, resolve, reject) {
      // 循环引用抛出错误
      if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise'));
      }
      let called; // 控制thenable的回调只能执行一个
      if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 如果是对象或者是函数
        try {
          let then = x.then;
          if (typeof then === 'function') { // 这个x是thenable, 执行它的then方法来获取状态，来决定promise2的状态
            then.call(x, y => {
              if (called) return;
              called = true;
              resolvePromise(y, promise2, resolve, reject);
            }, r => {
              if (called) return;
              called = true;
              reject(r);
            });
          } else { // 不是thenable， 直接resolve
            resolve(x);
          }
        } catch (error) {
          if (called) return;
          called = true;
          reject(error);
        }
      }
    }

    return promise2;
  }

  catch(fn) {
    return this.then(null, fn);
  }

  finally(fn) {
    return this.then(value => {
      return MyPromise.resolve(fn()).then(() => value);
    }, reason => {
      return MyPromise.resolve(fn()).then(() => { throw reason });
    })
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value !== null && (typeof value === 'function' || typeof value === 'object')) {
        try {
          let then = value.then;
          if (typeof then === 'function') {
            then(resolve, reject);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(value);
      }
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => promise.then(resolve, reject));
    });
  }

  static all(promises) {
    let arr = [];
    let count = 0;
    function processData(index, data, length, resolve) {
      arr[index] = data;
      count++;
      if (count === length) {
        resolve(arr);
      }
    }
    return new NPromise((resolve, reject) => {
      promises.forEach((promise, index, promises) => {
        promise.then(data => {
          processData(index, data, promises.length, resolve)
        }, reject);
      })
    })
  }
}