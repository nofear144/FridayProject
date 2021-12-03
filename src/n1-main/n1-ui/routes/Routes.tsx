import React, {useEffect} from "react";


import { Route, Routes} from "react-router-dom";
import {Login} from "../../../n2-features/f1-auth/m1-login/Login";
import {Registration} from "../../../n2-features/f1-auth/m2-registration/Registration";
import {ResetPassword} from "../../../n2-features/f1-auth/m3-reset-password/ResetPassword";
import {NewPassword} from "../../../n2-features/f1-auth/m4-new-password/NewPassword";
import {Test} from "../../../n2-features/f0-test/Test";
import {NotFound404} from "../../../n2-features/f1-auth/m5-404/NotFound404";
import s from "./routes.module.scss"
import {CheckEmail} from "../../../n2-features/f1-auth/m3-reset-password/CheckEmail";
import {CardsList} from "../../../n2-features/f3-cards/m2-cards-list/CardsList";
import {PacksList} from "../../../n2-features/f3-cards/m1-packs-list/PacksList";
import {QuestionCard} from "../../../n2-features/f3-cards/m4-question-card/QuestionCard";
import {initializeTC} from "../../n2-bll/reducers/login-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../n2-bll/store/store";
import {Spinner} from "../common/c5-spinner/Spinner";


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RESET_PASSWORD: '/recovery_password',
    NEW_PASSWORD: '/set_new_password',
    TEST: '/test',
    PROFILE: '/FridayProject',
    CHECK_EMAIL: "/check_email",
    CARDS_LIST: "/cards_list",
    PACKS_LIST: "/packs_list",
    LEARN_CARD:"/question_card"

}

export function RoutesPage() {
    const isInitialize = useAppSelector(state => state.app.isInitialize);
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [initializeTC])

    if (!isInitialize) {
        return <div className={s.loader}><Spinner/></div>
    }


    return (

        <div className={s.container}>
            <Routes>

                <Route path={'/'} element={<PacksList/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}>
                    <Route path=":token" element={<NewPassword/>}/>
                </Route>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.PROFILE} element={<PacksList/>}/>
                <Route path={"*"} element={<NotFound404/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}>
                    <Route path=":email" element={<CheckEmail/>}/>
                </Route>
                <Route path={PATH.PACKS_LIST} element={<PacksList/>}/>
                <Route path={PATH.CARDS_LIST} element={<CardsList/>}>
                    <Route path=":id" element={<CardsList/>}/>
                </Route>
                <Route path={PATH.LEARN_CARD} element={<QuestionCard/>}>
                <Route path={":id"} element={<QuestionCard/>}/>
                </Route>
            </Routes>

        </div>

    )
}


