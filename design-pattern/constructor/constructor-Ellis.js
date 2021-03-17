/* 自己的心得：
 *   使用构造函数模式是想 目标对象实例化多次
 * */

console.log(`
构造函数,
`);
function Car(attr) {
  //如果不适用new 关键字 this指向的是全局对象，
  if (this instanceof Car) {
    return new Car(attr);
  }
  this.attr = attr;
  //：每次创建对象的时候都重新定义say,如果有大批量的实例的话,很吃内存
  this.say = function () {
    return this.attr;
  };
  this.see = aaa;
}
//节约内存
function aaa() {
  return this.attr;
}
//节约内存
Car.prototype.work = function () {
  return this.attr;
};

var car1 = new Car("car1");
var car2 = new Car("car2");
console.log(car1.say());
console.log(car2.say());
console.log(car2.say === car1.say); //false
console.log(car2.see === car1.see); //true
console.log(car2.work === car1.work); //true

var tom = Car("大叔");
console.log(typeof tom); // "undefined"
console.log(see()); // "大叔"
