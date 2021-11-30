import React, {FC} from "react";
import ReactDOM from "react-dom";
import s from "../../../../n2-features/f2-profile/Profile.module.scss";

export type PortalModelType = {
    isOpen: boolean
}
export const PopUpForProfile: FC<PortalModelType> = (
    { isOpen, children}) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div onClick={stopPropagation}>
            {children}
            <div className={s.bgLayer}></div>
        </div>,
        document.body
    );
};


