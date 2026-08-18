import { HashLink } from 'react-router-hash-link';
import style from './nav.module.scss';
import { BurgerMenuProps } from './burger-menu.types';

export const BurgerMenu = ({ items, menuIsActive }: BurgerMenuProps) => {
    return (
        <div
            className={menuIsActive ? style.burgerMenu : style.burgerMenuActive}
            onClick={(e) => e.stopPropagation()}
        >
            {items.map((item) => (
                <HashLink key={item.id} smooth to={item.path}>
                    {item.value}
                </HashLink>
            ))}
        </div>
    );
};

export default BurgerMenu;
