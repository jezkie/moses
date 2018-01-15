import React from 'react';
import { Menu } from 'semantic-ui-react';
import MenuItems from './MenuItems';

const FixedMenu = () => {
    return (
        <Menu fixed='top' size='large'>
            <MenuItems/>
        </Menu>
    );
};

export default FixedMenu;