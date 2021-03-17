/**策略模式
 * 定义：策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 * 
 */
/**
 * 很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。例如，绩效为 S 的人年
    终奖有 4 倍工资，绩效为 A 的人年终奖有 3 倍工资，而绩效为 B 的人年终奖是 2 倍工资。假设财
    务部要求我们提供一段代码，来方便他们计算员工的年终奖。
 * 
 */

(() => {
  function calcBonus(performance, salary) {
    var bonusAmount;
    if (performance === "S") {
      bonusAmount = salary * 4;
    } else if (performance === "A") {
      bonusAmount = salary * 3;
    } else if (performance === "B") {
      bonusAmount = salary * 2;
    } else {
      bonusAmount = 0;
    }
    return bonusAmount;
  }

  console.log(calcBonus("S", 4000));
  console.log(calcBonus("A", 3500));
  console.log(calcBonus("B", 3000));
})();

(() => {
  var stratepies = {
    S: (salary) => {
      return salary * 4;
    },
    A: (salary) => {
      return salary * 3;
    },
    B: (salary) => {
      return salary * 2;
    },
  };

  function calcBonus(performance, salary) {
    return stratepies[performance](salary);
  }
})();
