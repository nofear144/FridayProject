import {instance} from "./index";


export const packsApi = {
    getPacks(packName: string, min: number, max: number, sortPacks: string, page: number, pageCount: number) {
        return instance.get<RequestPacksType>("cards/pack", {
            params: {packName, min, max, sortPacks, page, pageCount}
        })
    },
    addPack({name, isPrivate, deckCover}: addPackType) {
        return instance.post<{}>("cards/pack", {name, isPrivate, deckCover})
    },
    deletePack(id: string) {
        return instance.delete<{}>("cards/pack", {params: {id}})
    },
    updatePack({_id, name}:updatePackType) {
        return instance.put<{}>("cards/pack",{_id,name})

    }
}


//Types
export type updatePackType = {
    _id:string
    name:string
}
type addPackType = {
    name: string
    isPrivate: boolean
    deckCover: string
}
export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    update: string
    user_name:string

}
export type RequestPacksType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}


