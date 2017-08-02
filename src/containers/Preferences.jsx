import React from 'react';
import Form from '../components/Form.jsx';
import FormHeader from '../components/FormHeader.jsx';
import SubForm from '../components/SubForm.jsx';
import FormItem from '../components/FormItem.jsx';
import FormItemHint from '../components/FormItemHint.jsx';

class Preferences extends React.Component {
  render() {
    return (
      <Form>
        <FormHeader>Edit Preferences</FormHeader>
        <SubForm title='Localization'></SubForm>
        <SubForm title='Privacy'>
          <FormItem title='Recently viewed'>
            <FormItemHint>Manage your Fancy browsing history</FormItemHint>
          </FormItem>
        </SubForm>
        <SubForm title='Content'></SubForm>
        <SubForm></SubForm>
      </Form>
    );
  }
}

export default Preferences;
