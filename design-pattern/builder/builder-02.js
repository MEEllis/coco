//ps:(https://segmentfault.com/a/1190000005149553[以下内容的网址])

//  #建造者模式
/*
将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。主要解决在软件系统中，有时候面临着"一个复杂对象"的创建工作，
由于需求的变化，这个复杂对象的某些部分经常面临着剧烈的变化，一些基本部件不会变。所以需要将变与不变分离。
与抽象工厂的区别：在建造者模式里，有个指导者(Director)，由指导者来管理建造者，用户是与指导者联系的，
指导者联系建造者最后得到产品。即建造者模式可以强制实行一种分步骤进行的建造过程。

*/
//  #建造者模式四要素
/*
1.产品类Product：一般是一个较为复杂的对象，也就是说创建对象的过程比较复杂，一般会有比较多的代码量。
2.抽象建造者类Builder: 将建造的具体过程交与它的子类来实现，这样更容易扩展。
3.建造者类ConcreteBuilder: 组建产品；返回组建好的产品。
4.指导类Director: 负责调用适当的建造者来组建产品，指导类一般不与产品类发生依赖关系，与指导类直接交互的是建造者类
*/

//  #建造者模式优点
/*
1.建造者模式的封装性很好。使用建造者模式可以有效的封装变化，在使用建造者模式的场景中，一般产品类和建造者类是比较稳定的，
因此，将主要的业务逻辑封装在指导者类中对整体而言可以取得比较好的稳定性。
2.建造者模式很容易进行扩展。如果有新的需求，通过实现一个新的建造者类就可以完成。
*/

/*
举例
似乎很抽象。举个例子：
前面你创建了一个生产保时捷的工厂，生产一台保时捷911需要的主要部件都一样(引擎，轮子，方向盘...)和流程是不变的，
变的是引擎，轮子，控制系统等等部件具体实现，这些部件的生产交由具体的builder去生产。
*/

//代码
//#建造者模式
var DP = {
  Interface: function () {},
};
// 建造者模式四要素：  1 产品类 （具有哪些属性和行为）
function Car() {
  var _frame, _engine, _wheel;
  this.setFrame = function (val) {
    _frame = val;
  };
  this.setEngine = function (val) {
    _engine = val;
  };
  this.setWheel = function (val) {
    _wheel = val;
  };
  this.getFrame = function () {
    return _frame;
  };
  this.getEngine = function () {
    return _engine;
  };
  this.getWheel = function () {
    return _wheel;
  };
  this.check = function () {
    console.log(_frame + "检查完毕");
    console.log(_engine + "检查完毕");
    console.log(_wheel + "检查完毕");
  };
}

//建造者模式四要素：  2抽象建造者类Builder
function Builder() {
  DP.Interface(this, ["buildFrame", "buildEngine", "buildWheel", "buildCar"]);
}

// 建造者模式四要素：  3指导者,产品生产流程规范
function Director(Builder) {
  //传入具体制造者
  var _builder = Builder;
  this.build = function () {
    _builder.buildFrame();
    _builder.buildEngine();
    _builder.buildWheel();
    return _builder.buildCar();
  };
}

//建造者模式四要素：  4.建造者类ConcreteBuilder:
function Builder911() {
  this.__proto__ = new Builder();
  var _car = new Car();
  this.buildFrame = function () {
    console.log("制造911骨架");
    _car.setFrame("911骨架");
  };
  this.buildEngine = function () {
    console.log("制造911引擎");
    _car.setEngine("911引擎");
  };
  this.buildWheel = function () {
    console.log("制造911轮子");
    _car.setWheel("911轮子");
  };
  this.buildCar = function () {
    console.log("911汽车各部组装完毕");
    return _car;
  };
}

function BuilderCayma() {
  this.__proto__ = new Builder();
  var _car = new Car();
  this.buildFrame = function () {
    console.log("制造Cayma骨架");
    _car.setFrame("Cayma骨架");
  };
  this.buildEngine = function () {
    console.log("制造Cayma引擎");
    _car.setEngine("Cayma引擎");
  };
  this.buildWheel = function () {
    console.log("制造Cayma轮子");
    _car.setWheel("Cayma轮子");
  };
  this.buildCar = function () {
    console.log("Cayma汽车各部组装完毕");
    return _car;
  };
}

var builder911 = new Builder911();
var director911 = new Director(builder911);
var car911 = director911.build();
car911.check();

var builderCayma = new BuilderCayma();
var directorCayma = new Director(builderCayma);
var Cayma = directorCayma.build();
Cayma.check();


//  #适用场景
//需要生成的对象具有复杂的内部结构；需要生成的对象内部属性本身相互依赖。
