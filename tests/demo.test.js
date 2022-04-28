import {calculTVA, calculFDP, calculPanier } from "../base.js";

const panier = {quantity: 5, poid: 0.5, priceHT: 8}
const panierNeg = {quantity: -5, poid: -0.5, priceHT: -8}
const panierQuantiteNeg = {quantity: -5, poid: 0.5, priceHT: 8}
const panierPoidNeg = {quantity: 5, poid: -0.5, priceHT: 8}

test('Envoyer un panier avec un prix hors taxe positif', () => {
    expect(calculTVA(panier)).toBe(8.8)
});
test("Envoyer un panier avec un prix hors taxe negatif", () => {
    expect(() => calculTVA(panierNeg)).toThrow();
});



test("Envoyer un panier avec un poid et une quantité positive", () => {
    expect(calculFDP(panier)).toBe(5)
});
test("Envoyer un panier avec un poid positif et une quantité négatif", () => {
    expect(() => calculFDP(panierQuantiteNeg)).toThrow()
});
test("Envoyer un panier avec un poid negatif et une quantité positive", () => {
    expect(() => calculFDP(panierPoidNeg)).toThrow()
});
test("Envoyer un panier avec un poid et une quantité negatif", () => {
    expect(() => calculFDP(panierNeg)).toThrow()
});



test("Envoyer un panier avec un prix TTC", () => {
    expect(calculPanier(panier)).toBe(89)
});
test("Envoyer un panier avec des valeurs négative", () => {
    expect(() => calculPanier(panierNeg)).toThrow()
})