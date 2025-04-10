// Symbole zum Kommentieren
function render() {
    renderFoods();
    renderDrinks();
    renderBasket();
    displayNoneFoodAndDrinks();
    displayNoneBasket();
    getburgerClick()
}

function renderFoods() {
    let foodContainer = document.getElementById('food-elements');
    for (let index = 0; index < foods.length; index++) {
        getFoodsContainer(foodContainer, index);
    }
}

function renderDrinks() {
    let drinkContainer = document.getElementById('drink-elements');
    for (let index = 0; index < drinks.length; index++) {
        getDrinksContainer(drinkContainer, index);
    }
}

function renderBasket() {
    let basketContainer = document.getElementById('basket-render');
    if (basketContainer == "") {
        getBasketContainer(basketContainer);
    }
    else {
        getBasketEmpty(basketContainer);
    }
}

function displayNoneFoodAndDrinks() {
    let foodsNone = document.getElementById('food-elements');
    let drinksButton = document.getElementById('button-drinks');
    foodsNone.classList.toggle('foods-none');
    drinksButton.classList.toggle('button-border-drinks-none');
}

function clickDrinks() {
    let drinksNone = document.getElementById('drink-elements');
    let foodsNone = document.getElementById('food-elements');
    let drinksButton = document.getElementById('button-drinks');
    let foodsButton = document.getElementById('button-foods');
    if (drinksNone.classList.contains('drinks-none') == true) {
        drinksNone.classList.toggle('drinks-none');
        foodsNone.classList.toggle('foods-none');
        drinksButton.classList.toggle('button-border-drinks-none');
        foodsButton.classList.toggle('button-border-foods-none');

    }
}

function clickFoods() {
    let drinksNone = document.getElementById('drink-elements');
    let foodsNone = document.getElementById('food-elements');
    let drinksButton = document.getElementById('button-drinks');
    let foodsButton = document.getElementById('button-foods');
    if (foodsNone.classList.contains('foods-none') == true) {
        drinksNone.classList.toggle('drinks-none');
        foodsNone.classList.toggle('foods-none');
        drinksButton.classList.toggle('button-border-drinks-none');
        foodsButton.classList.toggle('button-border-foods-none');
    }
}

function displayNoneBasket() {
    let basketPlaceholder = document.getElementById('basket-render');
    basketPlaceholder.classList.toggle('basket-element-none');

}

function addFood(index) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');
    basketNameSale.push(foods[index].name);
    basketPriceSale.push(foods[index].price);
    delivery(newBasketElements);
    newBasketElements.innerHTML = "";
    for (let iFoodAndDrinks = 0; iFoodAndDrinks < basketNameSale.length; iFoodAndDrinks++) {
        getBasketShowFoodsAndDrinks(iFoodAndDrinks, newBasketElements);
    }
    sumElement(deliveryElement);
}

function addDrinks(index) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');
    basketNameSale.push(drinks[index].name);
    basketPriceSale.push(drinks[index].price);
    delivery(newBasketElements);
    newBasketElements.innerHTML = "";
    for (let iFoodAndDrinks = 0; iFoodAndDrinks < basketNameSale.length; iFoodAndDrinks++) {
        getBasketShowFoodsAndDrinks(iFoodAndDrinks, newBasketElements);
    }
    sumElement(deliveryElement)
}

function delivery(newBasketElements) {
    let deliveryElement = document.getElementById('delivery-element');
    let deliveryCostsElement = document.getElementById('delivery-costs-element');
    if (newBasketElements.innerHTML == "") {
        displayNoneBasket();
        getDelivery(deliveryElement);
        getDeliveryCosts(deliveryCostsElement);
    }
}

function sumElement(deliveryCostsElement) {
    let sumbasketPriceSale = 0;
    for (let i = 0; i < basketPriceSale.length; i++) {
        sumbasketPriceSale += basketPriceSale[i];
    }
    let sumPriceElement = document.getElementById('sum-element')
    sumPriceElement.innerHTML = "";
    if (deliveryCostsElement.innerHTML == "") {
        sumPriceWithoutorWithoutDelivery(sumbasketPriceSale, sumPriceElement);
    }
    else {
        sumPriceWithoutorWithoutDelivery(sumbasketPriceSale + 4.99, sumPriceElement);
    }
};

function removeElement(iFoodAndDrinks) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');
    let deliveryCostsElement = document.getElementById('delivery-costs-element')
    let sumContainer = document.getElementById('sum-element')
    basketNameSale.splice(iFoodAndDrinks, 1);
    basketPriceSale.splice(iFoodAndDrinks, 1);
    newBasketElements.innerHTML = "";
    for (let icheck = 0; icheck < basketNameSale.length; icheck++) {
        getBasketShowFoodsAndDrinks(icheck, newBasketElements);
    }
    if (basketNameSale.length === 0) {
        displayNoneBasket();
        deliveryElement.innerHTML = "";
        deliveryCostsElement.innerHTML = "";
        sumContainer.innerHTML = "";
    }
    else {
        sumElement(deliveryCostsElement);
    }
};

function changeDeliveryBike() {
    let deliveryCostsElement = document.getElementById('delivery-costs-element');
    let buttonBike = document.getElementById('button-bike').classList;
    let buttonBox = document.getElementById('button-box').classList;
    if (deliveryCostsElement.innerHTML == "") {
        getDeliveryCosts(deliveryCostsElement);
        sumElement(deliveryCostsElement);
        buttonBox.replace("button-delivery-bike", "button-delivery-box");
        buttonBike.replace("button-delivery-box", "button-delivery-bike");
    }
};

function changeDeliveryDirekt() { 
    let deliveryCostsElement = document.getElementById('delivery-costs-element');
    let buttonBike = document.getElementById('button-bike').classList;
    let buttonBox = document.getElementById('button-box').classList;
    if (deliveryCostsElement.innerHTML !== "") {
        deliveryCostsElement.innerHTML = "";
        sumElement(deliveryCostsElement);
        buttonBike.replace("button-delivery-bike", "button-delivery-box");
        buttonBox.replace("button-delivery-box", "button-delivery-bike");
    }
}

function burgerClick() {
    let bodyoverflow = document.getElementById('body-overflow');
    let burgerBox = document.getElementById('login-container');
    getburgerClick(burgerBox);

}