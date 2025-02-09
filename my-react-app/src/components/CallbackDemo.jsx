import React, { useState, useCallback } from "react";

function Button({ event, label }) {
    return <button onClick={event}>{label}</button>
}

const MemoizeButton = React.memo(Button)

export default function CallbackDemo() {
    const [count, setCount] = useState(0)
    // const increment = useCallback(() => { setCount(count + 1) }, [count])
    // const decrement = useCallback(() => { setCount(count - 1) }, [count]) // Can lead to stale count being used if changed in quick succession
    const increment = useCallback(() => { setCount((count) => count + 1) }, [])
    const decrement = useCallback(() => { setCount((count) => count - 1) }, []) // Ensures correct count value is being used
    return (
        <div>
            <h2>Count: {count}</h2>
            <MemoizeButton event={increment} label="Increment"/>
            <MemoizeButton event={decrement} label="Decrement"/>
        </div>
    )
}

