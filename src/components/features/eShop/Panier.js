import {useDispatch, useSelector} from 'react-redux'
import appSelector from '../../../store/appSelector'
import {resetPanier} from "../../../store/actions";

const Panier = () => {
    const dispatch = useDispatch()
    const {panier} = useSelector(appSelector)

    const reset = () => {
        dispatch(resetPanier())
    }

    return (
        <>
            <h1>Panier</h1>
            <div style={{border: 'dotted 1px red', padding: 40}}>
                    <button
                        aria-label="Ajouter au panier"
                        onClick={() => reset()}
                    >
                        Vider le panier
                    </button>
                    {
                        panier && (<div>
                            <p>Prix total: {panier.prixTotal}</p>
                            {
                                panier.produits.map((element, index) =>
                                    <li key={index}>Nom: {element.nom} PU: {element.prix}</li>)
                            }
                        </div>)
                    }
                </div>
        </>
    )
}

export default Panier
