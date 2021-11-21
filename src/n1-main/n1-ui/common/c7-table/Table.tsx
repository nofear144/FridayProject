import React, {FC, memo} from "react";


import s from "./Table.module.scss";
import Window from "../../../../n2-features/f1-auth/m4-new-password/Window";




const cards = [
    {
        cardsCount: 0,
        name: "11",
        private: false,
        updated: "2020-07-10T11:37:25.358Z",
        user_name: "gavrilenko7732@gmail.com",
    },
    {
        cardsCount: 2,
        name: "df",
        private: false,
        updated: "2020-07-10T11:37:25.358Z",
        user_name: "gav",
    },
    {
        cardsCount: 5,
        name: "sddfsdfsdff",
        private: false,
        updated: "2020-07-10T11:37:25.358Z",
        user_name: "gasdfsdfsv",
        user_id: "hjghjghjgh"
    }
]

type Props = {
    items: any[]
    header: {}
}


export const Table:FC<Props> = memo(({items, header }) => {

    const keys = Object.keys(header)
    const values: string[] = Object.values(header)
    type headerType = typeof header

    return (
        <Window>

            <table className={s.rwdTables}>
                <tr>
                    {values.map(el => <th>{el}</th>)}
                    {}
                </tr>

                {items.map(card =>
                    <tr>
                        {keys.map((el, index) =>
                            <td data-th={values[index]}>
                                {card[el as keyof headerType]}
                            </td>)}
                    </tr>)}
            </table>
        </Window>
    )
})