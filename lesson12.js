class Topping{
    name;

    constructor(name) {
        this.name = name;
    }
}

class PizzaAttribute{
    name;
    price;
    callories;

    constructor(name, price, callories) {
        this.name = name;
        this.callories = callories;
        this.price = price;
    }

}
class Pizza{
    pizzaType;
    size;
    toppings;

    constructor(pizzaType, size) {
        this.pizzaType = pizzaType
        this.size = size;
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        for (let i=0; i<this.toppings.length; i++){
            if (this.toppings[i] === topping){
                this.toppings.splice(i, i+1);
            }
        }
    }
    getToppings() {
        let top = "Добавки:\n";
        for (let i=0; i<this.toppings.length; i++){
            top += this.toppings[i].name + "\n";
        }
        top = top.trim() + ";";
        console.log(top);
    }
    getSize() {
        console.log("Размер пиццы: " + this.size.name)
    }
    getStuffing() {
        console.log("Вид пиццы: " + this.pizzaType.name);
    }
    calculatePrice() {
        let price = 0;
        for (let i=0; i < this.toppings.length; i++){
            if(this.toppings[i].name === "Сливочная моцарелла"){
                if(this.size.name === "Большая"){
                    price += 100;
                } else if (this.size.name === "Маленькая"){
                    price += 50;
                }
            }
            else if(this.toppings[i].name === "Сырный бортик"){
                if(this.size.name === "Большая"){
                    price += 300;
                } else if (this.size.name === "Маленькая"){
                    price += 150;
                }
            }
            else if(this.toppings[i].name === "Чеддер и пармезан"){
                if(this.size.name === "Большая"){
                    price += 300;
                } else if (this.size.name === "Маленькая"){
                    price += 150;
                }
            }
        }
        price += this.pizzaType.price;
        price += this.size.price;
        console.log("Цена собранной пиццы: " + price);
    }
    calculateCalories() {
        let ccal = 0;
        for (let i=0; i < this.toppings.length; i++){
            if(this.toppings[i].name === "Сливочная моцарелла"){
                if(this.size.name === "Большая"){
                    ccal += 40;
                } else if (this.size.name === "Маленькая"){
                    ccal += 20;
                }
            }
            else if(this.toppings[i].name === "Сырный бортик"){
                if(this.size.name === "Большая"){
                    ccal += 50;
                } else if (this.size.name === "Маленькая"){
                    ccal += 50;
                }
            }
            else if(this.toppings[i].name === "Чеддер и пармезан"){
                if(this.size.name === "Большая"){
                    ccal += 50;
                } else if (this.size.name === "Маленькая"){
                    ccal += 50;
                }
            }
        }
        ccal += this.pizzaType.callories;
        ccal += this.size.callories;
        console.log("ККал в собранной пицце: " + ccal);
    }
}
let margarita = new PizzaAttribute("Маргарита", 500, 330);
let pepperoni = new PizzaAttribute("Маргарита", 800, 400);
let bavarian = new PizzaAttribute("Маргарита", 700, 450);

let big = new PizzaAttribute("Большая", 200, 200);
let small = new PizzaAttribute("Маленькая", 100, 100);

let mozarella = new Topping("Сливочная моцарелла");
let cheese = new Topping("Сырный бортик");
let cheddar_et_parmesan = new Topping("Чеддер и пармезан");

console.log("\n");
let pizza = new Pizza(margarita, big);
pizza.addTopping(mozarella);
pizza.addTopping(cheese);
pizza.addTopping(cheddar_et_parmesan);
pizza.removeTopping(cheddar_et_parmesan);

pizza.getToppings();
pizza.getStuffing();
pizza.getSize();

pizza.calculatePrice();
pizza.calculateCalories();
