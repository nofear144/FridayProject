import React from "react";
import SuperButton from "../../n1-main/n1-ui/common/c1-button/SuperButton";
import SuperInputText from "../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperCheckbox from "../../n1-main/n1-ui/common/c3-checkbox/SuperCheckbox";
import SuperSelect from "../../n1-main/n1-ui/common/c4-select/SuperSelect";

import s from './Test.module.css'
import {Spinner} from "../../n1-main/n1-ui/common/c5-spinner/Spinner";


export function Test() {
    return(
        <div className={s.container}>
            <SuperButton/>
            <SuperInputText/>
            <SuperCheckbox/>
            <SuperSelect/>
            <Spinner/>
        </div>
    )
}