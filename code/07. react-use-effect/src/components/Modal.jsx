// **************************************************
// A-01:
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
// A-06/00:
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
// A-06/01:
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
// A-06/02:
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
// A-06/02:
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
// A-06/03:
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
// A-07:
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