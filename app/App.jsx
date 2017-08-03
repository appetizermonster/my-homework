import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import Preferences from './containers/Preferences.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='col-md-8 col-md-offset-2' style={{ padding: '20px' }}>
          <Preferences />
        </div>
        <Alert stack={{ limit: 1 }} effect='stackslide' position='top' timeout={1500} />
      </div>
    );
  }
}

export default App;
