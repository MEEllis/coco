function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    // 自定义一个output输出内容
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    }
}

var tom = Car("大叔", 2009, 20000);
console.log(typeof tom); // "undefined"


//强制使用new

function Car(model, year, miles) {
    if (!(this instanceof Car)) {
        return new Car(model, year, miles);
    }
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.output = function () {
        return this.model + "走了" + this.miles + "公里";
    }
}


//JavaScript里有3中原始包装函数：number, string, boolean，有时候两种都用：

// 使用原始包装函数
var s = new String("my string");
var n = new Number(101);
var b = new Boolean(true);


// 推荐这种
var s = "my string";
var n = 101;
var b = true;

//推荐，只有在想保留数值状态的时候使用这些包装函数，关于区别可以参考下面的代码：


// 原始string
var greet = "Hello there";
// 使用split()方法分割
greet.split(' ')[0]; // "Hello"
// 给原始类型添加新属性不会报错
greet.smile = true;
// 单没法获取这个值（18章ECMAScript实现里我们讲了为什么）
console.log(typeof greet.smile); // "undefined"

// 原始string
var greet = new String("Hello there");
// 使用split()方法分割
greet.split(' ')[0]; // "Hello"
// 给包装函数类型添加新属性不会报错
greet.smile = true;
// 可以正常访问新属性
console.log(typeof greet.smile); // "boolean"