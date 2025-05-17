// **************************************************
// A-01: Encapsulates input and set logic, lifting the chosen number to App for centralized state management.
// **************************************************
import { useState } from "react";

import { log } from '../../log.js';

export default function ConfigureCounter({ setChosenCount }) {
    log('<ConfigureCounter /> rendered', 1);

    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    }

    function handleSetClick() {
        setChosenCount(enteredNumber);
        setEnteredNumber(0);
    }

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={handleSetClick}>Set</button>
        </section>
    )
}
// **************************************************
