function calculate() {
    //pris * antall +
    let total = 0
    for(let i = 0; i<varer.length; i++) {
        total += varer[i].pris * varer[i].antall
    }
    return total
}
renderView()