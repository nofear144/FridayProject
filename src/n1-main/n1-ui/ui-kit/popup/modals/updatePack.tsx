import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import SuperInputText from "../../../common/c2-input/SuperInputText";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {useAppSelector} from "../../../../n2-bll/store/store";
import {updatePackTC} from "../../../../n2-bll/reducers/packs-reducer";
import s from "../popup.module.css";

export type UpdatePackPropsType = {
    onClose: (value: boolean) => void
    packId: string
}
export const UpdatePack: FC<UpdatePackPropsType> = ({packId, onClose}) => {
    const dispatch = useDispatch()
    const allPacks = useAppSelector(state => state.packs.cardPacks)

    const currentName = allPacks.find(pack => pack._id === packId && pack.name)

    const [packName, setPackName] = useState(currentName!.name)

    const updatePack = (e: FormEvent<HTMLFormElement>) => {
        dispatch(updatePackTC(packId, packName))
        onClose(false)
        e.preventDefault()
    }

    const onChangePackName = (packName: string) => {
        setPackName(packName)
    }

    return (
        <form className={s.container} onSubmit={updatePack}>
            <h2>Update the pack</h2>
            <SuperInputText
                onChangeText={onChangePackName}
                value={packName}
                required name="Pack name"/>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose(false)}/>
                <SuperButton style={{backgroundColor: "dodgerblue"}} name="Accept"/>
            </div>
        </form>
    )
}


