import { useEffect } from "react"
import { useState } from "react"

const usePopularNews = () => {
    const [PopularNews, setPopularNews] = useState([])
    useEffect(() => {
        fetch('PopularNews.json')
            .then(res => res.json())
            .then(data => setPopularNews(data))
    }, [])
    return [PopularNews, setPopularNews]
}

export default usePopularNews;