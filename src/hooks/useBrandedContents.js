import { useEffect, useState } from "react";

const useBrandedContents = () => {
    const [BrandedContents, setBrandedContents] = useState([])
    useEffect(() => {
        fetch('BrandedContents.json')
            .then(res => res.json())
            .then(data => setBrandedContents(data))
    }, [])
    return [BrandedContents, setBrandedContents]
};

export default useBrandedContents;