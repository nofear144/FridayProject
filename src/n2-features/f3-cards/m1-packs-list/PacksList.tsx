import React, { memo, useEffect} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import {useNavigate} from "react-router-dom";
import {getPacksTC} from "../../../n1-main/n2-bll/reducers/packs-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";


export const PacksList = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);
    const cardPacks=useAppSelector(state => state.packs.cardPacks);
    const packName=useAppSelector(state => state.packs.packName);
    const minCardsCount=useAppSelector(state => state.packs.minCardsCount);
    const maxCardsCount=useAppSelector(state => state.packs.maxCardsCount);
    const sortPacks=useAppSelector(state => state.packs.sortPacks);
    const page=useAppSelector(state => state.packs.page);
    const pageCount=useAppSelector(state => state.packs.pageCount);

    const navigate = useNavigate()
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getPacksTC())
    }, [packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount])

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div  >
              <Table items={cardPacks} header={{name:"Name",cardsCount:"Cards",updated:"Last",user_name:"Created by",action:"Actions"}}/>
            </div>
        </ Window>
    )
})