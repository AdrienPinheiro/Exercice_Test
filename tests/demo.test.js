import {calculTVA, calculFDP, calculPanier } from "../base.js";
import should from "should";

const panier = {quantity: 5, poid: 0.5, priceHT: 8}
const panierNeg = {quantity: -5, poid: -0.5, priceHT: -8}
const panierQuantiteNeg = {quantity: -5, poid: 0.5, priceHT: 8}
const panierPoidNeg = {quantity: 5, poid: -0.5, priceHT: 8}


describe("Regarde si le calcul de la tva est fonctionnel", () => {
    it("Envoyer un panier avec un prix hors taxe positif", () => {
        should(calculTVA(panier)).be.equal(8.8)
    });
    it("Envoyer un panier avec un prix hors taxe negatif", () => {
        should(calculTVA(panierNeg))
    });
});


describe("Regarde si le calcul des frais de port est fonctionnel", () => {
    it("Envoyer un panier avec un poid et une quantité positive", () => {
        should(calculFDP(panier)).be.equal(5)
    });
    it("Envoyer un panier avec un poid positif et une quantité négatif", () => {
        should(calculFDP(panierQuantiteNeg))
    });
    it("Envoyer un panier avec un poid negatif et une quantité positive", () => {
        should(calculFDP(panierPoidNeg))
    });
    it("Envoyer un panier avec un poid et une quantité negatif", () => {
        should(calculFDP(panierNeg))
    });
});

describe("Regarde si le calcul total de la commande est fonctionnel", () => {
    it("Envoyer un panier avec un prix TTC", () => {
        should(calculPanier(panier)).be.equal(10)
    });
});