import React from 'react';
import ReactLoading from 'react-loading';
import Alert from 'react-s-alert';
import axios from 'axios';

import Form from '../components/Form.jsx';
import FormHeader from '../components/FormHeader.jsx';
import SubForm from '../components/SubForm.jsx';
import FormItem from '../components/FormItem.jsx';
import FormItemHint from '../components/FormItemHint.jsx';
import FormSelect from '../components/FormSelect.jsx';
import FormRadio from '../components/FormRadio.jsx';
import FormButton from '../components/FormButton.jsx';
import FormSpace from '../components/FormSpace.jsx';

import data from '../data.js';
import config from '../../config/config.js';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      isSaving: false,
      isDirty: false,
      userPref: null
    };
  }
  componentDidMount() {
    this.fetchPref();
    this.onUnloadBind = this.onUnload.bind(this);
    window.addEventListener('beforeunload', this.onUnloadBind);
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnloadBind);
  }
  onUnload(evt) {
    if (this.state.isDirty)
      evt.returnValue = 'Are you sure?';
  }
  async fetchPref() {
    try {
      const userPref = (await axios.get(config.apiUrl)).data;
      this.setState({
        fetched: true,
        userPref
      });
    } catch (e) {
      console.error(e);
      Alert.error('Something wrong, Please try again');
    }
  }
  render() {
    if (!this.state.fetched)
      return this.renderLoading();
    return this.renderForm();
  }
  renderLoading() {
    return (
      <Form>
        <div style={{ padding: '20px' }}>
          <center>
            <ReactLoading
              type='spinningBubbles' color='#4b4f5d'
              width='32px' height='32px' />
          </center>
        </div>
      </Form>
    );
  }
  renderForm() {
    const userPref = this.state.userPref;
    const isSaving = this.state.isSaving;
    const isDirty = this.state.isDirty;
    return (
      <Form>
        <FormHeader>Edit Preferences</FormHeader>
        <SubForm title='Localization'>
          <FormItem title='Language'>
            <FormSelect
              items={data.languages}
              {...this.linkValue('language') } />
            <FormSpace height='5px' />
            <FormItemHint>
              Interested in helping translate Fancy?&nbsp;
              <a href='#'>Let us know</a>.
            </FormItemHint>
          </FormItem>
          <FormItem title='Time zone'>
            <FormSelect
              items={data.timezones}
              {...this.linkValue('timezone') } />
          </FormItem>
          <FormItem title='Currency'>
            <FormSelect
              items={data.currencies}
              {...this.linkValue('currency') } />
          </FormItem>
        </SubForm>
        <SubForm title='Privacy'>
          <FormItem title='Profile visibility'>
            <FormItemHint>Manage who can see your activity, things you fancy, your
              followers, people you follow or in anyone's search results.</FormItemHint>
            <FormRadio
              items={data.profileOptions}
              {...this.linkValue('profileOption') } />
          </FormItem>
          <FormItem title='Messages'>
            <FormItemHint>Control who can send you messages.</FormItemHint>
            <FormRadio
              items={data.messageOptions}
              {...this.linkValue('messageOption') } />
          </FormItem>
          <FormItem title='Recently viewed'>
            <FormItemHint>Manage your Fancy browsing history.</FormItemHint>
            <a href='#'>Delete all items</a>
          </FormItem>
        </SubForm>
        <SubForm title='Content'>
          <FormItem title='Category lists'>
            <FormItemHint>Automatically add Fancy'd items to the Category list.</FormItemHint>
            <FormRadio
              items={data.categoryListOptions}
              {...this.linkValue('categoryListOption') } />
          </FormItem>
        </SubForm>
        <SubForm align="right">
          <FormButton text='Save Preferences' disabled={isSaving || !isDirty} onClick={this.handleSave.bind(this)} />
        </SubForm>
      </Form>
    );
  }
  linkValue(prefKey) {
    return {
      value: this.state.userPref[prefKey],
      onChange: (elem, value) => {
        const userPref = this.state.userPref;
        if (userPref[prefKey] === value)
          return;
        userPref[prefKey] = value;
        this.setState({ userPref, isDirty: true });
      }
    };
  }
  async handleSave() {
    let success = false;
    this.setState({ isSaving: true });
    try {
      const userPref = this.state.userPref;
      const res = await axios.put(config.apiUrl, userPref);
      success = res.data.success;
      Alert.success('Saved');
    } catch (e) {
      console.error(e);
      Alert.error('Something wrong, Please try again');
    }
    this.setState({ isSaving: false, isDirty: !success });
  }
}

export default Preferences;
