import React from "react";
import styles from "./Paginator.module.css"
import {FC, useState} from "react";


type UserType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number | undefined
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Paginator: FC<UserType> =
    ({portionSize = 5, currentPage, pageSize, onPageChanged, totalItemsCount}) => {

        let pagesCount = Math.ceil(totalItemsCount / pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let portionCount = Math.ceil(pagesCount / portionSize)
        let [portionNumber, setPortionNumber] = useState(10)
        let leftPortionNumberPage = (portionNumber - 1) * portionSize + 1
        let rightPortionNumberPage = portionNumber * portionSize

        return <div className={styles.paginator}>

            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionNumberPage && p <= rightPortionNumberPage)
                .map((p) => {
                    return <span className={`${currentPage === p ? styles.selectedPage : styles.noSelectedPage}`}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    }