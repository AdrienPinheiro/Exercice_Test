let prixTTC;
let FDP;
let total;
const tva = 10;

export const calculPanier = (panier) => {
    if(panier.quantity <= 0 || panier.poid <= 0 || panier.priceHT <= 0){
        throw new Error("Les valeurs sont négative ou neutre");
    } else{
        calculTVA(panier)
        calculFDP(panier)
        calculTotal(panier)
        return total
    }
    
}

export const calculTVA = (panier) => {
    if(panier.quantity <= 0 || panier.poid <= 0 || panier.priceHT <= 0){
        throw new Error("Les valeurs sont négative ou neutre");
    } else {
    prixTTC = panier.priceHT * (1+ tva / 100)
    //console.log(`Prix TTC: ${prixTTC}€`);
    return prixTTC
    }
}


export const calculFDP = (panier) => {
    if(panier.quantity <= 0 || panier.poid <= 0 || panier.priceHT <= 0){
        throw new Error("Les valeurs sont négative ou neutre");
    } else {
    FDP = (panier.poid * panier.quantity) * 2
    // console.log(`Frais de port: ${FDP}€`);
    return FDP
    }
}

export const calculTotal = (panier) => {
    if(panier.quantity <= 0 || panier.poid <= 0 || panier.priceHT <= 0){
        throw new Error("Les valeurs sont négative ou neutre");
    } else {
    total = (prixTTC * panier.quantity) + FDP
    // console.log(`Prix total: ${total}€, avec ${FDP}€ de frais de port.`);
    return total
    }
}