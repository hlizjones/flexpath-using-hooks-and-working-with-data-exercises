import React, { useEffect, useState } from "react";

export default function DataFetcher() {
    const [post, setPost] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/5')
       .then(response => response.json())
       .then(json => setPost(json))
       .catch((error) => console.error("Error:", error))
    }, [])

    if (!post) return <div>Loading...</div>

    throw new Error ("Data Fetcher failed!")
    
        return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}