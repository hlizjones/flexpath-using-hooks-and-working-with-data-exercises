import React, {useState} from "react";

export function SquareCalculator () {
    const [number, setNumber] = useState(2)
    const handleinputChange = (e) => setNumber(e.target.value)
    return (
        <div>
            <label>Number:</label>
            <input value={number} onChange={handleinputChange}/>
            <h2>Squared: {number*number}</h2>
        </div>
    )
}