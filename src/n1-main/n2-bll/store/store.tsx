import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "../reducers/login-reducer";
import {profileReducer} from "../reducers/profile-reducer";
import {testReducer} from "../reducers/test-reducer";
import {resetReducer} from "../reducers/resetPass-reducer";
import {registrationReducer} from "../reducers/registration-reducer";
import {newPassReducer} from "../reducers/newPass-reducer";

const rootReducer = combineReducers({
    login:loginReducer,
    resetPass:resetReducer,
    newPass:newPassReducer,
    registrationPass:registrationReducer,
    profile:profileReducer,
    test:testReducer,

})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type rootReducerType = ReturnType<typeof rootReducer>