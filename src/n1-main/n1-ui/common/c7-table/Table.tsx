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
    onDeleteClickHandler?: (id: string) => void
    onUpdateUpdateHandler?: (id: string) => void
    onRowClickHandler?: (id: string) => void
    onSortClickHandler?: () => void
}


export const Table: FC<Props> = memo(({
                                          onSortClickHandler,
                                          items,
                                          header,
                                          onRowClickHandler,
                                          onUpdateUpdateHandler,
                                          onDeleteClickHandler
                                      }) => {
    const userId = useAppSelector(state => state.profile._id)
    const updateSort = useAppSelector(state => state.cards.sortCards)
    const keys = Object.keys(header)
    const titles: string[] = Object.values(header)
    const arrow = updateSort === "0updated" ? "⬇" : "⬆"


    return (
        <Window>

            <table className={s.rwdTables}>
                <tr>
                    {titles.map(title => title === "Updated" || title === "Grade"
                    || title === "Answer" || title === "Question"
                        ? <th onClick={() => onSortClickHandler && onSortClickHandler()}
                              className={s.sort}>{title} {arrow}</th> : <th>{title}</th>)}
                </tr>

                {items.map(item =>
                    <tr onClick={() => onRowClickHandler && onRowClickHandler(item._id)}>
                        {keys.map((key, index) =>
                            <td data-th={titles[index]}>
                                {key === "buttons" && item.user_id === userId ?
                                    <div style={{display: "flex", justifyContent: "center",}}>
                                        <SuperButton
                                            onClick={() => onUpdateUpdateHandler && onUpdateUpdateHandler(item._id)}
                                            name={"update"} variant="secondary"/>
                                        <SuperButton
                                            onClick={() => onDeleteClickHandler && onDeleteClickHandler(item._id)}
                                            name={"delete"}/>
                                    </div> : item[key]}
                            </td>)}
                    </tr>)}
            </table>
        </Window>
    )
})