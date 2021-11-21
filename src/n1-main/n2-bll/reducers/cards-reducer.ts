
const initialState = {
    pageCount:10,
    page:1,
    grade:0,
    min:1,
    max:5,
    cardQuestion:"",
    cardAnswer:"",
    id: "",
}


export const cardsReducer = (state:initialStateType=initialState, action: any):initialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

//Actions


//Thunks



//Types
type initialStateType = typeof initialState
