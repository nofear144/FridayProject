import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {deleteCardTC} from "../../../../n2-bll/reducers/cards-reducer";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {useParams} from "react-router-dom";

export type DeleteCardPropsType = {
    onClose: (value: boolean) => void
    cardId: string
}
export const DeleteCard: FC<DeleteCardPropsType> = ({cardId, onClose}) => {
    const dispatch = useDispatch()
    const {id} = useParams<string>()
    const deleteCard = () => {
        dispatch(id && deleteCardTC(cardId, id))
        onClose(false)
    }

    return (
        <div>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose(false)}/>
                <SuperButton style={{backgroundColor: "indianred"}} name="Accept" onClick={deleteCard}/>
            </div>
        </div>
    )
}