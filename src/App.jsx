import React from 'react';
import Preferences from './containers/Preferences.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2" style={{ padding: '20px' }}>
          <Preferences />
        </div>
      </div>
    );
  }
}

export default App;
