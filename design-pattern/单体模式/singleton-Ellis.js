var singleton = (function () {
    var _instance;

    function singleton(arg) {
        var arg = arg || {};
        this.show = function () {
            return "this is show";
        }
        this.hide = function () {
            return "this is hide";
        }

    }

    return {
        getInstance: function (arg) {
            return _instance || new singleton(arg);
        }
    }


})();
//这个是一个自执行表达式，无法实例化
/*
:ex
var a=new singleton();
var b=new singleton();
console.log(a===b); //报错 singleton is not a constructor
*/




console.log(singleton.getInstance().hide());


/* 自己的心得：
*
*   使用单体模式是想 确保 目标对象的的 唯一性的 情况下再使用。而不需要实例化多次
*
* */
