import { useState, useEffect } from 'react';

const useWorldNews = () => {
    const [WorldNews, setWorldNews] = useState([])
    useEffect(() => {
        fetch('WorldNews.json')
            .then(res => res.json())
            .then(data => setWorldNews(data))
    }, [])
    return [WorldNews, setWorldNews];
};

export default useWorldNews;