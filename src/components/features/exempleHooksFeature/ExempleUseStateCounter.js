import {useState} from 'react'

const ExempleUseStateCounter = () => {
    const [counter, setCounter] = useState(0)

    const incrementer = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div style={{display: 'block', marginBottom: 10}}>
            <button onClick={incrementer}>Incrementer</button>
            <button onClick={reset}>Réinitialiser</button>
            <span className="console">{counter}</span>
        </div>
    )
}

export default ExempleUseStateCounter
