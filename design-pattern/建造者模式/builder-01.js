//ps:(http://www.2cto.com/kf/201412/360781.html[以下内容的网址])
/*3. 建造者模式实际，就是一个指挥者，一个建造者，一个使用指挥者调用具体建造者工作、并得从具体建造者得出结果的客户；*/

/*4. 建造者模式，模拟场景：[看到一个说明建造者模式描述的例子很好]

 说一户家人要建房子，但房子主人或家里其他人是不懂得如何去建房子的，所以他得去请几个工人，这个建房子的队伍还得有个工头，
 来按房主人的想法来建一套房子，工头按房主人的要求设计要求工人如何如何做；

 工头说，第一步先把房整体骨架搭起来，第二步睡房建造好，第三步把厨房装饰好，第四步把客厅建造装饰完毕，第五步...

 工头是不做事的，但具体建造者必须按照工头的要求来做，第一步，第二步的这样步骤来建造，直至整个房子完成；

 创建者必须要有创建这个房屋的所有技能，即建骨架，装饰睡房等...，即建造者所做的事，或所具有的能力，必须大于或等于指挥者要求要做的事，或具有的能力；

 即指挥者是个组织者，而建造者提供技能;*/

//5. JavaScript 这种弱语言里，没有接口这样的东西，就忽略接口定义这一层，直接创建具体建造者，再建一个 指导类来回调这个建造者；
//
//实例源码

//1. 工人建造者X:


function workerBuilder() {
    this.workOne = function() {
        //建房子骨架
    }
    this.workTwo=function() {
        //建睡房
    }
    this.workThree=function() {
        //建厨房
    }
    this.workFour=function() {
        //建客厅
    }
    //....

    this.getResult = function() {
        //建成房子
        var house = new House();
        //house.HouseFrame ...
        return house;
    }
}

//workBuilder 是具体建造者类，workOne, Two是要做的事情，建骨架等;
//
//当然 workBuilder 可以多建几个，用于表示 工人 对于每个工作执行的方法不一样；但工作内容是一样的;

//2. 指挥者类


function Director() {
    this.construct = function(builder) {
        builder.workOne();
        builder.workTwo();
        builder.workThree();
        builder.workFour();
        //...
        //上面的内容，顺序可设置，并且工作项也可以设定
    }
}

//指挥者类下的 指导 方法，有对 建造者 的回调引用，内容包括建者工作内容几项或全部; 指挥者对建造者工人要做的事情进行组织跟安排；

//3. 产品房子

function House() {
    this.HouseFrame = '';
    this.Room = '';
    this.Kitchen = '';
    this.LivingRoom = '';
    //...
}

//4. 使用方法

var builder = new workBuilder();
var director = new Director();
director.construct(builder);

var house = builder.getResult();
//第四步，整个使用相当于客户：房主人，房主人请 Director 工头来建房子，但是工头是不做事的，
//所以他指挥 builder 工个来建子，最后房主人从工人那里取得建好的房子；
