import React, {FC} from 'react';
import LinearLoader from "../../../n1-main/n1-ui/common/c6-linear-loader/Linear-loader";
import s from "./Loader.module.css";


const Loader: FC = () => {
    return (
        <>
            <LinearLoader/>
            <div className={s.loading}>
            </div>
        </>
    );
};

export default Loader;