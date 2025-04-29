// **************************************************
// A-01:
// **************************************************
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function Modal({ open, children }) {
  const dialog = new useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
// **************************************************