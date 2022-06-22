import { useState } from 'react';
import { useEffect } from 'react';

const useEconomics = () => {
    const [economics, setEconomics] = useState([])
    useEffect(() => {
        fetch('economics.json')
            .then(res => res.json())
            .then(data => setEconomics(data))
    }, [])
    return [economics, setEconomics]
};

export default useEconomics;