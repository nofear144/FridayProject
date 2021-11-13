import React, {useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import style from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {sendFormAC, sendFormTC} from "../../../n1-main/n2-bll/reducers/registration-reducer";


export const Registration = React.memo(() =>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordCopy,setPasswordCopy] = useState("")
    const [error,setError] = useState(false)
console.log(email)
console.log(password)
    const dispatch = useDispatch();

    const sendFrom = (email:string,password:string) => {
        // if(password === passwordCopy) {
            dispatch(sendFormTC(email,password))
        }
    //     setError(true)
    // }

    return(
        <div className={style.registration}>
            <div className={style.header}>
          <h1>It-incubator</h1>
            <h2>Sign Up</h2>
            </div>
            <div className={style.inputs}>
                {error ? <div>INVALID DATA</div>:null}
            <SuperInputText onChangeText={setEmail} value={email} name="Email"/>
            <SuperInputText onChangeText={setPassword} value={password}  name="Password"/>
            <SuperInputText onChangeText={setPasswordCopy} value={passwordCopy}  name="Confirm password"/>
            </div>
            <div className={style.buttons}>
                <SuperButton/>
                <SuperButton onClick={()=>sendFrom(email,password)}/>
            </div>
        </div>
    )
})