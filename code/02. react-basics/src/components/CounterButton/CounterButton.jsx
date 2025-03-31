// **************************************************
// A-14:
// **************************************************

// **********
// A-14.01:
// **********
// export default function CounterButton({ lable }) {
//     return (
//         <button>{lable}</button>
//     )
// }

// **********
// A-14.02:
// **********
// children is a special prop that represents any content passed between the opening and closing tags of the component when it's used.
// export default function CounterButton(props) {
//     return (
//         <button>{props.children}</button>
//     )
// }

// **********
// A-14.03:
// **********
// export default function CounterButton(blahBlah) {
//     return (
//         <button>{blahBlah.children}</button>
//     )
// }

// **********
// A-14.04:
// **********
// export default function CounterButton({ children }) {
//     return (
//         <button>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-15:
// **************************************************
// export default function CounterButton({ children }) {
//     // document.querySelector('button').addEventListener('click', () => {
//     // });

//     function handleClick() {
//         console.log(`Hello World!`)
//     }

//     return (
//         // ❌ Incorrect: This immediately invokes handleClick when the component renders.
//         // Instead of passing a function reference, it executes the function right away.
//         // <button onClick={handleClick()}>{children}</button>

//         // ❌ Incorrect: This passes an anonymous function that returns handleClick instead of calling it.
//         // The function reference must be properly invoked.
//         // <button onClick={function() {handleClick}}>{children}</button>

//         // ✅ Correct: This passes an arrow function that calls handleClick when clicked.
//         // However, it's unnecessary since handleClick is already a function reference.
//         // <button onClick={() => handleClick()}>{children}</button>

//         // ✅ Correct: This correctly passes handleClick as a function reference.
//         // The function will execute only when the button is clicked.
//         <button onClick={handleClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-16:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-17:
// **************************************************
// export default function CounterButton({ children, blahBlah }) {
//     return (
//         <button onClick={blahBlah}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-18:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-19:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     console.log(`CounterButton Component Executing!`);

//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-20:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     console.log(`CounterButton Component Executing!`);

//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-21:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************

// **************************************************
// A-22:
// **************************************************
// export default function CounterButton({ children, onClick }) {
//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }
// **************************************************