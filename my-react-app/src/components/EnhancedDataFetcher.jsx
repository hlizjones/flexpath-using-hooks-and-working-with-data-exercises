import React, { useState, useEffect } from "react";

export default function EnhancedDataFetcher() {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setStatus(true)
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts/5')
                const json = await data.json();
                setData(json)
            } catch (error) {
                setError(error.message)
            }
            setStatus("Complete")
        }
        fetchData()
    }, [])

    if (status === "Pending") return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    if (!data) return null;

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}