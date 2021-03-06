import {Dispatch} from "redux";
import {loginAPI, LoginPayloadType} from "../../n3-dal/api-login";
import {setUserProfileAC} from "./profile-reducer";
import {setAppErrorAC, setIsInitializedAC, setStatusAC} from "./app-reducer";
import {NewPasswordAPI, recoveryMessageType, setNewPasswordType} from "../../n3-dal/api-password-recovery";


const initialState = {
    isLogged: false,
}

export const loginReducer = (state:initialStateType = initialState, action: CombineActionType): initialStateType => {
    switch (action.type) {

        case "login/SET-IS-LOGGED-IN-STATUS": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}




export const setIsLoggedInAC = (isLogged: boolean) => {
    return {type: "login/SET-IS-LOGGED-IN-STATUS", payload: {isLogged}} as const
}

//Thunks
export const LoginTC = ({email, password, rememberMe}: LoginPayloadType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.login({email, password, rememberMe})
        .then(res => {

            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC("succeeded"))
            dispatch(setUserProfileAC(res.data._id, res.data.name, res.data.avatar))

        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error));
            dispatch(setStatusAC("idle"))
        })
}
export const LogoutTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setStatusAC("succeeded"))
        })
        .finally(() => {
            dispatch(setStatusAC("idle"))
        })

}
export const initializeTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.me()
        .then(data => {
            dispatch(setUserProfileAC(data._id, data.name, data.avatar))
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedAC(true))
            dispatch(setStatusAC("succeeded"))
            dispatch(setUserProfileAC(data._id, data.name, data.avatar))
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC("succeeded"))
        })
        .finally(() => {
            dispatch(setIsInitializedAC(true))
            dispatch(setStatusAC("idle"))
        })
}

export const sendNewPasswordWithToken = (payload: setNewPasswordType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    NewPasswordAPI.sendNewPasswordWithToken(payload)
        .then(() => {
                dispatch(setStatusAC("succeeded"))
            }
        )
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error));
            dispatch(setStatusAC("idle"))
        })
}

export const sendRecoveryInstructions = (payload: recoveryMessageType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    NewPasswordAPI.sendRecoveryInstructions(payload).then(() => {
            dispatch(setStatusAC("succeeded"))
        }
    )
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error));
            dispatch(setStatusAC("idle"))
        })
}

//Types
export type CombineActionType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setUserProfileAC>


type initialStateType = typeof initialState
