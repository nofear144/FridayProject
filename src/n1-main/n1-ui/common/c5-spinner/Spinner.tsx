import React from "react";
import s from "./Spinner.module.scss"


export const Spinner = () => {
    return (
        <div>
            <div className={s.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}