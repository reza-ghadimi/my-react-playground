// **************************************************
// A-01:
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
// A-07/00:
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
// A-07/01:
// **************************************************
// export default function DeleteConfirmation({ onConfirm, onCancel, automaticConfirmationTimeInMillisecond }) {
//   setTimeout(() => {
//     onConfirm();
//   }, automaticConfirmationTimeInMillisecond);

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
// A-07/02:
// **************************************************
// import { useEffect } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, automaticConfirmationTimeInMillisecond }) {
//   {console.log("Rendering Delete Confirmationt")}

//   useEffect(() => {
//     console.log("Starting timer");

//     const timer = setTimeout(() => {
//       console.log("Timeout");
//       onConfirm();
//     }, automaticConfirmationTimeInMillisecond);

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
// A-07/03:
// **************************************************
// import { useEffect } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, automaticConfirmationTimeInMillisecond }) {
//   { console.log("Rendering Delete Confirmationt") }

//   // Passing functions/objects may result infinite loop (we removed close dialog from App.jsx to see this loop)!)
//   useEffect(() => {
//     console.log("Starting timer");

//     const timer = setTimeout(() => {
//       console.log("Timeout");
//       onConfirm();
//     }, automaticConfirmationTimeInMillisecond);

//     return () => {
//       console.log("Clear timer");
//       clearTimeout(timer);
//     }
//   }, [onConfirm]);

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
// A-07/04:
// **************************************************
// import { useEffect, useState } from "react";

// export default function DeleteConfirmation({ onConfirm, onCancel, automaticConfirmationTimeInMillisecond }) {
//   { console.log("Rendering Delete Confirmationt") }

//   const [remainingTimeInMillisecond, setRemainingTime] = useState(automaticConfirmationTimeInMillisecond);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime(preValue => preValue - 10);
//     }, 10);

//     return () => {
//       clearInterval(timer);
//     }
//   });

//   useEffect(() => {
//     console.log("Starting timer");

//     const timer = setTimeout(() => {
//       console.log("Timeout");
//       onConfirm();
//     }, automaticConfirmationTimeInMillisecond);

//     return () => {
//       console.log("Clear timer");
//       clearTimeout(timer);
//     }
//   }, [onConfirm]);

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

//       <progress value={remainingTimeInMillisecond} max={automaticConfirmationTimeInMillisecond} />
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-07/05:
// **************************************************
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel, automaticConfirmationTimeInMillisecond }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, automaticConfirmationTimeInMillisecond);

    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      {console.log("Rendering Delete Confirmation Component")}

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

      <ProgressBar max={automaticConfirmationTimeInMillisecond} />
    </div>
  );
}
// **************************************************
