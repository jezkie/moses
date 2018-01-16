import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { JOIN_MENUS } from '../const/menus'
import { Link } from 'react-router-dom';

class JoinUs extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Menu fixed='top' size='large'>
                    <Container>
                        {
                            JOIN_MENUS.map((item, i) => {
                                return (
                                    <Menu.Item as={ Link } to={item.link} 
                                        active={item.name === this.props.clickedMenu} 
                                        key={item.name}>{item.display}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Container>
                </Menu>
                {this.props.children}
            </div>
        );
    }
}

export default JoinUs;