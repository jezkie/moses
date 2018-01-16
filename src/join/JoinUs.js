import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { JOIN_MENUS } from '../const/menus'

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
                                    <Menu.Item as='a' active>{item.display}</Menu.Item>
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