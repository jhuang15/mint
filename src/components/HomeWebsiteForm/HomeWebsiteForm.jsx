import React, { Component } from 'react';

export default class HomeWebsiteForm extends Component {
  state = {
    name1: ''

  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    alert('A name was submitted: ' + this.state.name1);
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name1]: evt.target.value, //idk if i need these don't know what used for
      [evt.target.name2]: evt.target.value,
      [evt.target.date]: evt.target.value,
      [evt.target.location]: evt.target.value,
      error: ''
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name1} onChange={this.handleChange} placeholder="Your name:"/>
        <input type="text" value={this.state.name2} onChange={this.handleChange} placeholder="Partner's name:" /> 
        <input type="text" value={this.state.date} onChange={this.handleChange} placeholder="Date of wedding:" />
        <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Location of venue:" />
        <button className="submit-btn" type="submit" >Submit</button>
      </form>
      </div>
    );
  }
}