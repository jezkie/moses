import React from 'react';

import { Form } from 'semantic-ui-react';
import { genderOptions, maritalOptions } from '../const/dropdownOptions';

const PersonalDetailsForm = () => {
    return (
        <div>
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
        </div>
    )
}

export default PersonalDetailsForm;