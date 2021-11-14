import {NewPasswordAPI, recoveryMessageType} from "../../n3-dal/api-newPassword";
import {Dispatch} from "redux";


const initialState: initialStateType = {
    status: "idle",
    error: "",
}
export const resetReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_ERROR: {
            return {...state, ...action.payload}
        }
        case SET_LOADING_STATUS: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//Actions
const setError = (error: string) => {
    return {type: SET_ERROR, payload: {error}} as const
}
export const setRecoveryStatus = (status: statusType) => {
    return {type: SET_LOADING_STATUS, payload: {status}} as const
}

//Thunks
export const sendRecoveryInstructions = (payload: recoveryMessageType) => (dispatch: Dispatch) => {
    dispatch(setRecoveryStatus("loading"))
    NewPasswordAPI.sendRecoveryInstructions(payload).then((data) => {
            dispatch(setRecoveryStatus("success"))
        }
    )
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
                setError(error);
            console.log(error);
            dispatch(setRecoveryStatus("idle"))
        })
}


//Types
type initialStateType = {
    status: statusType,
    error: string
}
type ActionsType = ReturnType<typeof setError> | ReturnType<typeof setRecoveryStatus>
export type statusType = "idle" | "loading" | "success"
//Constants}

const SET_ERROR = "resetPassword/SET_ERROR"
const SET_LOADING_STATUS = "resetPassword/SET_LOADING_STATUS"