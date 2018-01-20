import React, { Component } from 'react';
import { connect } from 'react-redux';
import Members from './Members';
import { Accordion, Menu, Grid, Segment, Card, Image, Label, Icon, Form, Button } from 'semantic-ui-react';
import defaultAvatar from '../assets/avatar.png';
import PersonalDetailsForm from '../forms/personalDetails';
import ContactForm from '../forms/contact';

function mapStateToProps(state) {
    return {
    };
}

class Profile extends Component {
    render() {
        return (
            <Members clickedMenu='update'>
                <Segment style={{ padding: '4em 0em' }} vertical>
                    <Grid textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={10} textAlign='left'>
                                <Accordion as={Menu} vertical fluid styled>
                                    <Menu.Item>
                                        <Accordion.Title
                                            active
                                            content='Personal Details'
                                            index={0}
                                        ></Accordion.Title>
                                        <Accordion.Content
                                            active
                                            content={
                                                <Grid columns={2} celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={4}>
                                                            <Card>
                                                                <Image bordered size='large' src={defaultAvatar} />
                                                                <Card.Content>
                                                                    <Card.Header>
                                                                        Jescy Querimit
                                                                    </Card.Header>
                                                                    <Card.Meta>
                                                                        <Label>
                                                                            <Icon name='mobile' /> +63 xxxxxxxxxx
                                                                        </Label>
                                                                        <Label>
                                                                            <Icon name='mail' /> jescy.querimit@gmail.com
                                                                        </Label>
                                                                        <Label>
                                                                            <Icon name='home' /> Blk XX, XYZ Drive Unit XX, Singapore
                                                                        </Label>
                                                                    </Card.Meta>
                                                                </Card.Content>
                                                                <Card.Content extra>
                                                                    <a>
                                                                        <Icon name='sign out' /> Sign Out
                                                                    </a>
                                                                </Card.Content>
                                                            </Card>
                                                        </Grid.Column>
                                                        <Grid.Column>
                                                            <Form>
                                                                <PersonalDetailsForm/>
                                                                <ContactForm/>
                                                            </Form>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            }></Accordion.Content>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Accordion.Title
                                            content='Family Members'
                                            index={0}
                                        ></Accordion.Title>
                                        <Accordion.Content
                                            content={
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            Col 1
                                                    </Grid.Column>
                                                        <Grid.Column>
                                                            Col 2
                                                    </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            }></Accordion.Content>
                                    </Menu.Item>
                                </Accordion></Grid.Column>
                        </Grid.Row>
                        <Button>Save Profile</Button>
                    </Grid>
                    
                </Segment>
            </Members>
        );
    }
}

export default connect(
    mapStateToProps,
)(Profile);