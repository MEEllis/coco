/**
 * 建造者模式四要素
 *
 * 产品Product ； 
 * 建造者类ConcreteBuilder
 * 指导类Director ：
 * 抽象建造者类Builder ：
 *
 *乍一看，觉得这不就是工厂模式；
工厂方法模式注重的是整体对象的创建方法，而建造者模式注重的是部件构建的过程，旨在通过一步一步地精确构造创建出一个复杂的对象。
工厂模式关心整体，建造者模式关心细节。
 * 
 * 
 * 建造者模式的表象既是回调，$('<div class= "foo"> bar </div>')，我们只需要传入要生成的HTML字符，而不需要关心具体的HTML对象是如何生产的。
 * 建造者模式主要是分步骤建构一个复杂的对象，在这其中 分步骤 是一个稳定的算法，而复杂对象各个部分则经常变化
 *
 * 建造者模式(Builder pattern)，将一个复杂对象的构建层与其表示层相互分离，
 * 使得同样的构建过程可以采用不同的表示。也就是说如果我们用了建造者模式，
 * 那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。
 */

// Product
function House(args) {
  this.HouseFrame = (args && args.HouseFrame) || "未知";
  this.LivingRoom = (args && args.LivingRoom) || "未知";
  this.Kitchen = (args && args.Kitchen) || "未知";
  console.log("房子创建完成");
}

//ConcreteBuilder
function WorkBuilder() {
  this.getResult = function () {
    //建成房子
    var house = new House();
    //house.HouseFrame ...
    return house;
  };
}

WorkBuilder.prototype.piling = function () {
  console.log("房子进行打桩");
};

WorkBuilder.prototype.bricklaying = function () {
  console.log("房子进行砌砖");
};

WorkBuilder.prototype.paintWall = function () {
  console.log("房子进行刷墙");
};

function Director() {
  this.construct = function (ConcreteBuilder) {
    ConcreteBuilder.piling();
    ConcreteBuilder.bricklaying();
    ConcreteBuilder.paintWall();
  };
}

const worBuilder = new WorkBuilder();
const director = new Director();
director.construct(worBuilder);
worBuilder.getResult();
