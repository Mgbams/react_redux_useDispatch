import {useEffect, useState} from 'react'
import axios from "axios";

const ExempleAxiosGet = () => {
    const [query, setQuery] = useState('john');
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?q=${query}`)
            .then((res) => res.data.items)
            .then((users) => setResults(users))
            .catch((err) => {
                console.error(err.response.data)
            });

    }, []);

    return (
        <div style={{display: 'block', marginBottom: 10}}>
            <h2>Exemple useEffect - Récuperer des données via REST à l'aide d'axios</h2>
            <div className="console" style={{textAlign: 'left'}}>
                {
                    results.map((result, index) =>
                        <li key={index}>{result.login}</li>)
                }
            </div>
        </div>
    )
}

export default ExempleAxiosGet
