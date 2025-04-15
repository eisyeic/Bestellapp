function getBurgerClick() {
    let burgerMenuBox = document.getElementById('login-container');
    burgerMenuBox.innerHTML += `
        <div class="login-box">
                <h2>Bitte melden Sie sich an!</h2>
                <div class="user-container">
                    <label for="uname"><b>Benutzername</b></label>
                    <input id="input-user" type="text" placeholder="Benutzername eintragen" name="uname" required>
                    <label for="psw"><b>Passwort</b></label>
                    <input id="input-password" type="password" placeholder="Passwort eintragen" name="psw" required>
                    <div>
                        <button onclick="burgerClick()">Fenster schließen</button>
                        <button onclick="loginClick()" type="submit">Login</button>
                    </div>
                </div>
        </div>`
};

function getFoodsContainer(foodContainer, index) {
    foodContainer.innerHTML += `
    <div class="food-section">
        <div>
            <h3>${foods[index].name}</h3>
            <p><i>${foods[index].ingredients}</i></p>
            <p>${foods[index].price.toFixed(2).replace(".", ",")}€</p>
        </div>
        <div>
            <button onclick="addFood(${index})">+</button>
        </div> 
    </div>
    <div class="placeholder"></div>`
};

function getSupplementsContainer(supplementsContainer, index) {
    supplementsContainer.innerHTML += `
    <div class="supplements-section">
        <div>
            <h3>${supplements[index].name}</h3>
            <p><i>${supplements[index].ingredients}</i></p>
            <p>${supplements[index].price.toFixed(2).replace(".", ",")}€</p>
        </div>
        <div>
            <button onclick="addSupplements(${index})">+</button>
        </div> 
    </div>
    <div class="placeholder"></div>`
};

function getDrinksContainer(drinkContainer, index) {
    drinkContainer.innerHTML += `
    <div class="drink-section">
        <div>
            <h3>${drinks[index].name}</h3>
            <p><i>${drinks[index].size}</i></p>
            <p>${drinks[index].price.toFixed(2).replace(".", ",")}€</p>
        </div>
        <div>
            <button onclick="addDrinks(${index})">+</button>
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

function getBasketShowFoodsAndDrinks(index, newBasketElements) {
    newBasketElements.innerHTML += `
    <div class="new-basket-elements">
        <div class="h3-basket-name"><h3><i>${basketArray[index].name}</i></h3></div>
        <div><h3>${basketArray[index].quantity} x ${basketArray[index].price.toFixed(2).replace(".", ",")} €</h3></div>
        <button class="basket-minus" onclick="removeElement(${index})">-</button>
    </div>`
}

function getDelivery(deliveryElement) {
    deliveryElement.innerHTML += `
    <button id="button-bike" onclick="changeDeliveryBike()" type="button" class="button-delivery-bike"><img src="./assers/images/fahrrad.svg">Lieferung</button>
    <button id="button-box" onclick="changeDeliveryDirekt()" type="button" class="button-delivery-box"><img src="./assers/images/verpackung.svg">Abholung</button>`
};

function getDeliveryCosts(deliveryCostsElement) {
    deliveryCostsElement.innerHTML += `
    <div class="placeholder"></div>
    <div class="delivery-costs-box">    
        <div><h3>+ <i>Lieferkosten</i></h3></div>
        <div><h3>4,99 €</h3></div>
    </div>`
};

function sumPriceWithoutorWithoutDelivery(sumbasketPriceSale, sumPriceElement) {
    let minusPercent = sumbasketPriceSale * 0.19;
    sumPriceElement.innerHTML += `
    <div class="placeholder"></div>
    <div class="sum-box">
        <div>
            <p>inkl. Mwst. : ${minusPercent.toFixed(2).replace(".", ",")} €</p>
            <h3 class="sum">${sumbasketPriceSale.toFixed(2).replace(".", ",")} €</h3>
        <div class="placeholder placeholder-sum"></div>
        <div class="placeholder"></div>
        <div class="button-sum"><a alt="zur Kasse" onclick="sendTestShopping()" target="_blank;">zur Kasse</a></div>
    </div>`
};

function getTestShopping() {
    let testShopping = document.getElementById('login-container');
    testShopping.innerHTML += `
        <div class="login-box finished-shopping">
            <div>
                <h2>Vielen Dank für Ihre Bestellung!</h2>
                <p>Dies war eine Testbestellung<br>und hat keinen Einkauf ausgelöst!</p>
                <button onclick="burgerClick()">Fenster schließen</button>  
            </div>
        </div>`
};

function getSmallBasket(basketSmallBox) {
    basketSmallBox.innerHTML = "";
    basketSmallBox.innerHTML += `
    <div class="small-basket-container">
        <img src="./assers/images/basket.svg">
        <h2>Fülle deinen Warenkorb</h2>
        <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>`
};

function getSmallBasketRender(addSmallBasket) {
    addSmallBasket.innerHTML += `
    <div id="delete-basket" class="basket">
                <h2>Warenkorb</h2>
                <div id="delivery-element" class="delivery-container"></div>
                <div id="basket-render" class="basket-element-none basket-element"></div>
                <div id="add-element" class="add-container"></div>
                <div id="delivery-costs-element" class="delivery-costs-container"></div>
                <div id="sum-element" class="sum-container"></div>
            </div>`
};