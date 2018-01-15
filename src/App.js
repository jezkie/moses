import React, { Component } from 'react';
import { Menu, Grid, Visibility, Segment, Container, Header, Image, Button, Icon, List } from 'semantic-ui-react';

import FixedMenu from './component/FixedMenu';
import defaultImg from './assets/image_preview.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  hideFixedMenu = () => {
    this.setState({ visible: false });
  }

  showFixedMenu = () => {
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>

          <Segment
            inverted
            style={{ minHeight: 200, padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted secondary size='large'>
                <Menu.Item as='a' active>About Us</Menu.Item>
                <Menu.Item as='a' active>Join Us</Menu.Item>
                <Menu.Item as='a' active>Members</Menu.Item>
                <Menu.Item as='a' active>Employers</Menu.Item>
              </Menu>
            </Container>
            <Container text>
              <Header
                as='h1'
                content='PeopleFocus'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              ></Header>
              <Header
                as='h2'
                content='Do whatever you want when you want'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              ></Header>
              <Button primary size='huge'>
                Register Now
                <Icon name='right arrow'/>
              </Button>
            </Container>
          </Segment>
        </Visibility>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>What is Lorem Ipsum</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised 
                  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src={defaultImg}
                ></Image>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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
      </div>
    );
  }
}

export default App;
