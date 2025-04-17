// **************************************************
// A-01: Basic confirmation dialog with "Yes" and "No" buttons.
// **************************************************
// export default function DeleteConfirmation({ onConfirm, onCancel }) {
//   return (
//     <div id="delete-confirmation">
//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/00: Auto-confirms after 3 seconds using setTimeout.
// **************************************************
// export default function DeleteConfirmation({ onConfirm, onCancel }) {
//   setTimeout(() => {
//     onConfirm();
//   }, 3000);

//   return (
//     <div id="delete-confirmation">
//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/01: Makes auto-confirm timeout configurable with autoConfirmDurationInMs
// **************************************************
// export default function DeleteConfirmation({ onConfirm, onCancel, autoConfirmDurationInMs }) {
//   setTimeout(() => {
//     onConfirm();
//   }, autoConfirmDurationInMs);

//   return (
//     <div id="delete-confirmation">
//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/02:  Uses useEffect for timeout and cleanup to avoid stale timers.
// **************************************************
// import { useEffect } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, autoConfirmDurationInMs }) {
//   {console.log("Rendering Delete Confirmationt")}

//   useEffect(() => {
//     console.log("Starting timer");

//     const timer = setTimeout(() => {
//       console.log("Timeout");
//       onConfirm();
//     }, autoConfirmDurationInMs);

//     return () => {
//       console.log("Clear timer");
//       clearTimeout(timer);
//     }
//   });

//   return (
//     <div id="delete-confirmation">
//       {console.log("Rendering Delete Confirmation Component")}

//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/03: Adds onConfirm to dependencies to prevent infinite loop risk.
// **************************************************
// import { useEffect } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, autoConfirmDurationInMs }) {
//   // Passing functions or objects as dependencies may cause an infinite loop — remove the closeDialog from App.jsx temporarily to observe this behavior.
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onConfirm();
//     }, autoConfirmDurationInMs);

//     return () => {
//       clearTimeout(timer);
//     }
//   }, [onConfirm]);

//   return (
//     <div id="delete-confirmation">
//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }
// **************************************************


// **************************************************
// A-07/04: Adds a progress countdown state updated with setInterval.
// **************************************************
// import { useEffect, useState } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, autoConfirmDurationInMs }) {
//   { console.log("Rendering Delete Confirmationt") }

//   const [remainingTimeInMillisecond, setRemainingTime] = useState(autoConfirmDurationInMs);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime(preValue => preValue - 10);
//     }, 10);

//     return () => {
//       clearInterval(timer);
//     }
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onConfirm();
//     }, autoConfirmDurationInMs);

//     return () => {
//       clearTimeout(timer);
//     }
//   }, [onConfirm]);

//   return (
//     <div id="delete-confirmation">
//       <h2>Are you sure?</h2>
//       <p>Do you really want to remove this place?</p>
//       <div id="confirmation-actions">
//         <button onClick={onCancel} className="button-text">
//           No
//         </button>
//         <button onClick={onConfirm} className="button">
//           Yes
//         </button>
//       </div>

//       <progress value={remainingTimeInMillisecond} max={autoConfirmDurationInMs} />
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/05: Final version with visual countdown via separate ProgressBar component.
// **************************************************
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel, autoConfirmDurationInMs }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, autoConfirmDurationInMs);

    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>

      <ProgressBar max={autoConfirmDurationInMs} />
    </div>
  );
}
// **************************************************
