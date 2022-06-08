import { useEffect, useState } from "react";

const useAiGenerateContents = () => {
    const [AiGenerateContents, setAiGenerateContents] = useState([])
    useEffect(() => {
        fetch('AiGenerateContents.json')
            .then(res => res.json())
            .then(data => setAiGenerateContents(data))
    }, [])
    return [AiGenerateContents, setAiGenerateContents]
};

export default useAiGenerateContents;