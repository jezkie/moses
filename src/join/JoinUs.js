import React, { Component } from 'react';
import { Menu, Container, Breadcrumb, Grid } from 'semantic-ui-react';
import { JOIN_MENUS } from '../const/menus'
import { Link } from 'react-router-dom';

class JoinUs extends Component {
    // constructor(props) {
    //     super(props);
    // }
    getDisplayName(clickedMenu) {
        let display =
            JOIN_MENUS.map((item, i) => {
                if (item.name === clickedMenu) {
                    return item.display;
                } else {
                    return null;
                }
            })
        return display;
    }
    render() {
        return (
            <div>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Menu size='large'>
                            <Container>
                                {
                                    JOIN_MENUS.map((item, i) => {
                                        return (
                                            <Menu.Item as={Link} to={item.link}
                                                active={item.name === this.props.clickedMenu}
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
                                <Breadcrumb.Section link as={Link} to='/join'>Join Us</Breadcrumb.Section>
                                <Breadcrumb.Divider icon='right angle'></Breadcrumb.Divider>
                                <Breadcrumb.Section active>{this.getDisplayName(this.props.clickedMenu)}</Breadcrumb.Section>
                            </Container>
                        </Breadcrumb>
                    </Grid.Row>
                </Grid>

                {this.props.children}
            </div>
        );
    }
}

export default JoinUs;