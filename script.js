// Symbole zum Kommentieren
function render() {
    renderFoods();
    renderDrinks();
    let foodsNone = document.getElementById('food-elements')
    foodsNone.classList.toggle('foods-none');
    let drinksButton = document.getElementById('button-drinks');
    drinksButton.classList.toggle('button-border-drinks-none'); 
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