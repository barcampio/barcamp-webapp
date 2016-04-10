import './images/barcamp.jpeg';
import styles from './_Home.scss';
import React from 'react';

import LocationSearch from './LocationSearch.jsx';
import TagsSearch from './TagsSearch.jsx';
import AddEventButton from './AddEventButton.jsx';

class Home extends React.Component {

  render() {
    return (
      <div className={styles.homeContainer}>

        <AddEventButton/>

        <div className={styles.homeBox}>
          <div className={styles.homeLogo}>
            Barcamp.io
          </div>
          <div className={styles.inputs}>
            <LocationSearch/>
            <TagsSearch/>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
