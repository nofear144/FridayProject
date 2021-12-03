import {packsApi, PackType, RequestPacksType} from "../../n3-dal/packs-api";
import {AppThunk} from "../store/store";
import {setAppErrorAC, setIsInitializedAC, setStatusAC} from "./app-reducer";


const initialState = {
    cardPacks: [] as Array<PackType>
    ,
    cardPacksTotalCount: 14,
    page: 1,
    pageCount: 15,
    minCardsCount: 0,
    maxCardsCount: 103,
    sortPacks: '0update',
    packName: '',
    user_id: "",
    localminCardsCount: 0,
    localmaxCardsCount: 103,
}


export const packsReducer = (state: initialStateType = initialState, action: CombinePacksTypeAC): initialStateType => {
    switch (action.type) {

        case "packsCards/SET-PACKS": {
            return {...state,
                ...action.payload,
                sortPacks: state.sortPacks,
                packName: state.packName,
                localminCardsCount: state.localminCardsCount,
                localmaxCardsCount: state.localmaxCardsCount
            }
        }
        case "packsCards/SET-USER-ID-PACKS":
        case "packsCards/SET-SORT-PACKS":
        case "packsCards/SET-CARD-PACKS-TOTAL-COUNT":
        case "packsCards/SET-MAX-CARDS-COUNT":
        case "packsCards/SET-MIN-CARDS-COUNT":
        case "packsCards/SET-PACKS-NAME":
        case "packsCards/SET-PACKS-SORT":
        case "packsCards/SET-PAGE":
        case "packsCards/SET-PAGE-COUNT": {
            console.log(action.payload)
            return {...state, ...action.payload}
        }

        default:
            return state
    }

}


//Actions
export const setUserIdPacksAC = (user_id: string) => {
    return {
        type: "packsCards/SET-USER-ID-PACKS",
        payload: {user_id}
    } as const
}
export const setSortPacksAC = (sortPacks: string) => {
    return {
        type: "packsCards/SET-SORT-PACKS",
        payload: {sortPacks}
    } as const
}
export const setPacksCardsAC = (packsData: RequestPacksType) => {
    return {
        type: "packsCards/SET-PACKS",
        payload: packsData
    } as const
}
export const setPacksSortAC = (sortValue: string) => {
    return {
        type: "packsCards/SET-PACKS-SORT",
        payload: {sortValue}
    } as const
}
export const setPacksNameAC = (packName: string) => {
    return {
        type: "packsCards/SET-PACKS-NAME",
        payload: {packName}
    } as const
}
export const setPageCountAC = (pageCount: number) => {
    return {
        type: "packsCards/SET-PAGE-COUNT",
        payload: {pageCount}
    } as const
}
export const setPageAC = (page: number) => {
    return {
        type: "packsCards/SET-PAGE",
        payload: {page}
    } as const
}
export const setMaxPacksCountAC = (localmaxCardsCount: number) => {
    return {
        type: "packsCards/SET-MAX-CARDS-COUNT",
        payload: {localmaxCardsCount}
    } as const
}
export const setMinPacksCountAC = (localminCardsCount: number) => {
    return {
        type: "packsCards/SET-MIN-CARDS-COUNT",
        payload: {localminCardsCount}
    } as const
}
export const setCardPacksTotalCountAC = (totalCards: number) => {
    return {
        type: "packsCards/SET-CARD-PACKS-TOTAL-COUNT",
        payload: {totalCards}
    } as const
}


//Thunks
export const getPacksTC = (): AppThunk =>
    (dispatch, getState) => {

        let {packName, localminCardsCount, localmaxCardsCount, pageCount, page, sortPacks, user_id} = getState().packs
        dispatch(setStatusAC('loading'))
        packsApi.getPacks(packName, localminCardsCount, localmaxCardsCount, sortPacks, page, pageCount, user_id)
            .then(res => {
                dispatch(setPacksCardsAC(res.data))
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

export const deletePackTC = (packId: string): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.deletePack(packId)
        .then(res => {
            dispatch(setStatusAC('succeeded'))

        })
        .then(res=>{
            dispatch(getPacksTC())
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })

}
export const addPackTC = (name: string, isPrivate: boolean): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.addPack({name, isPrivate})
        .then(res => {
            dispatch(setStatusAC('succeeded'))

        })
        .then(res=>{
            dispatch(getPacksTC())
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })

}
export const updatePackTC = (_id: string, name: string): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.updatePack({_id, name})
        .then(res => {
                dispatch(setStatusAC('succeeded'))
            }
        )
        .then(res=>{
            dispatch(getPacksTC())
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
type initialStateType = typeof initialState
type CombinePacksTypeAC =
    | ReturnType<typeof setPacksCardsAC>
    | ReturnType<typeof setPacksSortAC>
    | ReturnType<typeof setPacksNameAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setMaxPacksCountAC>
    | ReturnType<typeof setMinPacksCountAC>
    | ReturnType<typeof setCardPacksTotalCountAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setUserIdPacksAC>
