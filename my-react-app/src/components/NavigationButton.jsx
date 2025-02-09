import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationButton () {
const navigate = useNavigate();
    return(
    <button onClick={() => navigate("/about")}>About</button>
)
}