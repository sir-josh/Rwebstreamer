import React, { Component, Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {

  showActionButtons(){
    return (
      <Fragment>
        <button className='ui button black'>Delete</button>
        <button className='ui cancel button'>Cancel</button>
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal 
          title="Delete Stream"
          content="Are sure you want to delete this stream?"
          actions={this.showActionButtons()}
          onDismiss ={() => history.push('/')}
        />
      </div>
    );
  }
}

export default StreamDelete;