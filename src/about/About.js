import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container } from 'semantic-ui-react';

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
                        <Menu.Item as='a' active>PeopleFocus</Menu.Item>
                        <Menu.Item as='a' active>Philosophy</Menu.Item>
                        <Menu.Item as='a' active>Services</Menu.Item>
                        <Menu.Item as='a' active>Location/ Offices</Menu.Item>
                        <Menu.Item as='a' active>Blog</Menu.Item>
                    </Container>
                </Menu>
                { this.props.children }              
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(About);