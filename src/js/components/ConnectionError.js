import React, { Component } from 'react';

class ConnectionError extends Component {
  constructor(props) {
    super(props);
    this.state = {errorInfo: 'The operation failed! We encountered an error while trying to connect to Wikipedia resources!'};
  }

  render() {
    return (
      <div>
        <p>{this.state.errorInfo}</p>
      </div>
    );
  }
}

export default ConnectionError;
