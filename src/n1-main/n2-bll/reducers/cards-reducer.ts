import {setAppErrorAC, setStatusAC} from "./app-reducer";
import {cardsApi, ResponseType} from "../../n3-dal/cards-api";
import {AppThunk} from "../store/store";

const initialState = {
    cards: [
        {
            answer: "",
            question: "",
            cardsPack_id: "",
            grade: 0,
            user_id: "",
            created: "",
            updated: "",
            _id: "",
        }
    ],
    pageCount: 0,
    page: 1,
    min: 0,
    max: 6,
    id: "",
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    sortCards: "0update",
    cardsTotalCount: 15
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "cards/SET_ANSWER":
        case "cards/SET_QUESTION":
        case "cards/SET_MAX_CARDS_COUNT":
        case "cards/SET_MIN_CARDS_COUNT":
        case "cards/SET_CARD_ANSWER":
        case "cards/SET_CARD_QUESTION":
        case "cards/SET_PAGE_COUNT":
        case "cards/SET_PAGE":
        case "cards/SET_CARDS_PACK_ID":
        case "cards/SET_SORT_CARDS": {
            return {...state, ...action.payload}
        }
        case "cards/SET_ALL_CARDS": {
            return {...state, ...action.cards, cardQuestion: state.cardQuestion, cardAnswer: state.cardAnswer}
        }
        default:
            return state
    }
}

//Actions
export const setQuestionAC = (question:string) => ({type:"cards/SET_QUESTION",payload:{question}}as const)
export const setAnswerAC = (answer:string) => ({type:"cards/SET_ANSWER",payload:{answer}}as const)

export const setAllCardsAC = (cards: ResponseType) => ({type: "cards/SET_ALL_CARDS", cards} as const)

export const setCardAnswerAC = (cardAnswer: string) => ({type: "cards/SET_CARD_ANSWER", payload: {cardAnswer}} as const)
export const setCardQuestionAC = (cardQuestion: string) => ({
    type: "cards/SET_CARD_QUESTION",
    payload: {cardQuestion}
} as const)
export const setPageCountAC = (pageCount: number) => ({type: "cards/SET_PAGE_COUNT", payload: {pageCount}} as const)
export const setMinCardsCountAC = (min: number) => ({type: "cards/SET_MIN_CARDS_COUNT", payload: {min}} as const)
export const setMaxCardsCountAC = (max: number) => ({type: "cards/SET_MAX_CARDS_COUNT", payload: {max}} as const)
export const setSortCardsAC = (sortCards: string) => ({type: "cards/SET_SORT_CARDS", payload: {sortCards}} as const)
export const setPageAC = (page: number) => ({type: "cards/SET_PAGE", payload: {page}} as const)

export const setCardsPack_idAC = (params: string) => ({
    type: "cards/SET_CARDS_PACK_ID",
    payload: {cardsPack_id: params}
} as const)

//Thunks
export const getAllCardsTC = (): AppThunk =>
    async (dispatch, getState) => {
        dispatch(setStatusAC("loading"))
        let {cardAnswer, cardQuestion, pageCount, cardsPack_id, min, max, sortCards, page} = getState().cards
        await cardsApi.getCards(cardQuestion, cardAnswer, pageCount, cardsPack_id, min, max, sortCards, page)
            .then(res => {
                dispatch(setAllCardsAC(res.data))
                dispatch(setStatusAC("succeeded"))
            }).catch(err => {
            dispatch(setStatusAC("failed"))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setAppErrorAC(error))
        })
            .finally(() => {
                dispatch(setStatusAC('idle'))
            })
    }

export const createNewCardTC = (cardsPack_id: string, question: string, answer: string, grade: number, shots: number): AppThunk =>
    async (dispatch) => {
        dispatch(setStatusAC("loading"))
        await cardsApi.postCard({cardsPack_id, question, answer, grade, shots})
            .then(res => {
                dispatch(setStatusAC("succeeded"))
            }).catch(err => {
                dispatch(setStatusAC("failed"))
                const error = err.response
                    ? err.response.data.error
                    : (err.message + 'some message from backend')
                dispatch(setAppErrorAC(error))
            })
            .finally(() => {
                dispatch(setStatusAC('idle'))
            })
        dispatch(getAllCardsTC())
    }

export const deleteCardTC = (id: string): AppThunk => async (dispatch) => {
    dispatch(setStatusAC("loading"))
    await cardsApi.deleteCard(id)
        .then(res => {
            dispatch(setStatusAC("succeeded"))
        }).catch(err => {
            dispatch(setStatusAC("failed"))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
    dispatch(getAllCardsTC())
}

export const updateCardTC = (_id: string, question: string, answer: string): AppThunk => async (dispatch) => {
    dispatch(setStatusAC("loading"))
    await cardsApi.updateCard({_id, question, answer})
        .then(res => {
            dispatch(setStatusAC("succeeded"))
        })
        .catch(err => {
            dispatch(setStatusAC("failed"))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
    dispatch(getAllCardsTC())
}

//Types
type initialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof setAllCardsAC> |
    ReturnType<typeof setStatusAC> |
    ReturnType<typeof setAppErrorAC> |

    ReturnType<typeof setCardAnswerAC> |
    ReturnType<typeof setCardQuestionAC> |
    ReturnType<typeof setPageCountAC> |
    ReturnType<typeof setMinCardsCountAC> |
    ReturnType<typeof setMaxCardsCountAC> |
    ReturnType<typeof setSortCardsAC> |
    ReturnType<typeof setPageAC> |
    ReturnType<typeof setCardsPack_idAC>|
    ReturnType<typeof setQuestionAC>|
    ReturnType<typeof setAnswerAC>
