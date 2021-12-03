import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {RoutesPage} from "./routes/Routes";
import {Header} from "./header/Header";
import {initializeTC} from "../n2-bll/reducers/login-reducer";
import {useAppSelector} from "../n2-bll/store/store";
import {useDispatch} from "react-redux";
import s from "../../n2-features/f2-profile/Profile.module.scss";
import {Spinner} from "./common/c5-spinner/Spinner";

function App() {
    const dispatch = useDispatch()
    const isInitialize = useAppSelector(state => state.app.isInitialize)
    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [])
    if (!isInitialize) {
        return <div className={s.loader}><Spinner/></div>
    }

    return (

        <HashRouter>
            <Header/>
            <RoutesPage/>
        </HashRouter>

    );
}

export default App;
