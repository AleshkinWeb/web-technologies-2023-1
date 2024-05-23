class PizzaAttribute{
    name;
    price;
    callories;
    image;
    type;

    constructor(name, price, callories, image, type) {
        this.name = name;
        this.callories = callories;
        this.price = price;
        this.image = image;
        this.type = type;
    }

}

class Pizza{
    pizzaType;
    size;
    toppings;
    cals;
    price;

    constructor() {
        this.toppings = [];
        this.size = sizes[0];
        this.pizzaType = pizzas[0];
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
        this.price = price;
    }
    calculateCalories() {
        let ccal = 0;
        for (let i=0; i < this.toppings.length; i++){
            if(this.toppings[i].name == "Сливочная моцарелла"){
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
        this.cals = ccal;
    }
}

const pizzas = [
    new PizzaAttribute("Маргарита", 500, 300, 'Image/Pizzas/Маргаретте.webp', 'type'),
    new PizzaAttribute("Пепперони", 800, 400, 'Image/Pizzas/Пепперони.webp', 'type'),
    new PizzaAttribute("Баварская", 700, 450, 'Image/Pizzas/Баварская.webp', 'type')
];

const toppings = [
    new PizzaAttribute("Сливочная моцарелла", 50, 100, 'Image/Toppings/Mozzarela.png', 'topping'),
    new PizzaAttribute("Сырный бортик", 150, 50, 'Image/Toppings/Cheese.png', 'topping'), 
    new PizzaAttribute("Чеддер и пармезан", 150, 50, 'Image/Toppings/Cheder.png', 'topping')
];

const sizes = [
    new PizzaAttribute("Маленькая", 100, 100, null, 'size'),
    new PizzaAttribute("Большая", 200, 200, null, 'size'),
];

const pizza = new Pizza();

function GeneratePizzas() {
    var pizzaCount = pizzas.length;
    var toppingsCount = toppings.length;
    var sizesCount = sizes.length

    var catalog = document.createElement("div");
    catalog.id = "PizzaList";
    catalog.className = "PizzaList";

    for (var i = 0; i < pizzaCount; i++) {
        var container = document.createElement("div");
        container.className = "Pizza";
        var button = document.createElement("button");
        button.className = "PizzaImage";
        button.style.backgroundImage = "url('" + pizzas[i].image + "')";
        button.id = pizzas[i].name;
        button.onclick = function () {
            PizzaChange(pizzas.find(pizza => pizza.name == this.id));
        }
        var label = document.createElement("p");
        label.textContent = pizzas[i].name;
        label.className = "PizzaName";
        label.onclick = function () {
            PizzaChange(pizzas.find(pizza => pizza.name == this.textContent));
        };
        
        container.appendChild(button);
        container.appendChild(label);
        catalog.appendChild(container)
        document.getElementById("body").appendChild(catalog);
    }

    var pizzaAttributeMenu = document.createElement("div");
    pizzaAttributeMenu.id = "PizzaAttributes";
    pizzaAttributeMenu.className = "PizzaAttributes";

    var sizeCatalog = document.createElement("div");
    sizeCatalog.id = "SizeCatalog";
    sizeCatalog.className = "SizeCatalog";
    var sizeList = document.createElement("div");
    sizeList.id = "SizeList";
    sizeList.className = "SizeList";
    var sizeLabel = document.createElement("p");
    sizeLabel.className = "SizeLabel"
    sizeLabel.textContent = "Выберите размер";

    document.getElementById("body").appendChild(pizzaAttributeMenu);
    pizzaAttributeMenu.appendChild(sizeCatalog);
    sizeCatalog.appendChild(sizeLabel);

    
    for (var i = 0; i < sizesCount; i++) {
        var sizebutton = document.createElement("button");
        sizebutton.className = "Size";
        sizebutton.textContent = sizes[i].name;
        sizebutton.onclick = function () {
            PizzaChange(sizes.find(size => size.name == this.textContent));
        }
        sizeList.appendChild(sizebutton);
        sizeCatalog.appendChild(sizeList);
    }

    var toppingCatalog = document.createElement("div");
    toppingCatalog.id = "toppingCatalog";
    toppingCatalog.className = "toppingCatalog";
    var toppingLabel = document.createElement("p");
    toppingLabel.className = "toppingLabel"
    toppingLabel.textContent = "Добавить по вкусу";

    pizzaAttributeMenu.appendChild(toppingLabel);
    pizzaAttributeMenu.appendChild(toppingCatalog)

    for (var i = 0; i < toppingsCount; i++) {
        var container = document.createElement("div");
        container.className = "Topping";
        var button = document.createElement("button");
        button.className = "ToppingImage";
        button.style.backgroundImage = "url('" + toppings[i].image + "')";
        button.id = toppings[i].name;
        button.onclick = function () {
            PizzaChange(toppings.find(topping => topping.name == this.id));
        };
        var label = document.createElement("p");
        label.textContent = toppings[i].name;
        label.onclick = function () {
            PizzaChange(toppings.find(topping => topping.name == this.textContent));
        };
        
        container.appendChild(button);
        container.appendChild(label);
        toppingCatalog.appendChild(container)
    }   

    var calculateButton = document.createElement("button");
        calculateButton.className = "Calculate";
        calculateButton.id = "Calculate";
        calculateButton.textContent = "Добавить в корзину за\n 0₽ (0 кКал)";
        calculateButton.onclick = function() {
            alert('Заказ сделан!');
        }
    
    pizzaAttributeMenu.appendChild(calculateButton);
  }

  function PizzaChange(attribute){
    if (attribute.type == 'type'){
            pizza.pizzaType = attribute;
        }
    else if (attribute.type == 'size'){
            pizza.size = attribute;
    }
    else if (attribute.type == 'topping'){
        pizza.addTopping(attribute);
    } 
    pizza.calculateCalories();
    pizza.calculatePrice();
    document.getElementById("Calculate").textContent = "Добавить в корзину за " + pizza.price + " ₽ (" + pizza.cals + " кКал)";;
  }
