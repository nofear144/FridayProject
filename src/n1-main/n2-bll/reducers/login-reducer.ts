import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../n3-dal/api-login";

const initialState = {
    isLogged: false
}

export const loginReducer = (state: initialStateType = initialState, action: CombineActionType): initialStateType => {
    switch (action.type) {
        case "SET-AUTH-STATUS": {
            return action.payload
        }

        default:
            return state
    }
}


//Actions
const LoginAC = () => {
    return {type: "SET-AUTH-STATUS", payload: {isLogged: true}} as const
}

//Thunks
export const LoginTC = ({email, password, rememberMe}: LoginType) => (dispatch: Dispatch) => {
    loginAPI.login({email, password, rememberMe})
        .then(res => {
            dispatch(LoginAC())
            console.log(res.data)
        })
}

//Types
export type CombineActionType = ReturnType<typeof LoginAC>
type initialStateType = typeof initialState