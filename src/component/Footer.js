import React from 'react';
import { Grid, Segment, Container, Header, List } from 'semantic-ui-react';

import { ABOUT_MENUS, JOIN_MENUS, MEMBERS_MENUS, EMPLOYERS_MENUS } from '../const/menus';

const populateMenus = (menus) => {
  return (
    menus.map((item, i) => {
      return (
        <List.Item as='a'>{item.display}</List.Item>
      )
    })
  )
}

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About Us' />
              <List link inverted>
                {populateMenus(ABOUT_MENUS)}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Join Us' />
              <List link inverted>
                {populateMenus(JOIN_MENUS)}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Members' />
              <List link inverted>
                {populateMenus(MEMBERS_MENUS)}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Employers' />
              <List link inverted>
                {populateMenus(EMPLOYERS_MENUS)}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;