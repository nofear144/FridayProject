import React, {FC} from "react";
import {useDispatch} from "react-redux";
import s from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {deletePackTC} from "../../../../n2-bll/reducers/packs-reducer";

export type DeletePackPropsType = {
    onClose: (value: boolean) => void
    packId: string
}
export const DeletePack: FC<DeletePackPropsType> = ({packId, onClose}) => {
    const dispatch = useDispatch()

    const deletePack = () => {
        dispatch(deletePackTC(packId))
        onClose(false)
    }

    return (
        <div className={s.container}>
            <h2>Delete the pack?</h2>
            <div className={s.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose(false)}/>
                <SuperButton variant="accept" name="Accept" onClick={deletePack}/>
            </div>
        </div>
    )
}
