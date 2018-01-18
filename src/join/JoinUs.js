import React, { Component } from 'react';
import { JOIN_MENUS } from '../const/menus'
import Content from '../component/Content';

class JoinUs extends Component {
    render() {
        return (
            <Content 
                menus={JOIN_MENUS} 
                clickedMenu={this.props.clickedMenu} 
                link='/join' display='Join Us' 
                children={this.props.children} />
            
        );
    }
}

export default JoinUs;