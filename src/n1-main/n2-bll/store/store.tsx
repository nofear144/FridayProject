import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {loginReducer} from "../reducers/login-reducer";
import {profileReducer} from "../reducers/profile-reducer";
import {testReducer} from "../reducers/test-reducer";
import {registrationReducer} from "../reducers/registration-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "../reducers/app-reducer";
import {cardsReducer} from "../reducers/cards-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registrationPass: registrationReducer,
    profile: profileReducer,
    test: testReducer,
    app: appReducer,
    cards:cardsReducer,
})

//store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type rootReducerType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<rootReducerType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    rootReducerType,
    unknown,
    AnyAction>