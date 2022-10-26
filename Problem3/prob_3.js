//the sizes of the Pizza
var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
    PizzaSize[PizzaSize["XL"] = 3] = "XL";
})(PizzaSize || (PizzaSize = {}));
//class pizza created 
var Pizza = /** @class */ (function () {
    //constructor to create the pizza
    function Pizza(pizzaSize, haveExtraCheese, pepperoniCount, hamCount, pineappleCount) {
        this._haveExtraCheese = false;
        this._pepperoniCount = 0;
        this._hamCount = 0;
        this._pineappleCount = 0;
        this.pizzaSize = pizzaSize;
        this.haveExtraCheese = haveExtraCheese;
        this.pepperoniCount = pepperoniCount;
        this.hamCount = hamCount;
        this.pineappleCount = pineappleCount;
    }
    Object.defineProperty(Pizza.prototype, "haveExtraCheese", {
        //getters and setters
        get: function () {
            return this._haveExtraCheese;
        },
        set: function (haveExtraCheese) {
            this._haveExtraCheese = haveExtraCheese;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "pepperoniCount", {
        get: function () {
            return this._pepperoniCount;
        },
        set: function (pepperoniCount) {
            this._pepperoniCount = pepperoniCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "hamCount", {
        get: function () {
            return this._hamCount;
        },
        set: function (hamCount) {
            this._hamCount = hamCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "pizzaSize", {
        get: function () {
            return this._pizzaSize;
        },
        set: function (pizzaSize) {
            this._pizzaSize = pizzaSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "pineappleCount", {
        get: function () {
            return this._pineappleCount;
        },
        set: function (pineappleCount) {
            this._pineappleCount = pineappleCount;
        },
        enumerable: false,
        configurable: true
    });
    //switch case to get the cost of the ingridients by pizza size
    Pizza.prototype.getIngredientsCostBySize = function () {
        var value = 0;
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
    };
    //switch case to get the cost of the extra cheese by pizza size
    Pizza.prototype.getExtraCheeseValueBySize = function () {
        var value = 0;
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
    };
    //switch case to get the cost by pizza size
    Pizza.prototype.getBaseCostBySize = function () {
        var baseCost = 0;
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
    };
    //method to get the price
    Pizza.prototype.getCost = function () {
        var baseCost = this.getBaseCostBySize();
        var extraCheeseCost = this.getExtraCheeseValueBySize();
        var ingredientBaseCost = this.getIngredientsCostBySize();
        var ingredientCost = (ingredientBaseCost * (this.pepperoniCount + (this.pineappleCount + this.pineappleCount)));
        return (baseCost + (extraCheeseCost + ingredientCost));
    };
    return Pizza;
}());
//Generating pizzas to see if code works 
var pizza1 = new Pizza(2, false, 0, 6, 0);
var pizza2 = new Pizza(3, true, 2, 4, 2);
var pizza3 = new Pizza(1, false, 1, 1, 3);
console.log("----Pizza : 1----");
console.log("Pizza1 Summary: ", pizza1);
console.log("Pizza1 Price: ", pizza1.getCost());
console.log("----Pizza : 2----");
console.log("Pizza2 Summary: ", pizza2);
console.log("Pizza2 Price: ", pizza2.getCost());
console.log("----Pizza : 3----");
console.log("Pizza3 Summary: ", pizza3);
console.log("Pizza3 Price: ", pizza3.getCost());
