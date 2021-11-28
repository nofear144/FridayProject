import {setAppErrorAC, setStatusAC} from "./app-reducer";
import {cardsApi, CardsType, ResponseType} from "../../n3-dal/cards-api";
import {AppThunk} from "../store/store";


const initialState = {
    cards: [] as Array<CardsType>,
    pageCount: 70,
    page: 1,
    min: 0,
    max: 6,
    id: "",
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    sortCards: "0update",
    cardsTotalCount: 15,
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
        case "cards/SET_SORT_CARDS":
        case "cards/DELETE_ALL_CARDS": {
            return {...state, ...action.payload}
        }
        case "cards/SET_ALL_CARDS": {
            return {...state, ...action.cards, cardQuestion: state.cardQuestion, cardAnswer: state.cardAnswer}
        }
            console.log(action)
        /* case "cards/SET_GRADE":{
             return {...state,cards:state.cards.map((card)=>(card._id===action.id)?{...state.cards,grade: action.value}:card)}
         }*/
        default:
            return state
    }
}

//Actions
export const setGradeAC = (value: number, id: string) => (({type: "cards/SET_GRADE", value, id} as const))
export const setQuestionAC = (question: string) => ({type: "cards/SET_QUESTION", payload: {question}} as const)
export const setAnswerAC = (answer: string) => ({type: "cards/SET_ANSWER", payload: {answer}} as const)
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
export const deleteAllCardsAC = () => ({type: "cards/DELETE_ALL_CARDS", payload: {cards: [] as Array<CardsType>}} as const)

export const setCardsPack_idAC = (params: string) => ({
    type: "cards/SET_CARDS_PACK_ID",
    payload: {cardsPack_id: params}
} as const)

//Thunks
export const getAllCardsTC = (id:string): AppThunk =>
    async (dispatch, getState) => {
        dispatch(setStatusAC("loading"))
        let {cardAnswer, cardQuestion, pageCount, cardsPack_id, min, max, sortCards, page} = getState().cards
        await cardsApi.getCards(cardQuestion, cardAnswer, pageCount, id, min, max, sortCards, page)
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
        dispatch(getAllCardsTC(cardsPack_id))
    }

export const deleteCardTC = (id: string,cardsPack_id:string): AppThunk => async (dispatch) => {
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
    dispatch(getAllCardsTC(cardsPack_id))
}

export const updateCardTC = (cardsPack_id:string,_id: string, question: string, answer: string): AppThunk => async (dispatch) => {
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
    dispatch(getAllCardsTC(cardsPack_id))
}

export const gradeCardTC = (grade:number,card_id: string,cardsPack_id:string): AppThunk => async(dispatch) => {
    dispatch(setStatusAC("loading"))
    await cardsApi.gradeCard(grade,card_id)
        .then(res=>{
            dispatch(setStatusAC("succeeded"))
        })
        .catch(err=>{
            dispatch(setStatusAC("failed"))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
        dispatch(setStatusAC('idle'))
    })
    dispatch(getAllCardsTC(cardsPack_id))
}

//Types
type initialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof setAllCardsAC> |
    ReturnType<typeof setGradeAC> |
    ReturnType<typeof setStatusAC> |
    ReturnType<typeof setAppErrorAC> |
    ReturnType<typeof setCardAnswerAC> |
    ReturnType<typeof setCardQuestionAC> |
    ReturnType<typeof setPageCountAC> |
    ReturnType<typeof setMinCardsCountAC> |
    ReturnType<typeof setMaxCardsCountAC> |
    ReturnType<typeof setSortCardsAC> |
    ReturnType<typeof setPageAC> |
    ReturnType<typeof setCardsPack_idAC> |
    ReturnType<typeof setQuestionAC> |
    ReturnType<typeof setAnswerAC> |
    ReturnType<typeof deleteAllCardsAC>
