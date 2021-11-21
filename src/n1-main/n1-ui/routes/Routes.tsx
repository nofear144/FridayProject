import React from "react";


import {Route, Routes} from "react-router-dom";
import {Login} from "../../../n2-features/f1-auth/m1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/m2-registration/Registration";
import {ResetPassword} from "../../../n2-features/f1-auth/m3-reset-password/ResetPassword";
import {NewPassword} from "../../../n2-features/f1-auth/m4-new-password/NewPassword";
import {Test} from "../../../n2-features/f0-test/Test";
import {NotFound404} from "../../../n2-features/f1-auth/m5-404/NotFound404";
import {Profile} from "../../../n2-features/f2-profile/Profile";
import s from "./routes.module.scss"
import {CheckEmail} from "../../../n2-features/f1-auth/m3-reset-password/CheckEmail";
import {CardsList} from "../../../n2-features/f3-cards/m2-cards-list/CardsList";


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RESET_PASSWORD: '/recoveryPass',
    NEW_PASSWORD: '/set-new-password',
    TEST: '/test',
    PROFILE: '/FridayProject',
    CHECK_EMAIL: "/check_email",
    CARDS_LIST: "/cardsList",

}

export function RoutesPage() {
    return (

        <div className={s.container}>
            <Routes>

                <Route path={'/'} element={<Profile/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}>
                    <Route path=":token" element={<NewPassword/>}/>
                </Route>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={"*"} element={<NotFound404/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}>
                    <Route path=":email" element={<NewPassword/>}/>
                </Route>
                <Route path={PATH.CARDS_LIST} element={<CardsList/>}/>
            </Routes>

        </div>

    )
}


