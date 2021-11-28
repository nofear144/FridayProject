import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {deleteCardTC} from "../../../../n2-bll/reducers/cards-reducer";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {useAppSelector} from "../../../../n2-bll/store/store";

export type DeleteCardPropsType = {
    onClose: (value: boolean) => void
    cardId: string
}
export const DeleteCard: FC<DeleteCardPropsType> = ({cardId, onClose}) => {
    const dispatch = useDispatch()
    const cardsPack_id = useAppSelector(state => state.cards.cardsPack_id)
    const deleteCard = () => {
        dispatch(deleteCardTC(cardsPack_id,cardId))
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