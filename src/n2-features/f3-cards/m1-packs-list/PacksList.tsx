import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import {Navigate, useNavigate} from "react-router-dom";
import {
    addPackTC,
    deletePackTC,
    getPacksTC, setMaxPacksCountAC, setMinPacksCountAC, setPacksNameAC, setPageAC,
    setSortPacksAC,
    setUserIdPacksAC,
    updatePackTC
} from "../../../n1-main/n2-bll/reducers/packs-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import s from "./PacksList.module.scss"
import {Pagination} from "../../../n1-main/n1-ui/common/c10-pagination/Pagination";
import Range from "../../../n1-main/n1-ui/common/c9-range/Range";


export const PacksList = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);
    const cardPacks = useAppSelector(state => state.packs.cardPacks);
    const packName = useAppSelector(state => state.packs.packName);
    const sortPacks = useAppSelector(state => state.packs.sortPacks);
    const isInitialize = useAppSelector(state => state.app.isInitialize);
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
    const _id = useAppSelector(state => state.profile._id);
    const user_id = useAppSelector(state => state.packs.user_id);
    const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount);
    const page = useAppSelector(state => state.packs.page);
    const pageCount = useAppSelector(state => state.packs.pageCount);
    const localmaxCardsCount = useAppSelector(state => state.packs.localmaxCardsCount);
    const localminCardsCount = useAppSelector(state => state.packs.localminCardsCount);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [localMaxValue, setLocalMaxValue] = useState(0)
    const [localMinValue, setLocalMinValue] = useState(103)


    const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [])
    useEffect(() => {
        dispatch(getPacksTC())
    }, [packName, localmaxCardsCount, localminCardsCount, sortPacks, page, pageCount, user_id])
    useEffect(() => {
        let timer = setTimeout(() => dispatch(setPacksNameAC(searchValue)), 500)
        return () => clearTimeout(timer)
    }, [searchValue])

    useEffect(() => {
        let timer1 = setTimeout(() => {
            dispatch(setMaxPacksCountAC(localMaxValue))
            dispatch(setMinPacksCountAC(localMinValue))
        }, 1500)
        return () => clearTimeout(timer1)
    }, [localMaxValue, localMinValue])


    const routeToCard = (id: string) => {
        navigate(`${PATH.CARDS_LIST}/${id}`)
    }
    const myPack = () => {
        dispatch(setUserIdPacksAC(_id))
    }
    const allPack = () => {
        dispatch(setUserIdPacksAC(""))
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id))
    }
    const updatePack = (id: string,) => {
        dispatch(updatePackTC(id, "DasAuto"))
    }
    const addPack = () => {
        dispatch(addPackTC("TriMushketera", false))
    }
    const sortPack = (param: string) => {
        sortPacks[0] === "1"
            ? dispatch(setSortPacksAC(`0${param}`))
            : dispatch(setSortPacksAC(`1${param}`))
    }
    const setPage = (value: number) => {
        dispatch(setPageAC(value))
    }
    const onRangeChange = (min: number, max: number) => {
        setLocalMaxValue(max)
        setLocalMinValue(min)
    }
    const onLearnClick = (id: string) => {
        navigate(`${PATH.LEARN_CARD}/${id}`)
    }

    if (!isInitialize) {
        return <div className={s.loader}><Spinner/></div>
    }
    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }


    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div className={s.container}>
                <div className={s.sideBar}>
                    <div className={s.label}><h3>Show cards packs:</h3>
                        <div className={s.toggle}>
                            <SuperButton className={s.buttons} name={"My"} onClick={myPack}/>
                            <SuperButton className={s.buttons} name={"All"} onClick={allPack}/>
                        </div>
                    </div>
                    <label className={s.label}><h3>Cards in a pack</h3>
                        <Range min={0} max={103} onChange={onRangeChange}/>
                    </label>
                </div>

                <div className={s.tableContainer}>
                    <h2 className={s.DaNuNa}>Packs list</h2>
                    <div className={s.header}>
                        <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
                        <SuperButton name={"Add Pack"} onClick={addPack}/>
                    </div>


                    <Table
                        onLearnClickHandler={onLearnClick}
                        sort={sortPacks}
                        onRowClickHandler={routeToCard}
                        onSortClickHandler={sortPack}
                        onUpdateUpdateHandler={updatePack}
                        onDeleteClickHandler={deletePack}
                        items={cardPacks} header={{
                        name: "Name",
                        cardsCount: "Cards",
                        updated: "Updated",
                        user_name: "Created by",
                        buttons: ""
                    }}/>
                    <Pagination cardPacksTotalCount={cardPacksTotalCount} page={page} pageCount={pageCount}
                                setPage={setPage}/>
                </div>
            </div>

        </ Window>
    )
})