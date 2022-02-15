import { useEffect, useState } from "react";
import React from 'react';

const MyLife = () => {
    const [data, setData] = useState("Birth");

    useEffect(() => {
        const result = "Api got hit";
        setData(result);
    }, [])

    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
};

export default MyLife;