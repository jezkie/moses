import React, { Component } from 'react';
import { connect } from 'react-redux';
import Members from './Members';
import { Grid, Form, Button, Segment, Header } from 'semantic-ui-react';
import { fakeAuth } from './fakeAuth';
import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
    return {

    };
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { redirectToReferer: false }
    }
    login(){
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferer: true});
        })
    }
    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}}
        const { redirectToReferer } = this.state;
        if (redirectToReferer) {
            return (<Redirect to={from}/>)
        }

        return (
            <Members clickedMenu='members' isLogin='true'>
                <Segment style={{ padding: '4em 0em' }} vertical>
                    <Grid textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'>
                        <Grid.Column
                            style={{ maxWidth: 700 }}>
                            <Header as='h2' textAlign='center'>
                                Member's Portal
                            </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input fluid icon='user' iconPosition='left' placeholder='User ID'></Form.Input>
                                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'></Form.Input>
                                    <Button onClick={()=>this.login()}>Login</Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Members>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);