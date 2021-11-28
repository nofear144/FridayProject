import React, {FC} from "react";
import ReactDOM from "react-dom";
import style from "./popup.module.css";

export type PortalModelType = {
    message: string
    isOpen: boolean
}
export const Popup: FC<PortalModelType> = (
    {message, isOpen, children}) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={style.mainModal} onClick={stopPropagation}>
            <h2>{message}</h2>
            {children}
        </div>,
        document.body
    );
};


