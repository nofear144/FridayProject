import classNames from "classnames";
import React, {FC} from "react";
import {OverlayingPopup} from "../overlayingPopup/overlayingPopup";
import style from "./popup.module.css"


export const MainPopup: FC<any> = (
    {
        isOpened, onPrevArrowClick,
        title, onClose, className,
        children,
    }) => {
    return <div>

    </div>
    // <OverlayingPopup setOpenP={} isOpened={isOpened} onClose={onClose} >
    //     <div className={classNames(style.container, className)}>
    //         {/*<HeaderForPopup*/}
    //         {/*    onPrevArrowClick={onPrevArrowClick}*/}
    //         {/*    title={title}*/}
    //         {/*    onClose={onClose}*/}
    //         {/*/>*/}
    //
    //         {children}
    //     </div>
    // </OverlayingPopup>
}