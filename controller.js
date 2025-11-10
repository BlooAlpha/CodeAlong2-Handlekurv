/* function getItems() {                                //Første utkast. Ligger her for moro skyld.
    let vareNavnTotal = []
    let vareNavn = ""
    for (let i = 0; i<varer.length; i++) {
        vareNavn = varer[i].navn
        vareNavnTotal.push(vareNavn)
    }
    return vareNavnTotal
} */

function emojiCheck() {
    if (emoji == false) {
        emoji = true
        console.log("Emoji enabled")
        renderView()
    }
    else {
        emoji = false
        console.log("Emoji disabled")
        renderView()
    }
}

function addItem(item) {
    if (handlekurv.length == 0) {
        handlekurv.push(varer[item])
        updateAmount()
        console.log("Add first item")
    }
    else {
        updateAmount()
        handlekurv.forEach(cartCheck, item)
    }
    /*  console.log(item) */
    renderView()
}

function cartCheck(name, index, array) {
    if (array[index].navn == varer[this].navn) {
        array[index].antall++
        nyAntall++
    }
    else if (index == array.length - 1 && nyAntall == startAntall) {
        console.log('Add new item')
        handlekurv.push(varer[this])
        updateAmount()
    }
    /*     console.log(name)
        console.log(index)
        console.log(array) */
}

function updateAmount() {
    startAntall = 0
    nyAntall = 0
    for (let i = 0; i < handlekurv.length; i++) {
        startAntall += handlekurv[i].antall
        nyAntall += handlekurv[i].antall
    }
}

function incItem(item) {                                  //Denne trengs egentlig ikke, kan bruke addItem(${i}) på onclick event for å få samme effekt.
    handlekurv[item].antall += 1                          //Men synes det føltes unødvendig å kjøre hele addItem bare for å øke antall. Kanskje?
    renderView()
    console.log("Plus 1 " + handlekurv[item].navn)
}
function subItem(item) {
    if (handlekurv[item].antall == 1) {
        removeItem(item)
    }
    else {
        handlekurv[item].antall -= 1
        console.log("Minus 1 " + handlekurv[item].navn)
    }
    renderView()
}
function removeItem(item) {
    handlekurv[item].antall = 1
    console.log(handlekurv[item].navn + " removed from cart")
    handlekurv.splice(item, 1)
    renderView()
}

function calculate() {
    //pris * antall +
    let total = 0
    for (let i = 0; i < handlekurv.length; i++) {
        total += handlekurv[i].pris * handlekurv[i].antall
    }
    return total
}

renderView()