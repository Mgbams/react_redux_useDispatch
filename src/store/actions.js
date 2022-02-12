import {ADD_PRODUIT, RESET_PANIER} from "./actionTypes";

export const addToPanier = (produit) => ({
    type: ADD_PRODUIT,
    payload: produit
})

export const resetPanier = () => ({
    type: RESET_PANIER
})
