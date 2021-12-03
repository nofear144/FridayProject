import s from "../../../../../n2-features/f2-profile/Profile.module.scss";
import SuperInputText from "../../../common/c2-input/SuperInputText";
import SuperButton from "../../../common/c1-button/SuperButton";
import React, {FC} from "react";
import {useAppSelector} from "../../../../n2-bll/store/store";
import style from "../popup.module.css";

export type PortalEditProfileType = {
    onCLoseClick: () => void
}


export const EditProfile: FC<PortalEditProfileType> = ({onCLoseClick}) => {

    const avatar = useAppSelector(state => state.profile.avatar)



    return <div className={style.container}>
        <h2>Personal Information</h2>
        <div className={s.ContainerPhoto}>
            <img
                className={s.imgProfile}
                src={avatar ? avatar : "https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png"}
                alt={"Avatar"}/>
            <div className={s.svgPosition}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15.5" fill="#2D2E46" fill-opacity="0.5" stroke="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.9999 18.8444C17.3744 18.8444 18.4888 17.7301 18.4888 16.3555C18.4888 14.9809 17.3744 13.8666 15.9999 13.8666C14.6253 13.8666 13.511 14.9809 13.511 16.3555C13.511 17.7301 14.6253 18.8444 15.9999 18.8444ZM15.9999 18.2222C17.0308 18.2222 17.8665 17.3865 17.8665 16.3555C17.8665 15.3246 17.0308 14.4889 15.9999 14.4889C14.9689 14.4889 14.1332 15.3246 14.1332 16.3555C14.1332 17.3865 14.9689 18.2222 15.9999 18.2222Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.9967 11.3777C18.2511 10.6923 17.5641 10.1333 15.9778 10.1333C14.3915 10.1333 13.7045 10.6923 12.9589 11.3777H10.3999C9.36894 11.3777 8.5332 12.2135 8.5332 13.2444V19.4666C8.5332 20.4976 9.36894 21.3333 10.3999 21.3333H21.5999C22.6308 21.3333 23.4665 20.4976 23.4665 19.4666V13.2444C23.4665 12.2135 22.6308 11.3777 21.5999 11.3777H18.9967ZM18.7534 12L18.6881 11.9396C18.626 11.8822 18.5658 11.8266 18.5085 11.7744C18.2745 11.5611 18.0668 11.3838 17.8428 11.2366C17.4205 10.959 16.892 10.7555 15.9778 10.7555C15.0636 10.7555 14.5351 10.959 14.1128 11.2366C13.8888 11.3838 13.6811 11.5611 13.4471 11.7744C13.3897 11.8267 13.3298 11.8821 13.2675 11.9396L13.2022 12H10.3999C9.71258 12 9.15543 12.5571 9.15543 13.2444V19.4666C9.15543 20.1539 9.71258 20.7111 10.3999 20.7111H21.5999C22.2872 20.7111 22.8443 20.1539 22.8443 19.4666V13.2444C22.8443 12.5571 22.2872 12 21.5999 12H18.7534Z"
                          fill="white"/>
                </svg>
            </div>
        </div>
        <div >
            <SuperInputText name={"Nickname"}/>
        </div>
        <div className={s.buttons}>
            <SuperButton name={"Cancel"} onClick={onCLoseClick}/>
            <SuperButton name={"Save"}/>
        </div>


    </div>
}
