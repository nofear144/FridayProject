import React, {FC} from "react";
import ReactDOM from "react-dom";
import style from "./overlayingPopup.module.css"
import {Popup} from "../popup/popup";

export type PopupType = {
    onClose: (value: boolean) => void
    isOpened: boolean
    message: string
}
export const OverlayingPopup: FC<PopupType> = ({message, isOpened, onClose, children}) => {
    if (!isOpened) {
        return null
    }

    return ReactDOM.createPortal(
        <div className={style.overlay} onClick={() => onClose(false)}>
            <Popup
                children={children}
                isOpen={isOpened}
                message={message}/>
        </div>, document.body)
}


// const Modal: FC<PortalModelType> = ({message, isOpen, onClose}) => {
//     if (!isOpen) return null;
//     return (
//         <div className={style.modal}>
//             <h2>{message}</h2>
//             <button className={style.close} onClick={onClose}>
//                 Close
//             </button>
//         </div>
//     );
// };
//
// export default Modal;

// return <Portal>
//     <div className={style.container} role="dialog">
//         <div
//             className={style.overlay}
//             role="button"
//             tabIndex={0}
//             onClick={onClose}
//         />
//         <div className={style.content}>
//             {children}awadawdwadwaddawd
//         </div>
//     </div>
// </Portal>

// export function NewPopup() {
//     const [open, setOpen] = useState(false);
//     const [openp, setOpenP] = useState(false);
//     return (
//         <div className={style.container}>
//             <div className={style.button_container}>
//                 <button className={style.button} onClick={() => setOpen(true)}>
//                     Open Modal
//                 </button>
//                 <button className={style.button} onClick={() => setOpenP(true)}>
//                     Open Portal Modal
//                 </button>
//             </div>
//
//             <div>
//                 <Modal
//                     message="Hello World!"
//                     isOpen={open}
//                     onClose={() => setOpen(false)}
//                 />
//                 <PortalModal
//                     message="Hello Portal World!"
//                     isOpen={openp}
//                     onClose={() => setOpenP(false)}
//                 />
//             </div>
//         </div>
//     );
// }
