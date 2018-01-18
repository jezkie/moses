import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Breadcrumb, Grid } from 'semantic-ui-react';

const getDisplayName = (menus, clickedMenu) => {
    let display = menus.filter(obj => {
        return obj.name === clickedMenu;
    }).map((obj) => {
        return obj.display;
    })
    return display;
}

const Content = (props) => {
    return (
        <div>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Menu size='large'>
                        <Container>
                            {
                                props.menus.map((item, i) => {
                                    return (
                                        <Menu.Item as={Link} to={item.link}
                                            active={item.name === props.clickedMenu}
                                            key={item.name}>{item.display}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Container>
                    </Menu>
                </Grid.Row>
                <Grid.Row>
                    <Breadcrumb>
                        <Container>
                            <Breadcrumb.Section link as={Link} to='/'>Home</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right angle'></Breadcrumb.Divider>
                            <Breadcrumb.Section link as={Link} to={props.link}>{props.display}</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right angle'></Breadcrumb.Divider>
                            {props.isLogin ? 'Login' : <Breadcrumb.Section active>{getDisplayName(props.menus, props.clickedMenu)}</Breadcrumb.Section>}
                        </Container>
                    </Breadcrumb>
                </Grid.Row>
            </Grid>

            {props.children}
        </div>
    );
};

export default Content;