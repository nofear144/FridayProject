import {instance} from "./index";
import {AxiosResponse} from "axios";


export const cardsApi = {
    getCards(cardAnswer: null, cardQuestion: null,
             pageCount: number, cardsPack_id: string, min: number, max: number, sortCards: string,
             page: number) {
        return instance.get<ResponseType>(`/cards/card/`,
            {params: {cardAnswer, cardQuestion, pageCount, cardsPack_id, min, max, sortCards, page}})
    },
    postCard({cardsPack_id, answer, question, grade, shots}: CreateCardType) {
        return instance.post<CardsType, AxiosResponse<ResponseType>>(`/cards/card`,
            {card: {cardsPack_id, answer, question, grade, shots}})
    },
    deleteCard(_id: string) {
        return instance.delete<CardsType, AxiosResponse<ResponseType>>(`/cards/card/?id=${_id}`)
    },
    updateCard({_id, question, answer}: UpdateCardType) {
        return instance.put<CardsType, AxiosResponse<ResponseType>>(`/cards/card/`,
            {card: {_id, question, answer}})
    },


    getParam(params: ParamsType) {
        return instance.get(`cards/card/${params.cardsPack_id}`)
    }
}
export type CreateCardType = {
    cardsPack_id: string
    answer: string
    question: string
    grade: number
    shots: number
}
export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    user_id: string
    created: string
    updated: string
    _id: string
}
type UpdateCardType = {
    _id: string
    question: string
    answer: string
}
export type ResponseType = {
    cards: CardsType[],
    cardsTotalCount: number,
    maxGrade: number,
    mainGrade: number,
    page: number,
    pageCount: number,
    packUserId: string,
}


type ParamsType = {
    cardsPack_id: string
}