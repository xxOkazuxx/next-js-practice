"use client";
import { useState } from "react";

export function ClientComponent({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const boxStyle = {
        color: "black",
        fontSize: "larger",
        fontWeight: "bold",
        width: "400px",
        height: "300px",
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column" as const,
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div style={boxStyle}>
            <p>Client Component</p>
            <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
            {isOpen && <p>Client Component is open</p>}
            {children}
        </div >
    )
}