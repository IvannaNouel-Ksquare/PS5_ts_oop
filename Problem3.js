var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
    PizzaSize[PizzaSize["XL"] = 3] = "XL";
})(PizzaSize || (PizzaSize = {}));
var Pizza = /** @class */ (function () {
    function Pizza(builder) {
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
    Pizza.prototype.getCost = function () {
        var baseCost = this.getBaseCostBySize();
        var extraCheeseCost = this.getExtraCheeseValueBySize();
        var ingredientBaseCost = this.getIngredientsCostBySize();
        var ingredientCost = ingredientBaseCost * (this.getPepperoniCount() + this.getPineappleCount() + this.getPineappleCount());
        return baseCost + extraCheeseCost + ingredientCost;
    };
    Pizza.prototype.getIngredientsCostBySize = function () {
        var value = 0;
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
    };
    Pizza.prototype.getExtraCheeseValueBySize = function () {
        var value = 0;
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
    };
    Pizza.prototype.getBaseCostBySize = function () {
        var baseCost = 0;
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
    };
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
