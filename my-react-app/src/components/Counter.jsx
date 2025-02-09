import React, {useState} from "react";

export default function Counter () {
    const [count, setCounter] = useState(0)
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
            <button onClick={() => setCounter(count - 1)}>Decrement</button>
        </div>
    )
};