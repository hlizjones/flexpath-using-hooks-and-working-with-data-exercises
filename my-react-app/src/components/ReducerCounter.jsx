import React, {useReducer} from "react";

export default function ReducerCounter () {
    const initialState = 0
    const [state, dispatch] = useReducer(reducer, initialState)
    function reducer(state, action) {
        switch(action) {
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            case "reset":
                return initialState
            default:
                return state
        }
    }
    return (
        <div>
            <h2>Count: {state}</h2>
            <button onClick={()=> dispatch("increment")}>Increment</button>
            <button onClick={()=> dispatch("decrement")}>Decrement</button>
            <button onClick={()=> dispatch("reset")}>Reset</button>
        </div>

    )
}