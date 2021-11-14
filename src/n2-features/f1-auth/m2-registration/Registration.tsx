import React, {useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import style from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {sendFormAC, sendFormTC} from "../../../n1-main/n2-bll/reducers/registration-reducer";
import {rootReducerType} from "../../../n1-main/n2-bll/store/store";


export const Registration = React.memo(() => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCopy, setPasswordCopy] = useState("")
    const [error, setError] = useState(false)
    console.log(email)
    console.log(password)
    const dispatch = useDispatch();
    const currentEmail = useSelector<rootReducerType,string>(state => state.registrationPass.email)
    console.log("Current email ",currentEmail)
    const sendFrom = (email:string,password:string) => {
        alert("i'm work")
         if(password === passwordCopy) {
            dispatch(sendFormTC(email,password))
        }
        setError(true)
    }
    // const sendFrom = () => {
    //     alert("i'm work")
    // }

    return (
        <div className={style.registration}>
            <div className={style.header}>
                <h1>It-incubator</h1>
                <h2>Sign Up</h2>
            </div>
            <div className={style.inputs}>
                {error ? <div>INVALID DATA</div> : null}
                <SuperInputText onChangeText={setEmail} value={email} name="Email"/>
                <SuperInputText onChangeText={setPassword} value={password} name="Password"/>
                <SuperInputText onChangeText={setPasswordCopy} value={passwordCopy} name="Confirm password"/>
            </div>
            <div className={style.buttons}>
                <SuperButton/>
                <button onClick={()=>sendFrom(email,password)}>+</button>
                {/*<SuperButton onClick={()=>sendFrom(email,password)}/>*/}
            </div>
        </div>
    )
})