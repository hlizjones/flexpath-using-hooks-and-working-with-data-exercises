import React from "react";
import { useParams } from "react-router-dom";

export default function UserProfile () {
    let params = useParams()
    return (
        <h2>User Profile for User ID: {params.userId}</h2>
    )
}