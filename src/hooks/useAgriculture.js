import { useEffect } from 'react';
import { useState } from 'react';

const useAgriculture = () => {
    const [agriculture, setAgriculture] = useState([])
    useEffect(() => {
        fetch('agriculture.json')
            .then(res => res.json())
            .then(data => setAgriculture(data))
    }, [])

    return [agriculture, setAgriculture]
};

export default useAgriculture;