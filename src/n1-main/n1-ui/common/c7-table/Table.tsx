import React, {FC, memo} from "react";


import s from "./Table.module.scss";
import {useAppSelector} from "../../../n2-bll/store/store";
import SuperButton from "../c1-button/SuperButton";


type Props = {
    sort: string
    items: Array<{
        _id: string,
        [index: string]: number | string;
    }> // Item
    header: {
        buttons?: string,
        user_name?: string, cardsCount?: string,
        updated?: string,
        name?: string,
        answer?: string,
        question?: string,
        grade?: string
    } //   {keyOfItemProperties : "TableTitleString"}
    onDeleteClickHandler?: (id: string) => void
    onUpdateUpdateHandler?: (id: string) => void
    onRowClickHandler?: (id: string) => void
    onSortClickHandler?: (param: string) => void
    onLearnClickHandler?: (id: string) => void

}


export const Table: FC<Props> = memo(({
                                          onLearnClickHandler,
                                          sort,
                                          onSortClickHandler,
                                          items,
                                          header,
                                          onRowClickHandler,
                                          onUpdateUpdateHandler: onUpdateClickHandler,
                                          onDeleteClickHandler
                                      }) => {
    const userId = useAppSelector(state => state.profile._id)
    const keys = Object.keys(header)
    const titles: string[] = Object.values(header)
    const arrow = sort[0] === "0" ? "⬇" : "⬆"


    return (

        <table className={s.rwdTables}>
            <thead>
            <tr>
                {titles.map((title, i) => title === "Updated" || title === "Grade"
                || title === "Answer" || title === "Question" || title === "Name" || title === "Cards" || title === "Created by"
                    ? <th key={title} onClick={() => onSortClickHandler && onSortClickHandler(keys[i])}
                          className={s.sort}>{title} {sort.slice(1) === keys[i] && arrow}</th> :
                    <th key={title}>{title}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map(item =>
                <tr key={item._id} onClick={() => onRowClickHandler && onRowClickHandler(item._id)}>
                    {keys.map((key, index) =>
                        <td key={key} data-th={titles[index]}>
                            {
                                key === "buttons" ?
                                    <div style={{display: "flex", justifyContent: "center",}}>
                                        <SuperButton

                                            onClick={() => onLearnClickHandler && onLearnClickHandler(item._id)}
                                            name={"Learn"} variant="secondary"/>
                                        {item.user_id === userId && <><SuperButton
                                            onClick={() => onUpdateClickHandler && onUpdateClickHandler(item._id)}
                                            name={"update"} variant="secondary"/>
                                            <SuperButton
                                                onClick={() => onDeleteClickHandler && onDeleteClickHandler(item._id)}
                                                name={"delete"}/></>}
                                    </div> : item[key]}
                        </td>)}
                </tr>)}
            </tbody>
        </table>
    )
})