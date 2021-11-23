import {packsApi, RequestPacksType} from "../../n3-dal/packs-api";
import {AppThunk} from "../store/store";

import {setAppErrorAC, setIsInitializedAC, setStatusAC} from "./app-reducer";


const initialState = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            name: "",
            cardsCount: 1,
            created: "",
            updated: "",
            user_name: '',
        }
    ],
    cardPacksTotalCount: 14,
    minCardsCount: 0,
    maxCardsCount: 4,
    page: 1,
    pageCount: 15,
    sortPacks: '0update',
    packName: '',

}


export const packsReducer = (state: initialStateType = initialState, action: CombinePacksTypeAC): initialStateType => {
    switch (action.type) {
        case "packsCards/SET-PACKS": {
            return {...state, ...action.payload, sortPacks: state.sortPacks, packName: state.packName}
        }
        case "packsCards/SET-SORT-PACKS":
        case "packsCards/SET-CARD-PACKS-TOTAL-COUNT":
        case "packsCards/SET-MAX-CARDS-COUNT":
        case "packsCards/SET-MIN-CARDS-COUNT":
        case "packsCards/SET-PACKS-NAME":
        case "packsCards/SET-PACKS-SORT":
        case "packsCards/SET-PAGE":
        case "packsCards/SET-PAGE-COUNT": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//Actions
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
export const setPacksNameAC = (packsName: string) => {
    return {
        type: "packsCards/SET-PACKS-NAME",
        payload: {packsName}
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
export const setMaxPacksCountAC = (maxPackCount: number) => {
    return {
        type: "packsCards/SET-MAX-CARDS-COUNT",
        payload: {maxPackCount}
    } as const
}
export const setMinPacksCountAC = (minPacksCount: number) => {
    return {
        type: "packsCards/SET-MIN-CARDS-COUNT",
        payload: {minPacksCount}
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

        let {packName, minCardsCount, maxCardsCount, pageCount, page, sortPacks} = getState().packs
        dispatch(setStatusAC('loading'))
        packsApi.getPacks(packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount)
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
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
    dispatch(getPacksTC())
}
export const addPackTC = (name: string, isPrivate: boolean): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.addPack({name, isPrivate})
        .then(res => {
            dispatch(setStatusAC('succeeded'))
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
    dispatch(getPacksTC())
}
export const updatePackTC = (_id: string, name: string): AppThunk => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packsApi.updatePack({_id, name})
        .then(res => {
                dispatch(setStatusAC('succeeded'))
            }
        )
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC('failed'))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
    dispatch(getPacksTC())
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
