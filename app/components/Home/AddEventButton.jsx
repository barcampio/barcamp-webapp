import React from 'react';
import styles from './_Home.scss';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class AddEventButton extends React.Component {
  render() {
    return (
      <div className={styles.addEventButton}>
        <FloatingActionButton backgroundColor="#455A64">
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default AddEventButton;
