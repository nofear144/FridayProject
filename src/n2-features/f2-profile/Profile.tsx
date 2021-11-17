import React, {useEffect} from "react";
import s from "./Profile.module.css"
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../n1-main/n2-bll/store/store";
import {PATH} from "../../n1-main/n1-ui/routes/Routes";
import {Navigate} from "react-router-dom";
import {initializeTC} from "../../n1-main/n2-bll/reducers/login-reducer";
import {Spinner} from "../../n1-main/n1-ui/common/c5-spinner/Spinner";



export function Profile() {

    const dispatch = useDispatch()
    const isInitialize = useSelector<rootReducerType, boolean>(state => state.login.isInitialize)
    const isLoggedIn = useSelector<rootReducerType, boolean>(state => state.login.isLogged)

    useEffect(() => {
        if(!isInitialize){
            dispatch(initializeTC())
        }
    }, [])


    if (!isInitialize) {
        return <div className={s.loader}> <Spinner/> </div>
    }
    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}