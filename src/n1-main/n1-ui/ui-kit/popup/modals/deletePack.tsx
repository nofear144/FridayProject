import React, {FC} from "react";
import {useDispatch} from "react-redux";
import style from "../popup.module.css";
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
        <div>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose(false)}/>
                <SuperButton style={{backgroundColor: "indianred"}} name="Accept" onClick={deletePack}/>
            </div>
        </div>
    )
}


//Добавь в PackList

// const [packId, setPackId] = useState("")
// const [showDeletePopup, setShowDeletePopup] = useState(false);
// const onClickHideDelete = () => setShowDeletePopup(false)
// const deletePack = (id: string) => {
//     setShowDeletePopup(true)
//     setPackId(id)
// }

// После ретурна
// <OverlayingPopup
//     isOpened={showDeletePopup}
//     onClose={onClickHideDelete}
//     message="Do you want to delete this pack ?">
//     <DeletePack packId={packId} onClose={onClickHideDelete}/>
// </OverlayingPopup>