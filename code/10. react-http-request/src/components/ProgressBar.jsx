// **************************************************
// A-01:
// **************************************************
import { useState, useEffect } from "react";

export default function ProgressBar({ max }) {
    const [remainingTime, setRemainingTime] = useState(max);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(preValue => preValue - 10);
        }, 10);

        return () => {
            clearInterval(timer);
        }
    });

    return (<progress value={remainingTime} max={max} />);
}
// **************************************************