import { useEffect, useState } from 'react';

const useTechnology = () => {
    const [technology, setTechnology] = useState([])
    useEffect(() => {
        fetch('technology.json')
            .then(res => res.json())
            .then(data => setTechnology(data))
    }, [])
    return [technology, setTechnology];
}

export default useTechnology;