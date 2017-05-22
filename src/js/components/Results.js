import React, { Component } from 'react';
import PlaceHolder from './PlaceHolder';
import ConnectionError from './ConnectionError';
import DataNotFound from './DataNotFound';
import Presentation from './Presentation';

class Results extends Component {
  render() {
    if ((this.props.dataReady === 'reset') || (this.props.dataReady === '')) {
      return <PlaceHolder />;
    } else if (this.props.dataReady === 'error') {
      return <ConnectionError />;
    } else if (this.props.dataReady[1].length === 0) {
      return <DataNotFound />;
    } else {
      return <Presentation dataReady={this.props.dataReady} />;
    }
  }
}

export default Results;
