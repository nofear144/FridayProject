const initialState: ProfileStateType = {
    _id: "",
    name: "",
    avatar: "",
    error: "",

}
export const profileReducer = (state = initialState, action: CombineProfileActionsType): ProfileStateType => {
    switch (action.type) {

        case "profile/SET-PROFILE-DATA": {

            return {
                ...state,
                _id: action._id,
                name: action.name,
                avatar: action.avatar
            }
        }
        default:
            return state
    }

}


//Actions
export const setUserProfileAC = (_id: string, name: string, avatar: string | undefined) => {
    return {type: "profile/SET-PROFILE-DATA", _id, name, avatar} as const
}

//Thunks


//Types
export type ProfileStateType = {
    _id: string
    name: string
    avatar: string | undefined
    error: string
}
export type CombineProfileActionsType =
    |ReturnType<typeof setUserProfileAC>
