import React from 'react';

export default class Title extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      titleWiki: "Welcome!"
    };
  }

  render() {
    
    setTimeout(() => {
      this.setState({titleWiki: "wikipedia"});
    }, 4500);

    return(
      <h1>{this.state.titleWiki}</h1>
    );
  }  
}