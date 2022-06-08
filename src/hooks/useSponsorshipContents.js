import { useEffect, useState } from "react";

const useSponsorshipContents = () => {
    const [SponsorshipContents, setSponsorshipContents] = useState([])
    useEffect(() => {
        fetch('SponsorshipContents.json')
            .then(res => res.json())
            .then(data => setSponsorshipContents(data))
    }, [])
    return [SponsorshipContents, setSponsorshipContents]
};

export default useSponsorshipContents;