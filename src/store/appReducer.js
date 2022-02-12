import produce from 'immer'
import {ADD_PRODUIT, RESET_PANIER} from "./actionTypes";

export const initialState = {
    panier: {
        produits: [],
        prixTotal: 0
    },
}

const appReducer = produce((state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUIT: {
            const produits = state.panier.produits
            produits.push(action.payload)
            state.panier.prixTotal = produits.reduce((acc, it) => {
                acc = acc + it.prix
                return acc
            }, 0)
            state.panier.produits = produits
        }
        break
        case RESET_PANIER: {
            state.panier = initialState.panier
        }
        break
        default:
            return state
    }
})

export default appReducer
