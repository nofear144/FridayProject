import React, {FC, memo} from "react";


import s from "./Table.module.scss";
import {useAppSelector} from "../../../n2-bll/store/store";
import SuperButton from "../c1-button/SuperButton";


type Props = {
    sort: string
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
    onSortClickHandler?: (param: string) => void
}


export const Table: FC<Props> = memo(({
                                          sort,
                                          onSortClickHandler,
                                          items,
                                          header,
                                          onRowClickHandler,
                                          onUpdateUpdateHandler,
                                          onDeleteClickHandler
                                      }) => {
    const userId = useAppSelector(state => state.profile._id)
    const keys = Object.keys(header)
    const titles: string[] = Object.values(header)
    const arrow = sort[0] === "0" ? "⬇" : "⬆"
    const regExp = new RegExp(`${sort.slice(1)}`, "i")


    return (

        <table className={s.rwdTables}>
            <thead>
            <tr>
                {titles.map((title, i) => title === "Updated" || title === "Grade"
                || title === "Answer" || title === "Question" || title === "Name" || title === "Cards" || title === "Created by"
                    ? <th key={title} onClick={() => onSortClickHandler && onSortClickHandler(keys[i])}
                          className={s.sort}>{title} {regExp.test(keys[i]) && arrow}</th> : <th key={title}>{title}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map(item =>
                <tr onClick={() => onRowClickHandler && onRowClickHandler(item._id)}>
                    {keys.map((key, index) =>
                        <td key={key} data-th={titles[index]}>
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
            </tbody>
        </table>
    )
})