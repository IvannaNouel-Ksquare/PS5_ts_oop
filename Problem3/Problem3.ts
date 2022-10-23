enum PizzaSize {
            
    Small,
    
    Medium,
    
    Large,
    
    XL
}
class Pizza{
    public pizzaSize: PizzaSize;
    public haveExtraCheese: boolean;
    public pepperoniCount: number;
    public hamCount: number;
    public pineappleCount: number;

  constructor(builder: { pizzaSize: PizzaSize; haveExtraCheese: boolean; pepperoniCount: number; hamCount: number; pineappleCount: number; }) {
    this.pizzaSize = this.getPizzaSize();
    this.haveExtraCheese = this.getHaveExtraCheese();
    this.pepperoniCount = 2;
    this.hamCount = 2;
    this.pineappleCount = 2;

    this.setPizzaSize(builder.pizzaSize);
    this.setHaveExtraCheese(builder.haveExtraCheese);
    this.setPepperoniCount(builder.pepperoniCount);
    this.setHamCount(builder.hamCount);
    this.setPineappleCount(builder.pineappleCount);
  }
  getCost() {
    let baseCost = this.getBaseCostBySize();
    let extraCheeseCost = this.getExtraCheeseValueBySize();
    let ingredientBaseCost = this.getIngredientsCostBySize();
    let ingredientCost = ingredientBaseCost * (this.getPepperoniCount() + this.getPineappleCount() + this.getPineappleCount());
    return baseCost + extraCheeseCost + ingredientCost;
  }

  public orderSummary() : string {
    return (
        this.getPizzaSize().toString(),
        this.getCost().toString(),
        this.getHaveExtraCheese().toString(),
        this.getPepperoniCount().toString(),
        this.getHamCount().toString(),
        this.getPineappleCount().toString());
}

  getIngredientsCostBySize() {
    let value = 0;
    switch (this.getPizzaSize()) {
      case PizzaSize.Small:
      case PizzaSize.Medium:
        value = 2;
        break;
      case PizzaSize.Large:
        value = 3;
        break;
      case PizzaSize.XL:
        value = 4;
        break;
    }
    return value;
  }
  getExtraCheeseValueBySize() {
    let value = 0;
    if (!this.getHaveExtraCheese()) {
      return value;
    }
    switch (this.getPizzaSize()) {
      case PizzaSize.Small:
        value = 2;
        break;
      case PizzaSize.Medium:
        value = 4;
        break;
      case PizzaSize.Large:
      case PizzaSize.XL:
        value = 6;
        break;
    }
    return value;
  }

  getBaseCostBySize() {
    let baseCost = 0;
    switch (this.getPizzaSize()) {
      case PizzaSize.Small:
        baseCost = 10;
        break;
      case PizzaSize.Medium:
        baseCost = 12;
        break;
      case PizzaSize.Large:
        baseCost = 14;
        break;
      case PizzaSize.XL:
        baseCost = 18;
        break;
    }
    return baseCost;
  }

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
  getPizzaSize() {
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
