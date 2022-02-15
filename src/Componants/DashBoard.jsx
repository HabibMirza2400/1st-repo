import React, { useEffect, useState } from "react";
import "./DashBoard.css";

export const DashBoard = () => {
    const [colr, setColr] = useState("green");
    const [dist, setDist] = useState(0);
    const [time, setTime] = useState(0);
    const speed = dist / time;
    useEffect(() => {

        // time > 0 && dist > 0;
        speed <= 50 && setColr("green");
        speed <= 70 && speed > 50 && setColr("orange");
        speed > 70 && setColr("red");
        time <= 0 && dist < 0 && alert("Please Give The Valid Velue");
    }, [dist, time, speed]);
    return (
        <div>
            <h1>This is For DashBoard Signal</h1>
            <br />
            Distance: <input type="number" placeholder="Distance" onChange={e => setDist(e.target.value)} />
            <br />
            <br />
            Time : <input type="number" placeholder="Time" onChange={e => setTime(e.target.value)} />
            <br />
            <br />

            <div className="bulb" style={{ backgroundColor: colr }}>
                <p>{speed}</p>
                {/* <p>{dist}Km</p> <br />
                <p>{time}Hrs</p> */}
                {/* we can do print speed in bulb */}
            </div>
        </div>
    )
}