import React from 'react';

export default class ConnectionError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorInfo: 'Nothing found for your query. Please try another search.'};
  }
  
  componentDidMount() {
    console.log('Nothing found for your query. Please try another search.');
  }

  render() {

    return (

      <div>
        <p>{this.state.errorInfo}</p>
      </div>

    );
  }
}