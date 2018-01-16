import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { MAIN_MENUS } from '../const/menus';

const MenuItem = () => {
    return (
        <Container>
            {MAIN_MENUS.map((item, i) => {
                return (
                    <Menu.Item as={Link} to={item.link}>{item.display}</Menu.Item>
                )
            })}
        </Container>
    );
};

export default MenuItem;