import React from 'react';
import axios from 'axios';

import Title from './Title';
import Results from './Results';

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: '',
      display: 'displayNone'
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset() {
    this.setState({data: 'reset', value: '', display: 'displayNone'});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value !== '') {
      this.setState({display: 'displayBlock'});
    } else {
      this.setState({display: 'displayNone'});
    }
  }

  handleSubmit(event) {
    // handle change has just updated state
    // now app can start axios with entered query
    // as soon as user submits
    this.axiosStart();
    event.preventDefault();
  }

  axiosStart() {
    if (this.state.value === '') { 
      return this.handleReset();
    }
    const wikiApiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
    const wikiApiUrlWithQuery = wikiApiUrl + this.state.value;
    console.log(('An input was just submitted: ' + this.state.value));
    axios.get(wikiApiUrlWithQuery) 
      .then(response => {
        console.log('@axiosStart was launched by user!');
        this.setState(Object.assign({}, this.state, { data: response.data }))
      }) 
      .catch(err => {
        console.log('Error: => ' + err);
        this.setState(Object.assign({}, this.state, { data: 'error' }))
      });
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <Title />
            <input className="wiki_query" type="text" value={this.state.value} onChange={this.handleChange} autoFocus />
          </label>
          <br/><button className="btn btn-default mainButton" type="submit" value="Submit">Search</button>
          <div className={this.state.display}>
            <button className="btn btn-info reset" onClick={this.handleReset}>X</button>
          </div>
        </form>
        <Results dataReady={this.state.data} /> 
      </div>
    );
  }
}