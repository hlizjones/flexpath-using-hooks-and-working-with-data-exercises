import React, {useEffect } from "react";

export default function ThrottledScrollLogger() {
    useEffect(() => {
        let lastScrollTime = 0

        const handleScroll = () => {
            const now = Date.now()
            if (now - lastScrollTime >= 500) {
                console.log("Scroll position: ", window.scrollY)
                lastScrollTime = now;
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div style={{height: "200vh"}}>
            <h2>Scroll to log scroll position to console.</h2>
        </div>
    )
}