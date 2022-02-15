import React from 'react';
import { useEffect, useState } from "react";
const ArrayInUseState = () => {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Starday",
        "Sunday",
    ];
    const [lists, setLists] = useState(days);
    const [text, setText] = useState("");
    useEffect(() => {
        const filtered = days.filter((ela) =>
            ela.toLowerCase().includes(text.toLowerCase())
        );
        setLists(filtered);
    }, [text])
    return (
        <div>
            <h1>Componnt</h1>
            <input type="text" placeholder='Search Days'
                onChange={(e) => setText(e.target.value)}
            />
            <ul>
                {lists.map((days) => {
                    return (
                        <div>
                            <li>{days}</li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default ArrayInUseState;