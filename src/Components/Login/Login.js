import { Button, Form } from 'semantic-ui-react'
import React from 'react';
import '../../styleSheets/css/layout.scss';

const Login = () => (
  <div className="row justify-content-center">
    <div className="col-md-4">
      <div className="card logInForm">
        <div className="card-body">
          <h1 className="text-center">LOGIN</h1>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name'/>
              <Form.Input fluid label='Last name' placeholder='Last name'/>
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions'/>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;

