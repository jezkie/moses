import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

import { MAIN_MENUS } from '../const/menus';

const MenuItem = () => {
    return (
        <Container>
            {MAIN_MENUS.map((item, i) => {
                return (
                    <Menu.Item as='a'>{item.display}</Menu.Item>
                )
            })}
        </Container>
    );
};

export default MenuItem;