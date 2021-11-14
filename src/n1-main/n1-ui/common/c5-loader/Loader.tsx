import React from "react";
import s from "./Loader.module.scss"


export const Loader = () => {
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