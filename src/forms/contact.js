import React from 'react';
import { Form } from 'semantic-ui-react';

const ContactForm = () => {
    return (
        <div>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Mobile' placeholder='Mobile'></Form.Input>
                <Form.Input fluid label='Telephone' placeholder='Telephone'></Form.Input>
                <Form.Input fluid label='Email' placeholder='Email'></Form.Input>
            </Form.Group>
            <Form.TextArea label='Home Address' placeholder='Home Address' />
        </div>
    );
};

export default ContactForm;