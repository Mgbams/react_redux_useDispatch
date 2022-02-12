import {useEffect} from 'react'

const ExempleUseEffectCycleLife = () => {
    useEffect(() => {
        console.log('>> ExempleUseEffectCycleLife - componentDidMount ')
        return () => {
            console.log('>> ExempleUseEffectCycleLife - destroy')
        }
    }, [])

    const consoleRender = () => {
        console.log('>> ExempleUseEffectCycleLife - render')
    }

    return (
        <div style={{display: 'block', marginBottom: 10}}>
            {consoleRender()}
            <p>Exemple useEffect - Cycle de vie du composant fonction</p>
        </div>
    )
}

export default ExempleUseEffectCycleLife
