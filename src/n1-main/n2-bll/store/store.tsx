import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../reducers/auth-reducer";
import {profileReducer} from "../reducers/profile-reducer";
import {testReducer} from "../reducers/test-reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    test:testReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type rootReducerType = ReturnType<typeof rootReducer>