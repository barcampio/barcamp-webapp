import React from 'react';
import styles from './_Home.scss';

class TagsSearch extends React.Component {
  render() {
    return (
      <div>
        <input name="TagsSearch" type="text" className={styles.tagsSearch}/>
      </div>
    )
   }
}

export default TagsSearch;
