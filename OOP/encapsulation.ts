// 외부에서 접근 할 수 있는 부분을 지정할 수 있다.

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public  --> 기본값
  // private --> 외부로부터 은닉
  // protected --> 상속받은 클래스는 외부에서도 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // 외부에서 보이지 않음
    private coffeeBeansGram: number = 0; // instance (object) level

    constructor(coffeeBeansGram: number) {
      this.coffeeBeansGram = coffeeBeansGram;
    }

    static makerMachine(coffeeBeansGram: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGram);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("beans는 하나 이상이어야 합니다.");
      }
      this.coffeeBeansGram += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 충분하지 않습니다.");
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);

  maker.fillCoffeeBeans(32);
}
