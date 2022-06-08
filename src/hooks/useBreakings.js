import { useEffect, useState } from 'react';

const useBreakings = () => {
    const [breakings, setBreakings] = useState([])
    useEffect(() => {
        fetch('breakings.json')
            .then(res => res.json())
            .then(data => setBreakings(data))
    }, [])
    return [breakings, setBreakings];
};

export default useBreakings;