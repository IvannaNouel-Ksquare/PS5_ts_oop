//the sizes of the Pizza
enum PizzaSize {
    Small,
    Medium,
    Large,
    XL
}
//class pizza created 
class Pizza {

    //private 
    private _pizzaSize!: PizzaSize;
    private _haveExtraCheese: boolean = false;
    private _pepperoniCount: number = 0;
    private _hamCount: number = 0;
    private pineappleCount: number = 0;

    //getters and setters
    public get haveExtraCheese(): boolean {
        return this._haveExtraCheese;
    }

    public get pepperoniCount(): number {
        return this._pepperoniCount;
    }
    public get hamCount(): number {
        return this._hamCount;
    }
    public get pizzaSize(): PizzaSize {
        return this._pizzaSize;
    }
    public set haveExtraCheese(haveExtraCheese: boolean) {
        this._haveExtraCheese = haveExtraCheese;
    }
    
    public set pepperoniCount(pepperoniCount: number) {
        this._pepperoniCount = pepperoniCount;
    }
    
    public set hamCount(hamCount: number) {
        this._hamCount = hamCount;
    }

    public set pizzaSize(pizzaSize: PizzaSize) {
        this._pizzaSize = pizzaSize;
    }

    //constructor to create the pizza
    constructor(pizzaSize: PizzaSize, haveExtraCheese: boolean, pepperoniCount: number, hamCount: number, pineappleCount: number) {
        this.pizzaSize = pizzaSize;
        this.haveExtraCheese = haveExtraCheese;
        this.pepperoniCount = pepperoniCount;
        this.hamCount = hamCount;
        this.pineappleCount = pineappleCount;
    }

    //switch case to get the cost of the ingridients by pizza size
    private getIngredientsCostBySize(): number {
        let value: number = 0;
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

    private getExtraCheeseValueBySize(): number {
        let value: number = 0;
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
    private getBaseCostBySize(): number {
        let baseCost: number = 0;
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
    public getCost(): number {
        let baseCost: number = this.getBaseCostBySize();
        let extraCheeseCost: number = this.getExtraCheeseValueBySize();
        let ingredientBaseCost: number = this.getIngredientsCostBySize();
        let ingredientCost: number = (ingredientBaseCost * (this.pepperoniCount + (this.pineappleCount + this.pineappleCount)));
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

