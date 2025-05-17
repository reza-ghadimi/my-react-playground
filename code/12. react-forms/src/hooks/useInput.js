// **************************************************
// A-16: useInput hook: Manages input value, tracks if the input was touched (edited), and validates the value based on a provided validation function.
// **************************************************
import { useState } from 'react';

export function useInput(defaultValue, validationFunction) {
    const [didEdit, setDidEdit] = useState(false);
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const valueIsValid = validationFunction(enteredValue);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);

        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid
    };
}
// **************************************************