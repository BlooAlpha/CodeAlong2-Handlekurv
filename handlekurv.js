const varer = [
    {
        navn: "Kaffe",
        pris: 89,
        antall: 1
    },
    {
        navn: "Druer",
        pris: 49,
        antall: 1
    },
    {
        navn: "Appelsin",
        pris: 18,
        antall: 15
    }
]


function renderView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
            Total pris: ${calculate()}
            `
}



function calculate() {
    //pris * antall +
    let total = 0
    for(let i = 0; i<varer.length; i++) {
        total += varer[i].pris * varer[i].antall
    }
    return total
}
renderView()