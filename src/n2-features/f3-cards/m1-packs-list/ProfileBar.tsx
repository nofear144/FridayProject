import s from "./ProfileBar.module.scss";
import {NavLink} from "react-router-dom";
import {Popup} from "../../../n1-main/n1-ui/ui-kit/popup/popup";
import {EditProfile} from "../../../n1-main/n1-ui/ui-kit/popup/modals/editProfile";
import React, {DetailedHTMLProps, memo, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";


export const ProfileBar = memo(() => {

    const {name, avatar, _id} = useAppSelector(state => state.profile)

    console.log(name)

    const [showEditProfileActive, setShowEditProfileActive] = useState(false);
    const onClickShowEdit = () => setShowEditProfileActive(true)
    const onClickHideEdit = () => setShowEditProfileActive(false)

    return (
        <div className={s.profileBar}>
            <div>
                <img
                    className={s.imgProfile}
                    src={avatar ? avatar : "https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png"}
                    alt={"Avatar"}/>
            </div>
            <div className={s.profileBody}>
                <h2>{name}</h2>
                <span><h3 className={s.front}>Front-end-developer</h3></span>
                <NavLink className={s.editProfile} to={"#"} onClick={onClickShowEdit}> edit profile</NavLink>
                <Popup isOpened={showEditProfileActive} onClose={onClickHideEdit}>
                    <EditProfile onCLoseClick={onClickHideEdit}/>
                </Popup>
            </div>
        </div>
    )
})
