import {AppThunk} from "../store/store";
import {setAppErrorAC, setStatusAC} from "./app-reducer";
import {packsApi} from "../../n3-dal/packs-api";
import {getPacksTC} from "./packs-reducer";

const initialState = {
    _id: "",
    name: "",
    avatar: "",
}
export const profileReducer = (state: initialStateType = initialState, action: CombineProfileActionsType): initialStateType => {
    switch (action.type) {

        case "profile/SET-PROFILE-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }

}


//Actions
export const setUserProfileAC = (_id: string, name: string, avatar: string | undefined) => {
    return {type: "profile/SET-PROFILE-DATA", payload: {_id, name, avatar}} as const
}

//Thunks
export const updateProfileTC = (name: string, avatar: string): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.updateProfile({name, avatar})
        .then(res => {
            console.log(res)
            dispatch(setUserProfileAC(res.data.updatedUser._id, res.data.updatedUser.name, res.data.updatedUser.avatar))
            dispatch(setStatusAC('succeeded'))
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })

}

//Types

type initialStateType = {
    _id: string
    name: string
    avatar: string | undefined
}


export type CombineProfileActionsType =
    |ReturnType<typeof setUserProfileAC>
