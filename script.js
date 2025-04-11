function render() {
    renderFoods();
    renderSupplements();
    renderDrinks();
    renderBasket();
    displayNoneFoodDrinksAndSupplement();

    displayNoneBasket();
}

function renderFoods() {
    let foodContainer = document.getElementById('food-elements');
    for (let index = 0; index < foods.length; index++) {
        getFoodsContainer(foodContainer, index);
    }
}

function renderSupplements() {
    let supplementsContainer = document.getElementById('supplements-elements');
    for (let index = 0; index < supplements.length; index++) {
        getSupplementsContainer(supplementsContainer, index);
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

function displayNoneFoodDrinksAndSupplement() {
    let foodsNone = document.getElementById('food-elements');
    let supplementsButton = document.getElementById('button-supplements');
    let drinksButton = document.getElementById('button-drinks');
    foodsNone.classList.toggle('foods-none');
    supplementsButton.classList.toggle('button-border-supplements-none');
    drinksButton.classList.toggle('button-border-drinks-none');
}

function changeTabButton() {
    let drinksNone = document.getElementById('drink-elements');
    let foodsNone = document.getElementById('food-elements');
    let supplementsNone = document.getElementById('supplements-elements');
    let drinksButton = document.getElementById('button-drinks');
    let foodsButton = document.getElementById('button-foods');
    let supplementsButton = document.getElementById('button-supplements');

    drinksNone.classList.add('drinks-none');
    foodsNone.classList.add('foods-none');
    supplementsNone.classList.add('supplements-none');

    drinksButton.classList.remove('button-border-drinks-none');
    foodsButton.classList.remove('button-border-foods-none');
    supplementsButton.classList.remove('button-border-supplements-none');
}

function clickDrinks() {
    changeTabButton()
    let drinksNone = document.getElementById('drink-elements');
    let drinksButton = document.getElementById('button-drinks');
    drinksNone.classList.remove('drinks-none');
    drinksButton.classList.add('button-border-drinks-none');
}

function clickFoods() {
    changeTabButton()
    let foodsNone = document.getElementById('food-elements');
    let foodsButton = document.getElementById('button-foods');
    foodsNone.classList.remove('foods-none');
    foodsButton.classList.add('button-border-foods-none');
}

function clickSupplements() {
    changeTabButton()
    let supplementsNone = document.getElementById('supplements-elements');
    let supplementsButton = document.getElementById('button-supplements');
    supplementsNone.classList.remove('supplements-none');
    supplementsButton.classList.add('button-border-supplements-none');
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
    for (let iFoodDrinksSupplements = 0; iFoodDrinksSupplements < basketNameSale.length; iFoodDrinksSupplements++) {
        getBasketShowFoodsAndDrinks(iFoodDrinksSupplements, newBasketElements);
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
    for (let iFoodDrinksSupplements = 0; iFoodDrinksSupplements < basketNameSale.length; iFoodDrinksSupplements++) {
        getBasketShowFoodsAndDrinks(iFoodDrinksSupplements, newBasketElements);
    }
    sumElement(deliveryElement)
}

function addSupplements(index) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');
    basketNameSale.push(supplements[index].name);
    basketPriceSale.push(supplements[index].price);
    delivery(newBasketElements);
    newBasketElements.innerHTML = "";
    for (let iFoodDrinksSupplements = 0; iFoodDrinksSupplements < basketNameSale.length; iFoodDrinksSupplements++) {
        getBasketShowFoodsAndDrinks(iFoodDrinksSupplements, newBasketElements);
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
    deleteDeliveryElements(basketNameSale, basketPriceSale, newBasketElements, iFoodAndDrinks);
    for (let icheck = 0; icheck < basketNameSale.length; icheck++) {
        getBasketShowFoodsAndDrinks(icheck, newBasketElements);
    }
    if (basketNameSale.length === 0) {
        deleteDeliverySale(deliveryElement, deliveryCostsElement, sumContainer);
    }
    else {
        sumElement(deliveryCostsElement);
    }
};

function deleteDeliveryElements(basketNameSale, basketPriceSale, newBasketElements, iFoodAndDrinks) {
    basketNameSale.splice(iFoodAndDrinks, 1);
    basketPriceSale.splice(iFoodAndDrinks, 1);
    newBasketElements.innerHTML = "";
}

function deleteDeliverySale(deliveryElement, deliveryCostsElement, sumContainer) {
    displayNoneBasket();
    deliveryElement.innerHTML = "";
    deliveryCostsElement.innerHTML = "";
    sumContainer.innerHTML = "";
}

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
    let burgerMenuBox = document.getElementById('login-overlay-click').classList;
    let overlayBody = document.getElementById('body-overlay').classList;
    burgerMenuBox.toggle('login-box-d-none');
    overlayBody.toggle('body-overlay');
    let burgerMenuDelete = document.getElementById('login-container');
    burgerMenuDelete.innerHTML = "";
    getburgerClick();
}

function closedClick(burgerMenuBox, overlayBody) {
    overlayBody.toggle('body-overlay');
    burgerMenuBox.toggle('login-box-d-none');
}

function loginClick() {
    let userName = document.getElementById('input-user').value;
    let userPassword = document.getElementById('input-password').value;
    if (userName == "" || userPassword == "") {
        alert('Bitte füllen sie beide Eingabefelder aus!');
        return;
    }
    else {
        alert('Sie sind jetzt nicht angemeldet! Dies ist nur eine Demo!')
    }
}

function sendTestShopping() {
    let deliveryElement = document.getElementById('delivery-element');
    let deliveryCostsElement = document.getElementById('delivery-costs-element')
    let sumContainer = document.getElementById('sum-element')
    let newBasketElements = document.getElementById('add-element');
    let containerDnone = document.getElementById('login-container')
    deleteDeliverySale(deliveryElement, deliveryCostsElement, sumContainer)
    basketNameSale = [];
    basketPriceSale = [];
    newBasketElements.innerHTML = "";
    containerDnone.innerHTML = "";
    containerDnone.classList.toggle('login-box-d-none');
    getTestShopping();
}