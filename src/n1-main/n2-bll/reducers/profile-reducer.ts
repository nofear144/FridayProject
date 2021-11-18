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


//Types

type initialStateType = {
    _id: string
    name: string
    avatar: string | undefined
}

export type CombineProfileActionsType =
    |ReturnType<typeof setUserProfileAC>
