import React from "react";


import { Route, Routes } from "react-router-dom";
import {Login} from "../../../n2-features/f1-auth/m1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/m2-registration/Registration";
import {ResetPassword} from "../../../n2-features/f1-auth/m3-reset-password/ResetPassword";
import {NewPassword} from "../../../n2-features/f1-auth/m4-new-password/NewPassword";
import {Header} from "../header/Header";



export const PATH = {
    HEADER:'/header',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RESET_PASSWORD: '/recoveryPass',
    NEW_PASSWORD: '/newPass',
    TEST: '/test',


}

export function RoutesPage() {
    return (

        <div>
            <Routes>
                <Route path={'/'}  element={<Header/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                {/*<Route path={PATH.TEST} element={}/>
                <Route element={}/>*/}
            </Routes>

        </div>

    )
}


