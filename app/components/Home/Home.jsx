import './images/barcamp.jpeg';
import styles from './_Home.scss';
import React from 'react';
import LocationSearch from "./LocationSearch.jsx";

class Home extends React.Component {

  render() {
    return (
      <div className={styles.homeContainer}>

        <div className={styles.homeBox}>
          <div className={styles.homeLogo}>
            Barcamp.io
          </div>
          <div>
            <LocationSearch/>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;
