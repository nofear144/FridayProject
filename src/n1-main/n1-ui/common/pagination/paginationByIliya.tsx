import React, {FC} from "react";
import {createPages} from "../../../utils/createPages";
import s from "../../../../n2-features/f3-cards/m1-packs-list/PacksList.module.scss";


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


