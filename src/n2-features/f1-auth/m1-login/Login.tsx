import React from "react";
import s from './Login.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";


export function Login() {
    return (
        <div >
           <div className={s.form}>
               <div className={s.header}>it-incubator</div>
               <div className={s.signLabel}>Sign in</div>
               <form>
                   <SuperInputText  type="text" required name="email"/>
                   <SuperInputText type="password" required name="password"/>
               </form>
               <div className={s.forgot}>Forgot Password</div>
               <div className={s.button}>
                   <SuperButton/>
               </div>
               <div className={s.helpText}> Don't have an account?</div>
               <div className={s.sign}>Sign Up</div>


           </div>
        </div>
    )
}