import React, { useState, useEffect } from "react";

export default function SimpleForm() {
    const [inputValue, setInputValue] = useState(null)
    const [submittedValue, setSubmittedValue] = useState(null)
   const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
   }
    return (
        <div>
            <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter text here:
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="Text"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        <p>You submitted: {submittedValue}</p>
        </div>
    )
}