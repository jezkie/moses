import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import JoinUs from './JoinUs';

const BenefitsOfMembers = () => {
    return (
        <JoinUs>
            <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>Benefits Of a Members</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                    </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </JoinUs>
    );
};

export default BenefitsOfMembers;