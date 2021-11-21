import React, { memo} from "react";


import s from "./Table.module.scss";



export const Table = memo(() => {

    return (
        <table className={s.rwdTables}>
            <tr>
                <th>Movie Title</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Gross</th>
            </tr>
            <tr>
                <td data-th="Movie Title">Star Wars</td>
                <td data-th="Genre">Adventure, Sci-fi</td>
                <td data-th="Year">1977</td>
                <td data-th="Gross">$460,935,665</td>
            </tr>
            <tr>
                <td data-th="Movie Title">Howard The Duck</td>
                <td data-th="Genre">"Comedy"</td>
                <td data-th="Year">1986</td>
                <td data-th="Gross">$16,295,774</td>
            </tr>
            <tr>
                <td data-th="Movie Title">American Graffiti</td>
                <td data-th="Genre">Comedy, Drama</td>
                <td data-th="Year">1973</td>
                <td data-th="Gross">$115,000,000</td>
            </tr>
        </table>
    )
})