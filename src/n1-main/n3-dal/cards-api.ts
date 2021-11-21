import {instance} from "./index";


export const cardsApi = {
    getCards({currentPage, cardQuestion, cardAnswer, grade}: CardsType) {
        instance.get<CardsType>(`/cards/card`,
            {params: {currentPage, cardQuestion, cardAnswer, grade}})
            .then(res => console.log(res))
    },
    postCard(){
      instance.post<CardsType>(`/cards/card`)
          .then(res=>console.log(res))
    },
    deleteCard(id:string){
        instance.delete(`/cards/card/${id}`)
            .then(res=>console.log(res))
    }
}

type CardsType = {
    currentPage: number
    cardQuestion: string
    cardAnswer: string
    grade: number
}