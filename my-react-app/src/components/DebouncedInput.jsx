import React, { useState, useEffect } from "react";

export default function DebouncedInput() {
    const [input, setInput] = useState(null)
    const [debouncedValue, setDebouncedValue] = useState(null)

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(input)
        }, 1000)
        return (() => clearTimeout(debounce))
    }, [input])

    useEffect(() => {
        console.log("Simulating API call...")
    }, [debouncedValue]
    )

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type here"/>
            <h2>Debounced Value: {debouncedValue}</h2>
        </div>
    )

}