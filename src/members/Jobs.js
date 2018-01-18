import React, { Component } from 'react';

import Members from './Members';
class Jobs extends Component {
    render() {
        return (
            <Members clickedMenu='jobs'>
                <div>

                Available Jobs
            </div>
            </Members>
        );
    }
}

export default Jobs;