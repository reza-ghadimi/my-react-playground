// **************************************************
// B-02.03/00: The ResultModal component was initially created with a simple dialog displaying the target time and a close button.
// **************************************************
// export default function ResultModal({ targetTime }) {
//     return (
//         <dialog className="result-modal">
//             <p>
//                 The target time was <strong>{targetTime} seconds.</strong>
//             </p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }
// **************************************************

// **************************************************
// B-02.03/01: The ResultModal was updated to always open by default (`open` attribute added to the dialog tag), removing the need for any additional control to display it.
// **************************************************
// export default function ResultModal({ targetTime }) {
//     return (
//         <dialog className="result-modal" open>
//             <p>
//                 The target time was <strong>{targetTime} seconds.</strong>
//             </p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }
// **************************************************

// **************************************************
// B-02.03/02: The modal now conditionally renders a message based on whether the user won or lost, displaying the target time and the time remaining when the timer was stopped. It calculates and shows the score if the user won.
// **************************************************
// export default function ResultModal({ userWon, targetTimeInSecond, remainingTimeInMillisecond }) {
//     const formattedRemainingTime = (remainingTimeInMillisecond / 1000).toFixed(2);
//     const score = Math.round((1 - remainingTimeInMillisecond / (targetTimeInSecond * 1000)) * 100);

//     return (
//         <dialog className="result-modal" open>
//             {userWon == false && <h2>You lost</h2>}
//             {userWon && <h2>Your Score: {score}</h2>}
//             <p>
//                 The target time was <strong>{targetTimeInSecond} seconds.</strong>
//             </p>
//             <p>
//                 You stopped the timer with{' '}
//                 <strong>{formattedRemainingTime} seconds left.</strong>
//             </p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }
// **************************************************

// **************************************************
// B-02.03/03: The modal now accepts a `resetTimer` function as a prop and invokes it on form submission to allow the parent component to reset the timer when the modal is closed.
// **************************************************
// export default function ResultModal({ userWon, targetTimeInSecond, remainingTimeInMillisecond, resetTimer }) {
//     const formattedRemainingTime = (remainingTimeInMillisecond / 1000).toFixed(2);
//     const score = Math.round((1 - remainingTimeInMillisecond / (targetTimeInSecond * 1000)) * 100);

//     return (
//         <dialog className="result-modal" open>
//             {userWon == false && <h2>You lost</h2>}
//             {userWon && <h2>Your Score: {score}</h2>}
//             <p>
//                 The target time was <strong>{targetTimeInSecond} seconds.</strong>
//             </p>
//             <p>
//                 You stopped the timer with{' '}
//                 <strong>{formattedRemainingTime} seconds left.</strong>
//             </p>
//             <form method="dialog" onSubmit={resetTimer}>
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }
// **************************************************

// **************************************************
// B-02.03/04: Introduced `forwardRef` to allow the parent component to control the modal visibility by referencing the modal, enabling a more flexible use of the component.
// **************************************************
// import React, { forwardRef } from 'react';

// // ResultModal with forwardRef to allow the parent component to control the dialog visibility
// const ResultModal = forwardRef(({ userWon, targetTimeInSecond, remainingTimeInMillisecond, resetTimer }, ref) => {

//     const formattedRemainingTime = (remainingTimeInMillisecond / 1000).toFixed(2);
//     const score = Math.round((1 - remainingTimeInMillisecond / (targetTimeInSecond * 1000)) * 100);

//     return (
//         <dialog ref={ref} className="result-modal">
//             {userWon == false && <h2>You lost</h2>}
//             {userWon && <h2>Your Score: {score}</h2>}
//             <p>
//                 The target time was <strong>{targetTimeInSecond} seconds.</strong>
//             </p>
//             <p>
//                 You stopped the timer with{' '}
//                 <strong>{formattedRemainingTime} seconds left.</strong>
//             </p>
//             <form method="dialog" onSubmit={resetTimer}>
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// });

// export default ResultModal;
// **************************************************

// **************************************************
// B-02.03/05: Added `useImperativeHandle` to expose a custom `open` method for the modal, allowing the parent component to control when the modal opens using a reference (`ref`).
// **************************************************
// import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// // ResultModal with forwardRef to allow the parent component to control the dialog visibility
// const ResultModal = forwardRef(({ userWon, targetTimeInSecond, remainingTimeInMillisecond, resetTimer }, ref) => {
//     const dialog = useRef();

//     const formattedRemainingTime = (remainingTimeInMillisecond / 1000).toFixed(2);
//     const score = Math.round((1 - remainingTimeInMillisecond / (targetTimeInSecond * 1000)) * 100);

//     useImperativeHandle(ref, () => {
//         return {
//             open() {
//                 dialog.current.showModal();
//             },
//         };
//     });

//     return (
//         <dialog ref={dialog} className="result-modal">
//             {userWon == false && <h2>You lost</h2>}
//             {userWon && <h2>Your Score: {score}</h2>}
//             <p>
//                 The target time was <strong>{targetTimeInSecond} seconds.</strong>
//             </p>
//             <p>
//                 You stopped the timer with{' '}
//                 <strong>{formattedRemainingTime} seconds left.</strong>
//             </p>
//             <form method="dialog" onSubmit={resetTimer}>
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// });
// **************************************************

// **************************************************
// B-02.03/06: Refined the logic for showing the modal by considering the user's state (lost or not), calculating the score, and displaying appropriate messages. The modal now properly supports `ref` and includes logic to handle custom dialog control using the `open()` method via `useImperativeHandle`.
// **************************************************
// export default ResultModal;

// import { useImperativeHandle, useRef } from 'react';

// export default function ResultModal({ targetTime, remainingTime, onReset, ref }) {
//     const dialog = useRef();

//     const userLost = remainingTime <= 0;
//     const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
//     const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

//     useImperativeHandle(ref, () => {
//         return {
//             open() {
//                 dialog.current.showModal();
//             },
//         };
//     });

//     return(
//         <dialog ref={dialog} className="result-modal">
//             {userLost && <h2>You lost</h2>}
//             {!userLost && <h2>Your Score: {score}</h2>}
//             <p>
//                 The target time was <strong>{targetTime} seconds.</strong>
//             </p>
//             <p>
//                 You stopped the timer with{' '}
//                 <strong>{formattedRemainingTime} seconds left.</strong>
//             </p>
//             <form method="dialog" onSubmit={onReset}>
//                 <button>Close</button>
//             </form>
//         </dialog>
//     );
// }
// **************************************************

// **************************************************
// C-03: Introduced `createPortal` to render the modal outside the parent DOM structure, specifically in a designated `modal` element in the HTML (`<div id="modal">`), ensuring better separation of concerns and a more flexible structure.
// **************************************************
import { createPortal } from 'react-dom';
import { useImperativeHandle, useRef } from 'react';

export default function ResultModal({ targetTime, remainingTime, onReset, ref }) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with{' '}
                <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}
// **************************************************
