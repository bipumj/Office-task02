import { useEffect, useState } from 'react';

const useAnalysis = () => {
    const [analysis, setAnalysis] = useState([])
    useEffect(() => {
        fetch('analysis.json')
            .then(res => res.json())
            .then(data => setAnalysis(data))
    }, [])
    return [analysis, setAnalysis];
}

export default useAnalysis;