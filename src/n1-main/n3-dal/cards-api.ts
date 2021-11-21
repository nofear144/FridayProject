import {instance} from "./index";
import {AxiosResponse} from "axios";


export const cardsApi = {
    getCards(cardAnswer: null, cardQuestion: null,
             pageCount: number, cardsPack_id: string, min: number, max: number, sortCards: string,
             page: number) {
        return instance.get<ResponseType>(`/cards/card/`,
            {params: {cardAnswer, cardQuestion, pageCount, cardsPack_id, min, max, sortCards, page}})
    },
    postCard(answer: string, question: string, grade: number, cardsPack_id: string,shots:number) {
        return instance.post<CardsType, AxiosResponse<ResponseType>>(`/cards/card`,
            {params: {answer, question, grade, cardsPack_id,shots}})
    },
    deleteCard(_id: string) {
        return instance.delete<CardsType, AxiosResponse<ResponseType>>(`/cards/card/?id=${_id}`)
    },
    updateCard(_id: string, question: string, answer: string) {
        return instance.put<CardsType, AxiosResponse<ResponseType>>(`/cards/card/`,
            {params: {_id, question, answer}})
    },


    getParam(params: ParamsType) {
        return instance.get(`cards/card/${params.cardsPack_id}`)
    }
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