import React from "react";
import useFetch from "../hooks/useFetch";

export default function CustomHookDemo() {
    const response = useFetch("https://jsonplaceholder.typicode.com/posts/3")

    if (response.loading) return <div>Loading...</div>
    if (response.error) return <div>Error: {response.error.message}</div>
    if (!response.data) return null
    return (
        <div>
        <h2>{response.data.title}</h2>
        <p>{response.data.body}</p>
        </div>
    )

}