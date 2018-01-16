import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Menu, Grid, Visibility, Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

import FixedMenu from '../component/FixedMenu';
import MenuItems from '../component/MenuItems';
import defaultImg from '../assets/image_preview.jpg';

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
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
            { visible ? <FixedMenu /> : null }
    
            <Visibility
              onBottomPassed={this.showFixedMenu}
              onBottomVisible={this.hideFixedMenu}
              once={false}>
    
              <Segment
                inverted
                style={{ minHeight: 200, padding: '1em 0em' }}
                vertical>
                
                  <Menu inverted secondary size='large'>
                    <MenuItems />
                  </Menu>
                
                <Container text>
                  <Header
                    as='h1'
                    content='PeopleFocus'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}/>
                  <Header
                    as='h2'
                    content='Do whatever you want when you want'
                    inverted
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}/>
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
                      src={defaultImg}>
                    </Image>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        );
      }
}

export default connect(
    mapStateToProps,
)(Home);