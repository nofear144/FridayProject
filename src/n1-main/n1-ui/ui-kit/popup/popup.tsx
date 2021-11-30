import React, {FC} from "react";
import {Portal} from "./Portal";
import Window from "../../../../n2-features/f1-auth/m4-new-password/Window";
import s from "./popup.module.css"

export type PortalModelType = {
    onClose: (value: boolean) => void
    isOpened: boolean

}
export const Popup: FC<PortalModelType> = (
    {isOpened, onClose, children}) => {


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


