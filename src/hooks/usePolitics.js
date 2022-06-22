import { useEffect, useState } from 'react';

const usePolitics = () => {
    const [Politics, setPolitics] = useState([])
    useEffect(() => {
        fetch('politics.json')
            .then(res => res.json())
            .then(data => setPolitics(data))
    }, [])
    return [Politics, setPolitics]
};

export default usePolitics;