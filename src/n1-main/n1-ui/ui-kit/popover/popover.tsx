import React, {useRef} from "react";
import {Portal} from "../portal/portal";

export const Popover =(/*{onClose,reference,placement,children}*/) =>{
    const popperRef = useRef()

    return <Portal>
        {/*<ClickOutside reference={popperRef.current} onClickOutside={onClose}>*/}
        {/*    <Popper*/}
        {/*        innerRef={popperRef}*/}
        {/*            referenceElement={reference}*/}
        {/*            placement={placement}>*/}
        {/*        {(ref:any,style:any)=><div ref={ref} style={style} className={style.popover}>*/}
        {/*            {children}*/}
        {/*        </div>}*/}
        {/*    </Popper>*/}
        {/*</ClickOutside>*/}
    </Portal>
}