let prixTTC;
let FDP;
const tva = 10;

const panierHT = {name: "tee_shirt", quantity: 5, poid: 0.5, priceHT: 8}

const calculPanier = (panier) => {
    if(panier.quantity < 0 || panier.poid < 0 || panier.priceHT < 0){
        return console.log("Les valeurs sont négative ou neutre");
    }
    calculTVA(panier)
    calculFDP(panier)
    calculTotal(panier)
}

const calculTVA = (panier) => {
    prixTTC = panier.priceHT * (1+ tva / 100)
    console.log(`Prix TTC: ${prixTTC}€`);
}

const panierTTC = {...panierHT, prixTTC}

const calculFDP = (panier) => {
    FDP = (panier.poid * panier.quantity) * 2
    console.log(`Frais de port: ${FDP}€`);
}

const panierAll = {...panierTTC, FDP}

const calculTotal = (panier) => {
    const total = (prixTTC * panier.quantity) + FDP
    console.log(`Prix total: ${total}€, avec ${FDP}€ de frais de port.`);
}

calculPanier(panierHT)
