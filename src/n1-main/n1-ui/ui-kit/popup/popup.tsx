import React, {FC, useEffect} from "react";
import {Portal} from "./Portal";
import Window from "../../../../n2-features/f1-auth/m4-new-password/Window";
import s from "./popup.module.css"

export type PortalModelType = {
    onClose: (value: boolean) => void
    isOpened: boolean

}
export const Popup: FC<PortalModelType> = ({isOpened, onClose, children}) => {



    useEffect(() => {
        const body = document.querySelector('body');
        body!.style.overflow = isOpened ? 'hidden' : 'auto';
    }, [isOpened])

    if (!isOpened) {
        return null
    }

    return (
        <Portal>
            <div className={s.overlay} onClick={() => {
                onClose(false)
            }}>
                <Window onClick={(e) => e.stopPropagation()}>
                    <div className={s.content}>
                        {children}
                    </div>
                </Window>
            </div>
        </Portal>

    );
};


