import React, {FC} from "react";
import {Portal} from "../portal/portal";
import style from "./fullScreenPopup.module.css"

export const FullScreenPopup:FC<{children:any}> =({children}) =>{
    return <Portal>
        <div className={style.popup}>{children}</div>
    </Portal>
}