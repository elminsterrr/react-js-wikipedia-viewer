import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import Results from './Results';

class SubmitForm extends Component {
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
    // handleChange has just updated state and now app can
    // start axios with entered query as soon as user submits
    this.axiosStart();
    event.preventDefault();
  }

  axiosStart() {
    const wikiApiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
    const wikiApiUrlWithQuery = wikiApiUrl + this.state.value;
    if (this.state.value === '') {
      return this.handleReset();
    } else {
      axios.get(wikiApiUrlWithQuery)
        .then(response => {
          this.setState({data: response.data})
        })
        .catch(err => {
          this.setState({data: 'error'})
        });
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <Title />
            <input className="wiki_query" type="text" value={this.state.value} onChange={this.handleChange} autoFocus />
          </label>
          <br/>
          <button className="btn btn-default mainButton" type="submit" value="Submit">Search</button>
          <div className={this.state.display}>
            <button className="btn btn-info reset" onClick={this.handleReset}>X</button>
          </div>
        </form>
        <Results dataReady={this.state.data} />
      </div>
    );
  }
}

export default SubmitForm;
