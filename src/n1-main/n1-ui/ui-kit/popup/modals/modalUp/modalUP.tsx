import React, {useEffect, useState} from 'react';
import style from "./modalUP.module.css"


export const ModalUp = () => {
    const [show, setShow] = useState(false);
    const scrollSpeed = 20
    const handleScroll = () => {
        if (window.scrollY > 300) setShow(true);
        else setShow(false);
    };

    const scroll = () => {
        const step = window.scrollY / scrollSpeed;
        let lastState = window.scrollY;

        const innerTimer = setInterval(() => {
            if (lastState < window.scrollY) clearInterval(innerTimer);
            lastState = window.scrollY;

            window.scroll(0, lastState - step);
            if (window.scrollY === 0) clearInterval(innerTimer);
        }, 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return <div>
        {show && <div onClick={scroll} className={style.modalUP}>
            <div className={style.image}>
                <img src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646212__480.png" alt="arrowUp"/>
            </div>
        </div>}
    </div>

};
