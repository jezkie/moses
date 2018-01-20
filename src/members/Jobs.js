import React, { Component } from 'react';
import { Header, Table, Button, Grid, Accordion, Menu, Segment, Form, Search, Pagination } from 'semantic-ui-react';

import Members from './Members';

class Jobs extends Component {
    
    constructor(props) {
        super(props);
        this.handleAccordionClick = this.handleAccordionClick.bind(this);
        this.state = {activeIndex: 1};
    }

    handleAccordionClick(e, titleProps) {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1: index;

        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const testLabel = '30-50k';
        return (
            <Members clickedMenu='jobs'>
                <Segment style={{ padding: '4em 0em' }} vertical>
                    <Grid textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={3} textAlign='left'>
                                <Button>Best Fit</Button>
                                <Accordion as={Menu} vertical>
                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 0}
                                            content='Position'
                                            index={0}
                                            onClick={this.handleAccordionClick}
                                        >
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 0}>Content Here</Accordion.Content>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 1}
                                            content='Salary Range'
                                            index={1}
                                            onClick={this.handleAccordionClick}
                                        >
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 1} content={
                                            <Form>
                                                <Form.Group grouped>
                                                    <Form.Radio label={testLabel} name='salary' value='30-50' />
                                                    <Form.Radio label='40-100k' name='salary' value='40-100' />
                                                    <Form.Radio label='50-200k' name='salary' value='50-200' />
                                                    <Form.Radio label='60-250k' name='salary' value='60-250' />
                                                </Form.Group>
                                            </Form>}
                                        ></Accordion.Content>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 2}
                                            content='Employment Type'
                                            index={2}
                                            onClick={this.handleAccordionClick}
                                        >
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 2}>Content Here</Accordion.Content>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 3}
                                            content='Working Hours'
                                            index={3}
                                            onClick={this.handleAccordionClick}
                                        >
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 3}>Content Here</Accordion.Content>
                                    </Menu.Item>
                                </Accordion>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Table basic='very' celled collapsing>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='5'>
                                                <Grid>
                                                    <Grid.Column floated='left'>
                                                        <Header as='h3' floated='left'>
                                                            Results
                                                        </Header>
                                                    </Grid.Column>
                                                    <Grid.Column floated='right'>
                                                        <Search floated='right'></Search>
                                                    </Grid.Column>
                                                </Grid>
                                            </Table.HeaderCell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.HeaderCell>Company</Table.HeaderCell>
                                            <Table.HeaderCell>Position</Table.HeaderCell>
                                            <Table.HeaderCell>Salary Range</Table.HeaderCell>
                                            <Table.HeaderCell>Employment Type</Table.HeaderCell>
                                            <Table.HeaderCell>Action</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Accenture Philippines</Table.Cell>
                                            <Table.Cell>Consultant</Table.Cell>
                                            <Table.Cell>30-50k</Table.Cell>
                                            <Table.Cell>Full-Time</Table.Cell>
                                            <Table.Cell><Button>Apply</Button></Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Accenture Philippines</Table.Cell>
                                            <Table.Cell>Consultant</Table.Cell>
                                            <Table.Cell>30-50k</Table.Cell>
                                            <Table.Cell>Full-Time</Table.Cell>
                                            <Table.Cell><Button>Apply</Button></Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                    <Table.Footer fullWidth>
                                            <Table.Row>
                                                <Table.HeaderCell colSpan={5}>
                                                <Grid>
                                                <Grid.Column>
                                                    <Pagination floated='right' defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3}/>
                                                </Grid.Column>
                                            </Grid>
                                                </Table.HeaderCell>
                                            </Table.Row>
                                    </Table.Footer>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Members>
        );
    }
}

export default Jobs;