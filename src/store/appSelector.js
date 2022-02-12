import { createSelector, createStructuredSelector } from 'reselect'
import { initialState } from './appReducer'

export const selectApp = (state) => state.appReducer || initialState

export const panier = createSelector(selectApp, (substate) => substate.panier)

export default createStructuredSelector({
    panier
})
