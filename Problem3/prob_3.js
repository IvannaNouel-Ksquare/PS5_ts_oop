"use strict";
//the sizes of the Pizza
var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
    PizzaSize[PizzaSize["XL"] = 3] = "XL";
})(PizzaSize || (PizzaSize = {}));
//class pizza created 
class Pizza {
    //constructor to create the pizza
    constructor(pizzaSize, haveExtraCheese, pepperoniCount, hamCount, pineappleCount) {
        this._haveExtraCheese = false;
        this._pepperoniCount = 0;
        this._hamCount = 0;
        this.pineappleCount = 0;
        this.pizzaSize = pizzaSize;
        this.haveExtraCheese = haveExtraCheese;
        this.pepperoniCount = pepperoniCount;
        this.hamCount = hamCount;
        this.pineappleCount = pineappleCount;
    }
    //getters and setters
    get haveExtraCheese() {
        return this._haveExtraCheese;
    }
    get pepperoniCount() {
        return this._pepperoniCount;
    }
    get hamCount() {
        return this._hamCount;
    }
    get pizzaSize() {
        return this._pizzaSize;
    }
    set haveExtraCheese(haveExtraCheese) {
        this._haveExtraCheese = haveExtraCheese;
    }
    set pepperoniCount(pepperoniCount) {
        this._pepperoniCount = pepperoniCount;
    }
    set hamCount(hamCount) {
        this._hamCount = hamCount;
    }
    set pizzaSize(pizzaSize) {
        this._pizzaSize = pizzaSize;
    }
    //switch case to get the cost of the ingridients by pizza size
    getIngredientsCostBySize() {
        let value = 0;
        switch (this.pizzaSize) {
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
    //switch case to get the cost of the extra cheese by pizza size
    getExtraCheeseValueBySize() {
        let value = 0;
        if (!this.haveExtraCheese) {
            return value;
        }
        switch (this.pizzaSize) {
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
    //switch case to get the cost by pizza size
    getBaseCostBySize() {
        let baseCost = 0;
        switch (this.pizzaSize) {
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
    //method to get the price
    getCost() {
        let baseCost = this.getBaseCostBySize();
        let extraCheeseCost = this.getExtraCheeseValueBySize();
        let ingredientBaseCost = this.getIngredientsCostBySize();
        let ingredientCost = (ingredientBaseCost * (this.pepperoniCount + (this.pineappleCount + this.pineappleCount)));
        return (baseCost + (extraCheeseCost + ingredientCost));
    }
}
//Generating pizzas to see if code works 
const pizza1 = new Pizza(2, false, 0, 6, 0);
const pizza2 = new Pizza(3, true, 2, 4, 2);
const pizza3 = new Pizza(1, false, 1, 1, 3);
console.log("----Pizza : 1----");
console.log("Pizza1 Summary: ", pizza1);
console.log("Pizza1 Price: ", pizza1.getCost());
console.log("----Pizza : 2----");
console.log("Pizza2 Summary: ", pizza2);
console.log("Pizza2 Price: ", pizza2.getCost());
console.log("----Pizza : 3----");
console.log("Pizza3 Summary: ", pizza3);
console.log("Pizza3 Price: ", pizza3.getCost());
