import React, {FC} from 'react';
import s from "./Window.module.scss"

const Window:FC = ({children}) => {
    return (
        <div className={s.window}>
                {children}
        </div>
    );
};

export default Window;