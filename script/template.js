function burgerClick() {
    let closed = document.getElementById('')
    let burgerBox = document.getElementById('login-container');
    if(burgerBox.innerHTML == "") {
        burgerBox.innerHTML = `
        <div class="login-box">
                     <h2>Bitte melden Sie sich an!</h2>
                    <div class="user-container">
                        <label for="uname"><b>Benutzername</b></label>
                        <input type="text" placeholder="Benutzername eintragen" name="uname" required>
                        <label for="psw"><b>Passwort</b></label>
                        <input type="password" placeholder="Passwort eintragen" name="psw" required>
                        <div>
                            <button type="submit">Closed</button>
                            <button type="submit">Login</button>
                        </div>
                    </div>
            </div>`
    }
    else {
        burgerBox.innerHtml = "";
    }
};

function getFoodsContainer(foodContainer, index) {
    foodContainer.innerHTML += `
    <div class="food-section" onclick="addFood(${index})">
        <div>
            <h3>${foods[index].name}</h3>
            <p><i>${foods[index].ingredients}</i></p>
            <p>${foods[index].price.toFixed(2).replace(".",",")}€</p>
        </div>
        <div>
            <button>+</button>
        </div> 
    </div>
    <div class="placeholder"></div>`
};

function getDrinksContainer(drinkContainer, index) {
    drinkContainer.innerHTML += `
    <div class="drink-section" onclick="addDrinks(${index})">
        <div>
            <h3>${drinks[index].name}</h3>
            <p><i>${drinks[index].size}</i></p>
            <p>${drinks[index].price.toFixed(2).replace(".",",")}€</p>
        </div>
        <div>
            <button>+</button>
        </div> 
    </div>
    <div class="placeholder"></div>`
};

function getBasketEmpty(basketContainer) {
    basketContainer.innerHTML += `     
    <img src="./assers/images/basket.svg">
    <h2>Fülle deinen Warenkorb</h2>
    <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>`
};

function getBasketShowFoodsAndDrinks(iFoodAndDrinks, newBasketElements) {
    newBasketElements.innerHTML += `
    <div class="new-basket-elements">
        <div><h3>${iFoodAndDrinks + 1}</h3></div>
        <div><h3><i>${basketNameSale[iFoodAndDrinks]}</i></h3></div>
        <div><h3>${basketPriceSale[iFoodAndDrinks].toFixed(2).replace(".",",")} €</h3></div>
        <button class="basket-minus">-</button>
    </div>`
}

function getDelivery(deliveryElement) {
    deliveryElement.innerHTML += `
    <button type="button" class="button-delivery-bike"><img src="./assers/images/fahrrad.svg">Lieferung</button>
    <button type="button" class="button-delivery-box"><img src="./assers/images/verpackung.svg">Abholung</button>`
};

function getDeliveryCosts(deliveryCostsElement) {
    deliveryCostsElement.innerHTML += `
    <div class="placeholder">
    <div class="delivery-costs-box">    
        <div><h3>+ <i>Lieferkosten</i></h3></div>
        <div><h3>4,99 €</h3></div>
    </div>`    
};