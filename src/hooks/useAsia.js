import { useEffect, useState } from 'react';

const useAsia = () => {
    const [asia, setAsia] = useState([])
    useEffect(() => {
        fetch('asiaNews.json')
            .then(res => res.json())
            .then(data => setAsia(data))
    }, [])
    return [asia, setAsia];
}

export default useAsia;