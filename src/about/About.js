import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container } from 'semantic-ui-react';
import { ABOUT_MENUS } from '../const/menus'

function mapStateToProps(state) {
    return {

    };
}

class About extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' size='large'>
                    <Container>
                        {
                            ABOUT_MENUS.map((item, i) => {
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

export default connect(
    mapStateToProps,
)(About);