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
}

function getFoodsContainer(foodContainer, index) {
    foodContainer.innerHTML += `
    <div class="food-section">
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
}
function getDrinksContainer(drinkContainer, index) {
    drinkContainer.innerHTML += `
    <div class="drink-section">
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
}