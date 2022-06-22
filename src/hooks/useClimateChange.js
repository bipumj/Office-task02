import { useEffect, useState } from 'react';

const useClimateChange = () => {
    const [ClimateChange, setClimateChange] = useState([])
    useEffect(() => {
        fetch('climateChange.json')
            .then(res => res.json())
            .then(data => setClimateChange(data))
    }, [])
    return [ClimateChange, setClimateChange];
}

export default useClimateChange;