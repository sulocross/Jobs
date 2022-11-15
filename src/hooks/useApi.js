import { useState, useEffect } from "react"

export default function useApi(url){
    const [data, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url,{headers: {"Authorization": "Bearer " + process.env.REACT_APP_BEARER_KEY}})
        .then(res => res.json())
        .then(json => setJobs(json))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, [url])

    return [data, loading, error]
}