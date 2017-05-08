import React from 'react';

export default class ConnectionError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorInfo: 'The operation failed! We encountered an error while trying to connect to Wikipedia resources!'};
  }
  
  componentDidMount() {
    console.log('The operation failed! We encountered an error while trying to connect to Wikipedia resources!');
  }

  render() {

    return (

      <div>
        <p>{this.state.errorInfo}</p>
      </div>

    );
  }
}