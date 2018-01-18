import React, { Component } from 'react';
import { MEMBERS_MENUS } from '../const/menus'
import Content from '../component/Content';
class Members extends Component {
    render() {
        return (
            <Content 
                menus={MEMBERS_MENUS} 
                clickedMenu={this.props.clickedMenu} 
                link='/members' display='Members'
                isLogin={this.props.isLogin}
                children={this.props.children} />
        );
    }
}

export default Members;