import React, {useState, useMemo} from "react";

export default function MemoizationDemo () {
    const [number, setNumber] = useState(null)
    const [toggle, setToggle] = useState(false)
    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        // Simulate heavy computation
        for (let i = 0; i < 1000000000; i++) {}
        return num * 2;
      };
    const calculateValue = useMemo(() => expensiveCalculation(number), [number]) 
    return (
<div>
    <h2>Value: {calculateValue}</h2>
    <input type="number" onChange={(e => setNumber(e.target.value))}/>
    <button onClick={()=>setToggle(!toggle)}>Toggle: {toggle.toString()}</button>
</div>
    )
}