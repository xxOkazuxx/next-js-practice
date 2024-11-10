"use client";
import { useState } from "react";

export function ClientComponent({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-[400px] h-[300px] bg-yellow-300 flex justify-center items-center flex-col text-black text-lg font-bold">
            <p>Client Component</p>
            <button onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
            {isOpen && <p>Client Component is open</p>}
            {children}
        </div>
    )
}