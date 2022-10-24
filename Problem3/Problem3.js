//Size of the pizza (small, medium, large, or extra-large)
var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
    PizzaSize[PizzaSize["XL"] = 3] = "XL";
})(PizzaSize || (PizzaSize = {}));
var Pizza = /** @class */ (function () {
    //Set all the values in the construct
    function Pizza(pizzaSize, haveExtraCheese, pepperoniCount, hamCount, pineappleCount) {
        this.pizzaSize = this.getPizzaSize();
        this.haveExtraCheese = this.getHaveExtraCheese();
        this.pepperoniCount = pepperoniCount;
        this.hamCount = hamCount;
        this.pineappleCount = pineappleCount;
    }
    //get cost
    Pizza.prototype.getCost = function () {
        var baseCost = [10, 12, 14, 18];
        var extraCheeseCost = [2, 4, 6, 6];
        var ingredientBaseCost = [2, 2, 3, 4];
        var ingredientCost = ingredientBaseCost[this.pizzaSize] * (this.getPepperoniCount() + this.getPineappleCount() + this.getPineappleCount());
        return baseCost[this.pizzaSize] + extraCheeseCost[this.pizzaSize] + ingredientCost;
    };
    Pizza.prototype.orderSummary = function () {
        return this.getPizzaSize, this.getCost().toString(), this.getHaveExtraCheese().toString(), this.getPepperoniCount().toString(), this.getHamCount().toString(), this.getPineappleCount().toString();
    };
    //Create getters and setters for each property
    Pizza.prototype.getHamCount = function () {
        return this.hamCount;
    };
    Pizza.prototype.getHaveExtraCheese = function () {
        return this.haveExtraCheese;
    };
    Pizza.prototype.getPepperoniCount = function () {
        return this.pepperoniCount;
    };
    Pizza.prototype.getPineappleCount = function () {
        return this.pineappleCount;
    };
    Pizza.prototype.getPizzaSize = function () {
        return this.pizzaSize;
    };
    Pizza.prototype.setHamCount = function (hamCount) {
        this.hamCount = this.hamCount;
    };
    Pizza.prototype.setHaveExtraCheese = function (haveExtraCheese) {
        this.haveExtraCheese = this.haveExtraCheese;
    };
    Pizza.prototype.setPepperoniCount = function (pepperoniCount) {
        this.pepperoniCount = this.pepperoniCount;
    };
    Pizza.prototype.setPineappleCount = function (pineappleCount) {
        this.pineappleCount = this.pineappleCount;
    };
    Pizza.prototype.setPizzaSize = function (pizzaSize) {
        this.pizzaSize = this.pizzaSize;
    };
    return Pizza;
}());
var pizza1 = new Pizza(1, true, 2, 2, 2);
console.log("Pizza1 Summary: %s", pizza1);
console.log(pizza1.getCost());
