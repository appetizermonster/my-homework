import React from 'react';
import ReactLoading from 'react-loading';

import Form from '../components/Form.jsx';
import FormHeader from '../components/FormHeader.jsx';
import SubForm from '../components/SubForm.jsx';
import FormItem from '../components/FormItem.jsx';
import FormItemHint from '../components/FormItemHint.jsx';
import FormSelect from '../components/FormSelect.jsx';
import FormRadio from '../components/FormRadio.jsx';
import FormButton from '../components/FormButton.jsx';

import data from './preferences-data.js';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({fetched: true}), 3000);
  }
  render() {
    if (!this.state.fetched)
      return this.renderLoading();
    return this.renderForm();
  }
  renderLoading() {
    return (
      <Form>
        <div style={{
          padding: '20px'
        }}>
          <center>
            <ReactLoading
              type='spinningBubbles'
              color='#4b4f5d'
              width='32px'
              height='32px'/>
          </center>
        </div>
      </Form>
    );
  }
  renderForm() {
    return (
      <Form>
        <FormHeader>Edit Preferences</FormHeader>
        <SubForm title='Localization'>
          <FormItem title='Language'>
            <FormSelect items={data.languages}/>
            <FormItemHint>
              Interested in helping translate Fancy?&nbsp;
              <a href='#'>Let us know</a>.
            </FormItemHint>
          </FormItem>
          <FormItem title='Timezone'>
            <FormSelect items={data.timezones}/>
          </FormItem>
          <FormItem title='Currency'>
            <FormSelect items={data.currencies}/>
          </FormItem>
        </SubForm>
        <SubForm title='Privacy'>
          <FormItem title='Profile visibility'>
            <FormItemHint>Manage who can see your activity, things you fancy, your
              followers, people you follow or in anyone's search results.</FormItemHint>
            <FormRadio items={data.profileVisibilities}/>
          </FormItem>
          <FormItem title='Messages'>
            <FormItemHint>Control who can send you messages.</FormItemHint>
            <FormRadio items={data.messages}/>
          </FormItem>
          <FormItem title='Recently viewed'>
            <FormItemHint>Manage your Fancy browsing history</FormItemHint>
            <a href='#'>Delete all items</a>
          </FormItem>
        </SubForm>
        <SubForm title='Content'>
          <FormItem title='Category lists'>
            <FormItemHint>Automatically add Fancy'd items to the Category list.</FormItemHint>
            <FormRadio items={data.categoryListOptions}/>
          </FormItem>
        </SubForm>
        <SubForm></SubForm>
        <SubForm>
          <FormButton text='Save Preferences'/>
        </SubForm>
      </Form>
    );
  }
}

export default Preferences;
