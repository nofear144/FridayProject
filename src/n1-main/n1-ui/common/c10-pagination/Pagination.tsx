import React, {FC} from "react";
import {createPages} from "../../../n4-utils/createPages";
import s from "./Pagination.module.scss";


type Props = {
    cardPacksTotalCount?: any
    cardsTotalCount?: any
    page: number
    pageCount: number
    setPage: (value: number) => void
}

export const Pagination: FC<Props> = ({
                                          cardPacksTotalCount,
                                          cardsTotalCount,
                                          page,
                                          pageCount,
                                          setPage
                                      }) => {

    let totalCount = cardPacksTotalCount | cardsTotalCount
    const pagesCount = Math.ceil(totalCount / pageCount)
    const pages: number[] = []
    createPages(pages, pagesCount, page)

    return (
        <div>
            <div className={s.pages}>
                {pages.map((el, index) =>
                    <span
                        key={index}
                        className={page === el ? s.currentPage : s.page}
                        onClick={() => setPage(el)}
                    >
                        {el}
                        </span>)}
            </div>
        </div>
    )
}


