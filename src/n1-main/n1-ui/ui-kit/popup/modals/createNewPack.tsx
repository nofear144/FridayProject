import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import SuperInputText from "../../../common/c2-input/SuperInputText";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {addPackTC} from "../../../../n2-bll/reducers/packs-reducer";
import SuperCheckbox from "../../../common/c3-checkbox/SuperCheckbox";
import s from "../popup.module.css";

export type CreatePackPropsType = {
    onClose: (value: boolean) => void
}
export const CreateNewPack: FC<CreatePackPropsType> = ({onClose}) => {
    const dispatch = useDispatch()

    const [packName, setPackName] = useState('')
    const [isPrivate, setIsPrivate] = useState(false)

    console.log("isPrivate ", isPrivate)
    const createNewPack = (e: FormEvent<HTMLFormElement>) => {
        dispatch(addPackTC(packName, isPrivate))
        onClose(false)
        e.preventDefault()
    }

    const onChangePackName = (packName: string) => {
        setPackName(packName)
    }
    return (
        <form className={s.container} onSubmit={createNewPack}>
            <h2>Create new pack</h2>
            <SuperInputText
                onChangeText={onChangePackName}
                value={packName}
                required name="Pack name"/>
            <SuperCheckbox
                name="Private pack"
                onChangeChecked={setIsPrivate}/>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose?.(false)}/>
                <SuperButton style={{backgroundColor: "dodgerblue"}} name="Accept"/>
            </div>
        </form>
    )
}


//Добавь в PackList

// const [showCreatePopup, setShowCreatePopup] = useState(false);
// const onClickShowCreate = () => setShowCreatePopup(true)
// const onClickHideCreate = () => setShowCreatePopup(false)


// После ретурна
//     <OverlayingPopup
// isOpened={showCreatePopup}
// onClose={onClickHideCreate}
// message="Create a new card">
//     <CreateNewPack onClose={onClickHideCreate}/>
// </OverlayingPopup>

// Замени кнопку этой
// <SuperButton name={"Add Pack"} onClick={onClickShowCreate}/>

// Надо добавить в InitialState свойство private в колоду карт, а также изменить имя isPrivate в добавлении ПАКА