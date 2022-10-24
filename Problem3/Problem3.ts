//Size of the pizza (small, medium, large, or extra-large)
enum PizzaSize {

  Small,

  Medium,

  Large,

  XL
}
class Pizza { 
  public pizzaSize: PizzaSize;
  public haveExtraCheese: boolean;
  public pepperoniCount: number;
  public hamCount: number;
  public pineappleCount: number;

  //Set all the values in the construct

  constructor(pizzaSize: PizzaSize, haveExtraCheese: boolean, pepperoniCount: number, hamCount: number, pineappleCount: number) {
    this.pizzaSize = this.getPizzaSize();
    this.haveExtraCheese = this.getHaveExtraCheese();
    this.pepperoniCount = pepperoniCount;
    this.hamCount = hamCount;
    this.pineappleCount = pineappleCount;
  }

  //get cost
  getCost() {
    let baseCost = [10,12,14,18];
    let extraCheeseCost = [2, 4, 6, 6]
    let ingredientBaseCost= [2, 2, 3, 4];

    let ingredientCost = ingredientBaseCost[this.pizzaSize] * (this.getPepperoniCount() + this.getPineappleCount() + this.getPineappleCount());
    return baseCost[this.pizzaSize]+ extraCheeseCost[this.pizzaSize] + ingredientCost;
  }

  public orderSummary() {
    return this.getPizzaSize, this.getCost().toString(), this.getHaveExtraCheese().toString(), this.getPepperoniCount().toString(), this.getHamCount().toString(), this.getPineappleCount().toString();

  }

  //Create getters and setters for each property

  getHamCount() {
    return this.hamCount;
  }
  getHaveExtraCheese() {
    return this.haveExtraCheese;
  }
  getPepperoniCount() {
    return this.pepperoniCount;
  }
  getPineappleCount() {
    return this.pineappleCount;
  }
  getPizzaSize(): PizzaSize{
    return this.pizzaSize;
  }
  
  setHamCount(hamCount: number) {
    this.hamCount = this.hamCount;
  }
  setHaveExtraCheese(haveExtraCheese: boolean) {
    this.haveExtraCheese = this.haveExtraCheese;
  }
  setPepperoniCount(pepperoniCount: number) {
    this.pepperoniCount = this.pepperoniCount;
  }
  setPineappleCount(pineappleCount: number) {
    this.pineappleCount = this.pineappleCount;
  }
  setPizzaSize(pizzaSize: PizzaSize) {
    this.pizzaSize = this.pizzaSize;
  }

}


const pizza1 = new Pizza(1,true, 2, 2, 2);


console.log("Pizza1 Summary: %s", pizza1);
console.log(pizza1.getCost());


