import {useDispatch} from 'react-redux'
import {addToPanier} from '../../../store/actions'

const Card = () => {
    const dispatch = useDispatch()

    const ajoutNouveau = () => {
        const produit = {
            nom: 'Produit 1',
            prix: 1200
        }
        dispatch(addToPanier(produit))
    }

    return <div>
        <h1>Carte produit</h1>
        <button
            aria-label="Ajouter au panier"
            onClick={() => ajoutNouveau()}
        >
            Ajouter au panier
        </button>
    </div>
}

export default Card
