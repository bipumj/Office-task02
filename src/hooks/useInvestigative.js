import { useEffect, useState } from 'react';

const useInvestigative = () => {
    const [Investigative, setInvestigative] = useState([])
    useEffect(() => {
        fetch('investigative.json')
            .then(res => res.json())
            .then(data => setInvestigative(data))
    }, [])
    return [Investigative, setInvestigative];
}

export default useInvestigative;