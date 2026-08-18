import { Dispatch, SetStateAction } from 'react';
import { ItemType } from '@/common/data/common-data';

export type BurgerMenuProps = {
    items: Array<ItemType>;
    setMenuActive: Dispatch<SetStateAction<boolean>>;
    menuIsActive: boolean;
};
