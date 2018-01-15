import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const MenuItem = () => {
    return (
        <Container>
            <Menu.Item as='a' active>About Us</Menu.Item>
            <Menu.Item as='a' active>Join Us</Menu.Item>
            <Menu.Item as='a' active>Members</Menu.Item>
            <Menu.Item as='a' active>Employers</Menu.Item>
        </Container>
    );
};

export default MenuItem;