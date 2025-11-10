function displayEmoji() {
    let html = ""
    if (emoji == false) {
        html = /*HTML*/ `
        <button class="navbtn1" id="img" onclick="emojiCheck()" style="height: 50px; width: 50px; font-size: x-large;">🖼️</button>
        `
        return html
    }
    else {
        html = /*HTML*/ `
        <button class="navbtn1" id="img" onclick="emojiCheck()" style="font-family: serif; height: 50px; width: 50px; font-size: xx-large;">T</button>
        `
        return html
    }
}

function darkMode() {       //More like... high contrast mode. Kan fikse farger en annen gang :P
    if (darkmode == false) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.getElementById("dm").innerHTML = '&#127774;'
        darkmode = true
        console.log("Dark mode enabled")
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("dm").innerHTML = '&#127770;'
        darkmode = false
        console.log("Dark mode disabled")
    }
}

function viewItems() {
    let html = ""
    /* vareNavnTotal = getItems() */
    if (emoji == false) {
        for (let i = 0; i < varer.length; i++) {
            html += /*HTML*/ `
            <div class="itemcontainer" style="grid-area: itm${i + 1};">
            <div class="item">${varer[i].navn}</div><button class="button" onclick="addItem(${i})">Add</button>
            <div class="price">${varer[i].pris},-</div>
            </div>`
            /* return vareNavnTotal.length */
        }
        return html
    }
    else {
        for (let i = 0; i < varer.length; i++) {
            html += /*HTML*/ `
            <div class="itemcontainer" style="grid-area: itm${i + 1};">
            <div class="item">${varer[i].img}</div><button class="button" onclick="addItem(${i})">Add</button>
            <div class="price">${varer[i].pris},-</div>
            </div>`
        }
        return html
    }
}

function viewCart() {
    let html = ""
    /* vareNavnTotal = getItems() */
    if (emoji == false) {
        for (let i = 0; i < handlekurv.length; i++) {
            html += /*HTML*/ `
            <div class="cartcontainer">
            <div class="item">${handlekurv[i].navn}</div><button onclick="incItem(${i})" class="button1">&#10133;</button>
            <div class="amount">${handlekurv[i].antall} stk.</div><button onclick="subItem(${i})" class="button2">&#10134;</button>
            <div class="price">${handlekurv[i].pris},-</div><button onclick="removeItem(${i})" class="button3">&#10060;</button>
            </div>`
            
            /* return vareNavnTotal.length */
        }
        return html
    }
    else {
        for (let i = 0; i < handlekurv.length; i++) {
            html += /*HTML*/ `
            <div class="cartcontainer">
            <div class="item">${handlekurv[i].img}</div><button onclick="incItem(${i})" class="button1">&#10133;</button>
            <div class="amount">${handlekurv[i].antall} stk.</div><button onclick="subItem(${i})" class="button2">&#10134;</button>
            <div class="price">${handlekurv[i].pris},-</div><button onclick="removeItem(${i})" class="button3">&#10060;</button>
            </div>`
            
            /* return vareNavnTotal.length */
        }
        return html
    }
}

function renderView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="header">
    <h1>Varer:</h1>
    ${displayEmoji()}
    <button class="navbtn2" id="dm" onclick="darkMode()" style="height: 50px; width: 50px; font-size: x-large;">&#127770;</button>
    </div>
    <div class="container">${viewItems()}</div><br><br>
    <h1>Handlekurv:</h1><div>${viewCart()}</div><br><br>
    <h3>Total pris: ${calculate()}</h3>
    `
}