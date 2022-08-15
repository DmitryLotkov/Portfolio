import React, {Dispatch, SetStateAction} from 'react';
import style from "./Nav.module.scss";
import {HashLink} from "react-router-hash-link";
import {itemsType} from "../Common/components/CommonData";


type burgerMenuPropsType = {

    items: Array<itemsType>
    setMenuActive: Dispatch<SetStateAction<boolean>>
    menuIsActive: boolean
}
export const BurgerMenu = ({items, menuIsActive}: burgerMenuPropsType) => {

    return (
        <div className={menuIsActive ? style.burgerMenu : style.burgerMenuActive } onClick={e => e.stopPropagation() }>
            {items.map(item =>
                <HashLink key={item.id} smooth to={item.path}>
                    {item.value}
                </HashLink>)}
        </div>
    );
};

export default BurgerMenu;