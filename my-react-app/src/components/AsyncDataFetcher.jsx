import React, { useState, useEffect } from "react";

export default function AsyncDataFetcher() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
            const data = await fetch( `https://jsonplaceholder.typicode.com/posts/${Math.ceil(
                Math.random() * 100
              )}`)
            const json = await data.json();
            setData(json)
            } catch (error) {
                console.error("Error fetching data: ",error)
            }
        }
        fetchData()
    }, [])

    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}