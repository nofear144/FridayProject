import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../n1-main/n2-bll/store/store";
import {PATH} from "../../n1-main/n1-ui/routes/Routes";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import Window from "../f1-auth/m4-new-password/Window";
import Loader from "../f1-auth/m3-reset-password/Loader";
import SuperButton from "../../n1-main/n1-ui/common/c1-button/SuperButton";
import Range from "../../n1-main/n1-ui/common/c9-range/Range";
import SuperInputText from "../../n1-main/n1-ui/common/c2-input/SuperInputText";
import {Table} from "../../n1-main/n1-ui/common/c7-table/Table";
import {Pagination} from "../../n1-main/n1-ui/common/c10-pagination/Pagination";
import {
    getPacksTC,
    setMaxPacksCountAC,
    setMinPacksCountAC,
    setPacksNameAC, setPageAC, setSortPacksAC, setUserIdPacksAC,
} from "../../n1-main/n2-bll/reducers/packs-reducer";
import s from "./Profile.module.scss"
import {OverlayingPopup} from "../../n1-main/n1-ui/ui-kit/overlayingPopup/overlayingPopup";
import {CreateNewPack} from "../../n1-main/n1-ui/ui-kit/popup/modals/createNewPack";
import {UpdatePack} from "../../n1-main/n1-ui/ui-kit/popup/modals/updatePack";
import {DeletePack} from "../../n1-main/n1-ui/ui-kit/popup/modals/deletePack";
import {Popup} from "../../n1-main/n1-ui/ui-kit/popup/popup";
import {EditProfile} from "../../n1-main/n1-ui/ui-kit/popup/modals/editProfile";
import {PopUpForProfile} from "../../n1-main/n1-ui/ui-kit/popup/PopUpForProfile";



export function Profile() {


    const {status, isInitialize} = useAppSelector(state => state.app)
    const {
        packName,
        cardPacks,
        sortPacks,
        user_id,
        cardPacksTotalCount,
        page,
        pageCount,
        localmaxCardsCount,
        localminCardsCount
    } = useAppSelector(state => state.packs)
    const {name, avatar, _id} = useAppSelector(state => state.profile)
    const isLoggedIn = useAppSelector(state => state.login.isLogged)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [localMaxValue, setLocalMaxValue] = useState(0)
    const [localMinValue, setLocalMinValue] = useState(103)
    const [searchValue, setSearchValue] = useState("")
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const [showEditProfileActive, setShowEditProfileActive] = useState(false);
    const [packId, setPackId] = useState("")
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const onClickShowCreate = () => setShowCreatePopup(true)
    const onClickShowEdit = ()=> setShowEditProfileActive(true)
    const onClickHideDelete = () => setShowDeletePopup(false)
    const onClickHideEdit = () => setShowEditProfileActive(false)
    const onClickHideUpdate = () => setShowUpdatePopup(false)
    const onClickHideCreate = () => setShowCreatePopup(false)

    useEffect(() => {
        dispatch(setUserIdPacksAC(_id))
        dispatch(getPacksTC())
    }, [packName, localmaxCardsCount, localminCardsCount, sortPacks, page, pageCount, user_id])

    useEffect(() => {
        let timer = setTimeout(() => dispatch(setPacksNameAC(searchValue)), 500)
        return () => clearTimeout(timer)
    }, [searchValue])
    useEffect(() => {
        let rangeTimer = setTimeout(() => {
            dispatch(setMaxPacksCountAC(localMaxValue))
            dispatch(setMinPacksCountAC(localMinValue))
        }, 500)
        return () => clearTimeout(rangeTimer)
    }, [localMaxValue, localMinValue])

    const routeToCard = (id: string) => {
        navigate(`${PATH.CARDS_LIST}/${id}`)
    }
    const deletePack = (id: string) => {
        setShowDeletePopup(true)
        setPackId(id)
    }
    const updatePack = (id: string,) => {
        setShowUpdatePopup(true)
        setPackId(id)
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


    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            <Window>
                {status === "loading" && <Loader/>}
                <div className={s.container}>
                    <div className={s.sideBar}>
                        <div className={s.profileBar}>
                            <div>
                                <img
                                    className={s.imgProfile}
                                    src={avatar ? avatar : "https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png"}
                                    alt={"Avatar"}/>
                            </div>
                            <span><h2>{name}</h2></span>
                            <span><h3 className={s.front}>Front-end-developer</h3></span>
                            <NavLink className={s.editProfile} to={"#"} onClick={onClickShowEdit}> edit profile</NavLink>
                             <PopUpForProfile isOpen={showEditProfileActive}>
                                 <EditProfile onCLoseClick={onClickHideEdit} />
                             </PopUpForProfile>
                        </div>
                        <label className={s.label}><h3>Cards in a pack</h3>
                            <Range min={0} max={103} onChange={onRangeChange}/>
                        </label>
                    </div>
                    <div className={s.table}>
                        <div className={s.tableContainer}>
                            <h2 className={s.DaNuNa}>Packs list</h2>
                            <div className={s.header}>
                                <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
                                <SuperButton name={"Add Pack"} onClick={onClickShowCreate}/>
                            </div>
                            <OverlayingPopup
                                isOpened={showCreatePopup}
                                onClose={onClickHideCreate}
                                message="Create a new card">
                                <CreateNewPack onClose={onClickHideCreate}/>
                            </OverlayingPopup>
                            <OverlayingPopup
                                isOpened={showUpdatePopup}
                                onClose={onClickHideUpdate}
                                message="Update a pack">
                                <UpdatePack packId={packId} onClose={onClickHideUpdate}/>
                            </OverlayingPopup>
                            <OverlayingPopup
                                isOpened={showDeletePopup}
                                onClose={onClickHideDelete}
                                message="Do you want to delete this pack ?">
                                <DeletePack packId={packId} onClose={onClickHideDelete}/>
                            </OverlayingPopup>

                            <Table
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
                </div>
            </ Window>
        </div>
    )
}