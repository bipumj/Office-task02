import { useEffect, useState } from 'react';

const useExclusive = () => {
    const [exclusive, setExclusive] = useState([])
    useEffect(() => {
        fetch('exclusive.json')
            .then(res => res.json())
            .then(data => setExclusive(data))
    }, [])
    return [exclusive, setExclusive];
}

export default useExclusive;