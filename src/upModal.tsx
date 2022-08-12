import React, {useEffect, useState} from 'react';
import {Modal} from "./Modal";
import arrow from "../src/Images/up-arrow.svg"

interface IModalUp {
    speed?: number // 1 - fast; 100 - slow
}

export const ModalUp: React.FC<IModalUp> = ({speed = 10}) => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) setShow(true);
        else setShow(false);
    };

    const scroll = () => {
        const step = window.scrollY / speed;
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

    return (
        <>
            <Modal
                enableBackground={false}
                width={50}
                height={50}
                modalOnClick={scroll}
                modalStyle={{
                    top: '80vh',
                    left: '20px',
                }}

                show={show}
            >
                <img src={arrow} alt={"upModalArrow"}/>

            </Modal>
        </>
    );
};

