import React from 'react';
import s from "./Linear-loader.module.css"

const LinearLoader = () => {
    return (
            <div className={s.linearActivity}>
                <div className={s.indeterminate}></div>
            </div>
    );
};

export default LinearLoader;