import { Dispatch, SetStateAction } from 'react';
import { ItemType } from '@/shared/config';

export type BurgerMenuProps = {
    items: Array<ItemType>;
    setMenuActive: Dispatch<SetStateAction<boolean>>;
    menuIsActive: boolean;
};
