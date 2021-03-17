console.log("字面量单例，缺点：没有自己的私有方法和属性");
var literalSingleton = {
  attr: "aaa",
  say: function () {
    return this.attr;
  },
};
console.log(literalSingleton.say());

console.log("自执行函数单例， 这个解决了可以有自己的私有属性以及方法");
var singleton = (function () {
  //单例容器实例
  var _instance;

  //实例化对象
  function singleton(arg) {
    var arg = arg || {};

    this.show = function () {
      return "this is show";
    };
    this.hide = function () {
      return "this is hide";
    };
  }
  return {
    getInstance: function (arg) {
      if (_instance === undefined) {
        _instance = new singleton(arg);
      }
      return _instance;
    },
  };
})();
const aaa = singleton.getInstance();
console.log(singleton.getInstance());

/* 自己的心得：
 *
 *   使用单体模式是想 确保 目标对象的的 唯一性的 情况下再使用。而不需要实例化多次
 *
 * */

console.log("---以下是单例模式的变种 start----");

console.log("变种一：function 本身缓存指向实例 ");
function Universe() {
  if (Object.prototype.toString.call(Universe.instance) === "[object Object]") {
    return Universe.instance;
  }
  //缓存单例实例
  Universe.instance = this;

  this.attr = "attr";
  this.method = function () {
    return this.attr;
  };
}

var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);
console.log(uni === Universe.instance);
console.log(uni === Universe.__proto__.instance); // 值：undefined；比较 false
console.log(uni === Universe.prototype.instance); // 值：undefined；比较 false

console.log("变种二：function 重写构造函数 缓存指向实例  ");

function Universe2() {
  //缓存实例
  var singteton = this;

  this.attr = "attr";
  this.method = function () {
    return this.attr;
  };

  //重写构造函数
  Universe2 = function () {
    return singteton;
  };
}

var uni = new Universe2();
var uni2 = new Universe2();
var uni3 = new Universe2();

console.log(uni === uni2);
console.log(uni === uni3);

console.log("---以下是单例模式的变种 end----");
