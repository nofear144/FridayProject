import React, {FC, useEffect, useState} from "react";
import ReactDOM from "react-dom";


export const Portal: FC = ({children}) => {

    const [container] = useState(() => document.createElement("div"))

    useEffect(
        () => {
            document.body.append(container)

            return () => {
                container.remove()
            }
        }, [container]
    )


    return ReactDOM.createPortal(children, container)
}