function render() {
    renderFoods();
    renderSupplements();
    renderDrinks();
    renderBasket();
    displayNoneFoodDrinksAndSupplement();
    getBurgerClick();
    displayNoneBasket();
};

function renderFoods() {
    let foodContainer = document.getElementById('food-elements');
    for (let index = 0; index < foods.length; index++) {
        getFoodsContainer(foodContainer, index);
    };
};

function renderSupplements() {
    let supplementsContainer = document.getElementById('supplements-elements');
    for (let index = 0; index < supplements.length; index++) {
        getSupplementsContainer(supplementsContainer, index);
    };
};

function renderDrinks() {
    let drinkContainer = document.getElementById('drink-elements');
    for (let index = 0; index < drinks.length; index++) {
        getDrinksContainer(drinkContainer, index);
    };
};

function renderSmallBasket() {
    let basketContainer = document.getElementById('small-basket-check');
    if (basketContainer == "") {
        getSmallBasketContainer(basketContainer);
    }
    else {
        getBasketEmpty(basketContainer);
    };
};

function renderBasket() {
    let basketContainer = document.getElementById('basket-render');
    if (basketContainer == "") {
        getBasketContainer(basketContainer);
    }
    else {
        getBasketEmpty(basketContainer);
    };
};

function displayNoneFoodDrinksAndSupplement() {
    let foodsNone = document.getElementById('food-elements');
    let supplementsButton = document.getElementById('button-supplements');
    let drinksButton = document.getElementById('button-drinks');
    foodsNone.classList.toggle('foods-none');
    supplementsButton.classList.toggle('button-border-supplements-none');
    drinksButton.classList.toggle('button-border-drinks-none');
};

function addClassNone() {
    let drinksNone = document.getElementById('drink-elements');
    let foodsNone = document.getElementById('food-elements');
    let supplementsNone = document.getElementById('supplements-elements');
    drinksNone.classList.add('drinks-none');
    foodsNone.classList.add('foods-none');
    supplementsNone.classList.add('supplements-none');
}

function removeClassNone() {
    let drinksButton = document.getElementById('button-drinks');
    let foodsButton = document.getElementById('button-foods');
    let supplementsButton = document.getElementById('button-supplements');

    drinksButton.classList.remove('button-border-drinks-none');
    foodsButton.classList.remove('button-border-foods-none');
    supplementsButton.classList.remove('button-border-supplements-none');
}

function changeTabButton() {
    addClassNone();
    removeClassNone()
};

function clickDrinks() {
    changeTabButton();
    let drinksNone = document.getElementById('drink-elements');
    let drinksButton = document.getElementById('button-drinks');
    drinksNone.classList.remove('drinks-none');
    drinksButton.classList.add('button-border-drinks-none');
};

function clickFoods() {
    changeTabButton();
    let foodsNone = document.getElementById('food-elements');
    let foodsButton = document.getElementById('button-foods');
    foodsNone.classList.remove('foods-none');
    foodsButton.classList.add('button-border-foods-none');
};

function clickSupplements() {
    changeTabButton();
    let supplementsNone = document.getElementById('supplements-elements');
    let supplementsButton = document.getElementById('button-supplements');
    supplementsNone.classList.remove('supplements-none');
    supplementsButton.classList.add('button-border-supplements-none');
};

function displayNoneBasket() {
    let basketPlaceholder = document.getElementById('basket-render');
    basketPlaceholder.classList.toggle('basket-element-none');
};

function addFood(index) {
    addItemToBasket(foods[index].name, foods[index].price);
};

function addDrinks(index) {
    addItemToBasket(drinks[index].name, drinks[index].price);
};

function addSupplements(index) {
    addItemToBasket(supplements[index].name, supplements[index].price);
};
function addItemToBasket(name, price) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');

    let existingItem = null;
    for (let i = 0; i < basketArray.length; i++) {
        if (basketArray[i].name === name) {
            existingItem = basketArray[i];
            break;
        }
    };

    if (existingItem) {
        existingItem.quantity++;
    } else {
        basketArray.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    delivery(newBasketElements);
    renderBasketItems(newBasketElements);
    sumElement(deliveryElement);
};

function renderBasketItems(newBasketElements) {
    newBasketElements.innerHTML = "";
    for (let i = 0; i < basketArray.length; i++) {
        getBasketShowFoodsAndDrinks(i, newBasketElements);
    }
};


function delivery(newBasketElements) {
    let deliveryElement = document.getElementById('delivery-element');
    let deliveryCostsElement = document.getElementById('delivery-costs-element');
    if (newBasketElements.innerHTML == "") {
        displayNoneBasket();
        getDelivery(deliveryElement);
        getDeliveryCosts(deliveryCostsElement);
    };
};

function sumElement(deliveryCostsElement) {
    let sumbasketPriceSale = 0;
    for (let i = 0; i < basketArray.length; i++) {
        sumbasketPriceSale += basketArray[i].price * basketArray[i].quantity;
    }

    let sumPriceElement = document.getElementById('sum-element');
    sumPriceElement.innerHTML = "";
    if (deliveryCostsElement.innerHTML == "") {
        sumPriceWithoutorWithoutDelivery(sumbasketPriceSale, sumPriceElement);
    } else {
        sumPriceWithoutorWithoutDelivery(sumbasketPriceSale + 4.99, sumPriceElement);
    }
};

function removeElement(index) {
    let newBasketElements = document.getElementById('add-element');
    let deliveryElement = document.getElementById('delivery-element');
    let deliveryCostsElement = document.getElementById('delivery-costs-element');
    let sumContainer = document.getElementById('sum-element');

    if (basketArray.length > 0 && basketArray[index].quantity > 1) {
        basketArray[index].quantity--;
    } else {
        basketArray.splice(index, 1);
    }

    renderBasketItems(newBasketElements);

    if (basketArray.length === 0) {
        deleteDeliverySale(deliveryElement, deliveryCostsElement, sumContainer);
    } else {
        sumElement(deliveryCostsElement);
    }
};

function deleteDeliveryElements(basketNameSale, basketPriceSale, newBasketElements, iFoodAndDrinks) {
    basketNameSale.splice(iFoodAndDrinks, 1);
    basketPriceSale.splice(iFoodAndDrinks, 1);
    newBasketElements.innerHTML = "";
};

function deleteDeliverySale(deliveryElement, deliveryCostsElement, sumContainer) {
    displayNoneBasket();
    deliveryElement.innerHTML = "";
    deliveryCostsElement.innerHTML = "";
    sumContainer.innerHTML = "";
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
};

function burgerClick() {
    let burgerMenuBox = document.getElementById('login-overlay-click');
    let inputToggle = document.getElementById('burger-click');
    overlayBodyToggle()

    if (burgerMenuBox.classList.contains('login-box-d-none')) {
        burgerMenuBox.classList.remove('login-box-d-none');
        scrollToTop()
    } else {
        burgerMenuBox.classList.add('login-box-d-none');
        inputToggle.checked = !inputToggle.checked;
    }

};

function stopProp(event) {
    event.stopPropagation();
};

function closedClick(burgerMenuBox) {
    overlayBodyToggle()
    burgerMenuBox.toggle('login-box-d-none');
};

function loginClick() {
    let userName = document.getElementById('input-user').value;
    let userPassword = document.getElementById('input-password').value;
    if (userName == "" || userPassword == "") {
        alert('Bitte füllen sie beide Eingabefelder aus!');
        return;
    }
    else {
        alert('Sie sind jetzt nicht angemeldet! Dies ist nur eine Demo!');
        burgerClick();
    };
};

function newBasketElements() {
    let newBasketElements = document.getElementById('add-element');
    newBasketElements.innerHTML = "";

}

function containerDnone() {
    let containerDnone = document.getElementById('login-overlay-click');
    containerDnone.classList.toggle('login-box-d-none');
}

function overlayBodyToggle() {
    let overlayBody = document.getElementById('body-overlay');
    overlayBody.classList.toggle('body-overlay');
}

function loginContainerdelete() {
    let loginContainer = document.getElementById('login-container');
    loginContainer.innerHTML = "";
}

function sendTestShopping() {
    let inputToggle = document.getElementById('burger-click');
    basketArray = [];
    newBasketElements()
    loginContainerdelete()
    containerDnone()
    removeElement();
    getTestShopping();
    overlayBodyToggle()
    scrollToTop()
    inputToggle.checked = !inputToggle.checked;
};

function basketSmallActive() {
    let basketSmall = document.getElementById('basket-activ');
    basketSmall.classList.toggle('basket-wrapper-none');
    let toggleBody = document.getElementById('body-overlay');
    toggleBody.classList.toggle('body-overlay');
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}