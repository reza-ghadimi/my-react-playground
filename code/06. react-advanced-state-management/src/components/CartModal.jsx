// **************************************************
// A-01: CartModal.jsx used forwardRef to expose a method (open) that allowed the modal dialog to be opened programmatically. It displayed a cart inside the modal and allowed for adding/removing items. The actions were dynamically passed as props.
// **************************************************
// import Cart from './Cart.jsx';

// import { createPortal } from 'react-dom';
// import { forwardRef, useImperativeHandle, useRef } from 'react';

// const CartModal = forwardRef(function Modal({ title, actions, addToBasket, removeFromBasket }, ref) {

//     const dialog = useRef();

//     useImperativeHandle(ref, () => {
//         return {
//             open: () => {
//                 dialog.current.showModal();
//             },
//         };
//     });

//     return createPortal(
//         <dialog id="modal" ref={dialog}>
//             <h2>{title}</h2>
//             <Cart addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
//             <form method="dialog" id="modal-actions">
//                 {actions}
//             </form>
//         </dialog>,
//         document.getElementById('modal')
//     )
// });

// export default CartModal;
// **************************************************

// **************************************************
// B-02: In the updated version of CartModal.jsx, CartContext was fully embraced, and the addToBasket and removeFromBasket functions were not passed as props but rather pulled from the context. The modal now simply renders the cart and the actions (like "Close" and "Checkout").
// **************************************************
import Cart from './Cart.jsx';
import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const CartModal = forwardRef(function Modal({ title, actions }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart />
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});

export default CartModal;
// **************************************************