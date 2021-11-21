
const initialState = {
    isInitialize: false,
    error: "",
    status: "idle" as RequestStatusType
}


export const appReducer = (state: initialStateType = initialState, action: CombineAppACType): initialStateType => {
    switch (action.type) {
        case "app/SET-IS-INITIALIZED-STATUS":
        case "app/SET-STATUS":
        case "app/SET-ERROR": {
            return {...state, ...action.payload}
        }


        default:
            return state
    }
}

//Actions
export const setAppErrorAC = (error: string) => ({type: 'app/SET-ERROR', payload: {error}} as const)
export const setIsInitializedAC = (isInitialize: boolean) => {
    return {type: "app/SET-IS-INITIALIZED-STATUS", payload: {isInitialize}} as const
}
export const setStatusAC = (status: RequestStatusType) => {
    return {type: "app/SET-STATUS", payload: {status}} as const
}

//Thunks


//Types
export type CombineAppACType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>
type initialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

