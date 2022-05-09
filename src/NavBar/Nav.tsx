import React, {useEffect, useRef, useState} from 'react';
import style from "./Nav.module.scss";
import BurgerMenu from "./BurgerMenu";
import {burgerMenuItems} from "../Common/components/CommonData";

export function Nav() {

    const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
    const menuHandler = () => setMenuIsActive(!menuIsActive);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const onClick = (e: MouseEvent) => {
            if (menuRef.current) {
                menuRef.current.contains(e.target as Node) || setMenuIsActive(false);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);


    return (

        <div className={style.nav} ref={menuRef} >
            <BurgerMenu setMenuActive={setMenuIsActive}
                        menuIsActive={menuIsActive}
                        items={burgerMenuItems}/>
            <div className={style.menuButton} onClick={menuHandler}>

                {menuIsActive
                    ?
                    <span className="material-icons">
                        close
                    </span>
                    :
                    <span className="material-icons">
                        menu_open
                    </span>
                }
            </div>
        </div>
    );
}


