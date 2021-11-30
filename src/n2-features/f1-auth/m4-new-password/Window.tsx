import React, {FC} from 'react';
import s from "./Window.module.scss"

type Props = {
onClick?: (e: any) => void
}

const Window:FC<Props> = ({children, onClick}) => {
    return (
        <div onClick={onClick} className={s.window}>
                {children}
        </div>
    );
};

export default Window;