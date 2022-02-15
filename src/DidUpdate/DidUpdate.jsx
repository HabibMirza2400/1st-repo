import React, { useState, useEffect } from 'react';
const DidUpdate = () => {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Satarday",
        "Sunday",
    ];
    const [texts, setText] = useState("");
    const [list, setList] = useState(days);
    useEffect(() => {
        const filtered = days.filter((elem) =>
            elem.toLowerCase().includes(texts.toLowerCase())
            // elem.tolowerCase().includes(texts.toLowerCase())
        );
        setList(filtered);
    }, [texts]);
    // }, [texts]);

    return (
        <div>
            <h1>This is DidUpdate Componants</h1>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <ul>
                {list.map((days) => {
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

export default DidUpdate;