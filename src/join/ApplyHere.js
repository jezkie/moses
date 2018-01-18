import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Step, Form, Button, Segment } from 'semantic-ui-react';

import JoinUs from './JoinUs';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' }
]
const maritalOptions = [
    { key: 's', text: 'Single', value: 'S' },
    { key: 'm', text: 'Married', value: 'M' }
]
function mapStateToProps(state) {
    return {

    };
}

const PersonalDetails = ({ stepClickHandler }) => {
    return (
        <div>
            <h2>Personal Details</h2>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First Name' placeholder='First Name'></Form.Input>
                    <Form.Input fluid label='Middle Name' placeholder='Middle Name'></Form.Input>
                    <Form.Input fluid label='Last Name' placeholder='Last Name'></Form.Input>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Date of Birth' />
                    <Form.Input fluid label='Age' />
                    <Form.Select fluid label='Gender' options={genderOptions} placeholder='Gender' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select fluid label='Marital Status' options={maritalOptions} placeholder='Marital Status' />
                    <Form.Input fluid label='ID No' placeholder='ÍD No' />
                </Form.Group>
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
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Mobile' placeholder='Mobile'></Form.Input>
                    <Form.Input fluid label='Telephone' placeholder='Telephone'></Form.Input>
                    <Form.Input fluid label='Email' placeholder='Email'></Form.Input>
                </Form.Group>
                <Form.TextArea label='Home Address' placeholder='Home Address' />
                <Button floated='right' onClick={() => stepClickHandler(3)}>Next</Button>
            </Form>
        </div>
    )
}

const Agreement = () => {
    return (
        <div>
            <h2>Agreement</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
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
                                    <Step active={1 === this.state.active} onClick={() => this.stepClickHandler(1)} disabled={this.isStepDisabled(1)}>
                                        <Step.Content>
                                            <Step.Title>Personal Details</Step.Title>
                                            <Step.Description>This is the first step</Step.Description>
                                        </Step.Content>
                                    </Step>
                                    <Step active={2 === this.state.active} onClick={() => this.stepClickHandler(2)} disabled={this.isStepDisabled(1)}>
                                        <Step.Content>
                                            <Step.Title>Contacts</Step.Title>
                                            <Step.Description>This is the second step</Step.Description>
                                        </Step.Content>

                                    </Step>
                                    <Step active={3 === this.state.active} disabled onClick={() => this.stepClickHandler(3)} disabled={this.isStepDisabled(3)}>
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