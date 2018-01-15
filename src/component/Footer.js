import React from 'react';
import { Grid, Segment, Container, Header, List } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Segment inverted vertical style={{ padding: '5em 0em'}}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About Us'/>
                  <List link inverted>
                    <List.Item as='a'>PeopleFocus, At a glance</List.Item>
                    <List.Item as='a'>Philosophy</List.Item>
                    <List.Item as='a'>Services</List.Item>
                    <List.Item as='a'>Location</List.Item>
                    <List.Item as='a'>Blog</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Join Us'/>
                  <List link inverted>
                    <List.Item as='a'>Benefits of a Member</List.Item>
                    <List.Item as='a'>Member Qualifications</List.Item>
                    <List.Item as='a'>Requirements</List.Item>
                    <List.Item as='a'>Apply Here</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Members'/>
                  <List link inverted>
                    <List.Item as='a'>Jobs Available / Best Fit</List.Item>
                    <List.Item as='a'>Update Profile</List.Item>
                    <List.Item as='a'>Chat / Social Space</List.Item>
                    <List.Item as='a'>Development Programs</List.Item>
                    <List.Item as='a'>Benefits Available</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Employers'/>
                  <List link inverted>
                    <List.Item as='a'>Why work with PeopleFocus</List.Item>
                    <List.Item as='a'>Resource Available / Best Fit</List.Item>
                    <List.Item as='a'>Resource Feedback</List.Item>
                    <List.Item as='a'>Resource Replacement</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
    );
};

export default Footer;