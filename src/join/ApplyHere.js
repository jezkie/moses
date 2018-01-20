import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Step, Form, Button, Segment } from 'semantic-ui-react';

import JoinUs from './JoinUs';
import PersonalDetailsForm from '../forms/personalDetails';
import AgreementText from '../forms/agreementText';
import ContactForm from '../forms/contact'

function mapStateToProps(state) {
    return {

    };
}

const PersonalDetails = ({ stepClickHandler }) => {
    return (
        <div>
            <h2>Personal Details</h2>
            <Form>
                <PersonalDetailsForm />
                <Button floated='right' onClick={() => stepClickHandler(2)}>Next</Button>
            </Form>
        </div>
    )
}

const Contacts = ({ stepClickHandler }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <Form>
                <ContactForm />
                <Button floated='right' onClick={() => stepClickHandler(3)}>Next</Button>
            </Form>
        </div>
    )
}

const Agreement = () => {
    return (
        <div>
            <h2>Agreement</h2>
            <AgreementText />
            <Form>
                <Form.Checkbox label='I agree to the Terms and Conditions'></Form.Checkbox>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

class ApplyHere extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 1 };
        this.stepClickHandler = this.stepClickHandler.bind(this);
        this.isStepDisabled = this.isStepDisabled.bind(this);
    }

    stepClickHandler(active) {
        this.setState({
            active: active
        });
    }

    isStepDisabled(step) {
        if (step > this.state.active) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <JoinUs clickedMenu='apply'>
                <Segment style={{ padding: '4em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Step.Group attached='top'>
                                    <Step active={1 === this.state.active} onClick={() => this.stepClickHandler(1)}>
                                        <Step.Content>
                                            <Step.Title>Personal Details</Step.Title>
                                            <Step.Description>This is the first step</Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step active={2 === this.state.active} onClick={() => this.stepClickHandler(2)}>
                                        <Step.Content>
                                            <Step.Title>Contacts</Step.Title>
                                            <Step.Description>This is the second step</Step.Description>
                                        </Step.Content>

                                    </Step>
                                    <Step active={3 === this.state.active} disabled onClick={() => this.stepClickHandler(3)}>
                                        <Step.Content>
                                            <Step.Title>Agreement</Step.Title>
                                            <Step.Description>This is the third step</Step.Description>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                {this.state.active === 1 ? <PersonalDetails stepClickHandler={this.stepClickHandler} /> : this.state.active === 2 ? <Contacts stepClickHandler={this.stepClickHandler} /> : <Agreement />}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </JoinUs>
        );
    }
}

export default connect(
    mapStateToProps,
)(ApplyHere);