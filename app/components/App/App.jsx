import styles from './_App.scss';

import React from 'react';

import Home from '../Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Home/>
      </div>
    );
  }
}

export default App;
