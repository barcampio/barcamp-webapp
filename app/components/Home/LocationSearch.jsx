import React from 'react'
import styles from './_Home.scss';

class LocationSearch extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className={styles.locationSearch}/>
      </div>
    )
  }
}

export default LocationSearch;
