import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ABOUT_MENUS } from '../const/menus';

import Content from '../component/Content';

function mapStateToProps(state) {
    return {

    };
}

class About extends Component {
    render() {
        return (
            <Content menus={ABOUT_MENUS} 
                clickedMenu={this.props.clickedMenu} 
                link='/about' 
                display='About' 
                children={this.props.children} />
        );
    }
}

export default connect(
    mapStateToProps,
)(About);