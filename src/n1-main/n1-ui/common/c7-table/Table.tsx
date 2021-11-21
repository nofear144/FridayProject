import React, {FC, memo} from "react";


import s from "./Table.module.scss";
import Window from "../../../../n2-features/f1-auth/m4-new-password/Window";
import {useAppSelector} from "../../../n2-bll/store/store";
import SuperButton from "../c1-button/SuperButton";


type Props = {
    items: any[] // Item
    header: {
        buttons?: string,
        user_name?: string, cardsCount?: string,
        updated?: string,
        name?: string,
        answer?: string,
        question?: string,
        grade?: string
    } //   {keyOfItemProperties : "TitleTableString"}
    onDeleteClickHandler?: () => void
    onUpdateUpdateHandler?: () => void
    onRowClickHandler?: () => void
}


export const Table: FC<Props> = memo(({items, header, onRowClickHandler, onUpdateUpdateHandler, onDeleteClickHandler}) => {
    const userId = useAppSelector(state => state.profile._id)
    const keys = Object.keys(header)
    const titles: string[] = Object.values(header)



    let actions = <div style={{display: "flex", justifyContent: "center", }}>
               <SuperButton onClick={onUpdateUpdateHandler} name={"update"} variant="secondary"/>
               <SuperButton onClick={onDeleteClickHandler} name={"delete"}/>
           </div>


    return (
        <Window>

            <table className={s.rwdTables}>
                <tr>
                    {titles.map(title => <th>{title}</th>)}
                </tr>

                {items.map(item =>
                    <tr onClick={onRowClickHandler}>
                        {keys.map((key, index) =>
                            <td data-th={titles[index]}>
                                {(key === "buttons" && item.user_id === userId) ? actions : item[key]}
                            </td>)}
                    </tr>)}
            </table>
        </Window>
    )
})