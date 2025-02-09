import React from "react";

export default function EventLogger () {
    return (
        <button onClick={(e) => console.log("Event Type: ", e.type, " Event Target: ", e.target)}>Log Event</button>
    )
}