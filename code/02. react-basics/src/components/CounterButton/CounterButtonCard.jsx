import { useState } from 'react'
import CounterButton from './CounterButton.jsx'

export default function CounterButtonCard() {
    const [counter, updateCounter] = useState(0);

    console.log(`Counter-Button-Card Component Executing!`);

    function handleClick() {
        updateCounter(counter => counter + 1);
    }

    return (
        <div className="card">
            <CounterButton onClick={handleClick}>
                CLICK ME {counter}
            </CounterButton>
        </div >
    )
}