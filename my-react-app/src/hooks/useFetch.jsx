import React, { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await fetch(url)
                const json = await data.json()
                setData(json)
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    return (
        {
            data: data,
            loading: loading,
            error: error
        }
    )
}