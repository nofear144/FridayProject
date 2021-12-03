import React, {FC, memo} from "react";


import s from "./Table.module.scss";
import {useAppSelector} from "../../../n2-bll/store/store";
import SuperButton from "../c1-button/SuperButton";

type ItemType = {
    _id: string,
    [index: string]: number | string;
}
type Props = {
    sort: string
    items: Array<ItemType> // Item
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
    onUpdateClickHandler?: (id: string) => void
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
                                          onUpdateClickHandler,
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
                {titles.map((title, i) => title !== ""
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
                            {key === "buttons" ?
                                <TableButtons key={item._id}
                                              item={item}
                                              onLearnClickHandler={onLearnClickHandler}
                                              onDeleteClickHandler={onDeleteClickHandler}
                                              onUpdateClickHandler={onUpdateClickHandler}/>
                                : item[key]
                            }
                        </td>)}
                </tr>)}
            </tbody>
        </table>
    )
})

type TableButtonsProps = {
    onDeleteClickHandler?: (id: string) => void
    onUpdateClickHandler?: (id: string) => void
    onLearnClickHandler?: (id: string) => void
    item: ItemType,
}



const TableButtons: FC<TableButtonsProps> = ({
                                                 onLearnClickHandler,
                                                 onUpdateClickHandler,
                                                 onDeleteClickHandler,
                                                 item
                                             }) => {
    const userId = useAppSelector(state => state.profile._id)
    return (
        <div className={s.buttons}>
            {onLearnClickHandler && <SuperButton
                onClick={() => onLearnClickHandler(item._id)}
                name={"Learn"} variant="secondary"/>}

            {item.user_id === userId &&
            <>
                <SuperButton
                    onClick={() => onUpdateClickHandler && onUpdateClickHandler(item._id)}
                    name={"update"} variant="secondary"/>
                <SuperButton
                    onClick={() => onDeleteClickHandler && onDeleteClickHandler(item._id)}
                    name={"delete"}/>
            </>}
        </div>
    );
};
