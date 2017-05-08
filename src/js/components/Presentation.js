import React from 'react';
 
export default class Presentation extends React.Component {
  render() {

    // first is just to det. length
    const results = this.props.dataReadyElminster[1].map((result, index) => {

      return (

        <a href={this.props.dataReadyElminster[3][index]} className="single-result" key={index} target="_blank">
          <h3>{this.props.dataReadyElminster[1][index]}</h3>
          <p>{this.props.dataReadyElminster[2][index]}</p>
        </a>
        
      );
    });

    return (
      <div>
        <div>{results}</div>
      </div>
    );
  }
}