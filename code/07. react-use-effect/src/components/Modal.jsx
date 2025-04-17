// **************************************************
// A-01: Uses useImperativeHandle to manually open/close the modal via ref.
// **************************************************
// import { createPortal } from 'react-dom';
// import { useRef, useImperativeHandle } from 'react';

// export default function Modal({ children, ref }) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************

// **************************************************
// A-06/00: Simplifies modal using the open prop to control visibility declaratively.
// **************************************************
// import { createPortal } from 'react-dom';

// export default function Modal({ open, children }) {
//   return createPortal(
//     <dialog className="modal" open={open}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************

// **************************************************
// A-06/01: Attempts imperative control with useRef, but incorrectly initializes it.
// **************************************************
// import { useRef } from 'react';
// import { createPortal } from 'react-dom';

// export default function Modal({ open, children }) {
//   const dialog = new useRef();

//   if (open) {
//     dialog.current.showModal();
//   }
//   else {
//     dialog.current.close();
//   }

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************

// **************************************************
// A-06/02: Fixes null safety with optional chaining but still outside useEffect.
// **************************************************
// import { useRef } from 'react';
// import { createPortal } from 'react-dom';

// export default function Modal({ open, children }) {
//   const dialog = new useRef();

//   if (open) {
//     dialog?.current?.showModal();
//   }
//   else {
//     dialog?.current?.close();
//   }

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************


// **************************************************
// A-06/02: Introduces useEffect for safer DOM interaction on mount.
// **************************************************
// import { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

// export default function Modal({ open, children }) {
//   const dialog = new useRef();

//   useEffect(() => {
//     if (open) {
//       dialog.current.showModal();
//     }
//     else {
//       dialog.current.close();
//     }
//   }, [])

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************

// **************************************************
// A-06/03: Adds open as dependency in useEffect to react to state changes.
// **************************************************
// import { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

// export default function Modal({ open, children }) {
//   const dialog = new useRef();

//   useEffect(() => {
//     if (open) {
//       dialog.current.showModal();
//     }
//     else {
//       dialog.current.close();
//     }
//     console.log(open);
//   }, [open])

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// };
// **************************************************


// **************************************************
// A-07: Final polished version with dynamic open/close behavior and debug logging
// **************************************************
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, children }) {
  const dialog = new useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
    console.log(open);
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
// **************************************************