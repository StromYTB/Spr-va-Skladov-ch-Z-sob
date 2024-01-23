const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];


for(let i = 0; i < produkty.length; i++){
    console.log(produkty[i]);
}

setTimeout(() => {
    document.getElementById("productsOne").innerText += " " + produkty[0].nazev + "," + "Cena za kus=" + produkty[0].cenaZaKus + "," +  "Počet=" + produkty[0].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsTwo").innerText += " " + produkty[1].nazev + "," + "Cena za kus=" + produkty[1].cenaZaKus + "," +  "Počet=" + produkty[1].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsThree").innerText += " " + produkty[2].nazev + "," + "Cena za kus=" + produkty[2].cenaZaKus + "," +  "Počet=" + produkty[2].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsFour").innerText += " " + produkty[3].nazev + "," + "Cena za kus=" + produkty[3].cenaZaKus + "," +  "Počet=" + produkty[3].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsFive").innerText += " " + produkty[4].nazev + "," + "Cena za kus=" + produkty[4].cenaZaKus + "," +  "Počet=" + produkty[4].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsSix").innerText += " " + produkty[5].nazev + "," + "Cena za kus=" + produkty[5].cenaZaKus + "," +  "Počet=" + produkty[5].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsSeven").innerText += " " + produkty[6].nazev + "," + "Cena za kus=" + produkty[6].cenaZaKus + "," +  "Počet=" + produkty[6].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsEight").innerText += " " + produkty[7].nazev + "," + "Cena za kus=" + produkty[7].cenaZaKus + "," +  "Počet=" + produkty[7].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsNine").innerText += " " + produkty[8].nazev + "," + "Cena za kus=" + produkty[8].cenaZaKus + "," +  "Počet=" + produkty[8].pocetNaSklade ;
}, "10");

setTimeout(() => {
    document.getElementById("productsTen").innerText += " " + produkty[9].nazev + "," + "Cena za kus=" + produkty[9].cenaZaKus + "," +  "Počet=" + produkty[9].pocetNaSklade ;
}, "10");

const productFind = parseInt(document.getElementById("productFind").value);

function findProduct(){
    produkty.find(productFind);

    document.getElementById("findResult").innerText = productFind
}