import React, { Component } from 'react';

export default class HomeWebsiteForm extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        name1: '',
        name2: '',
        date: '',
        location: '',
        story: ''
      };
    }
    handleSubmit = async (evt) => {
      evt.preventDefault();
      //alert('A name was submitted: ' + this.state.name1);
      
    }
    handleChange = (evt) => {
      this.setState({
        [evt.target.name1]: evt.target.value, 
        [evt.target.name2]: evt.target.value,
        [evt.target.date]: evt.target.value,
        [evt.target.location]: evt.target.value,
        [evt.target.story]: evt.target.value
      });
    }

  render() {
    return (
      <div className="website-form-container">
      <form onSubmit={this.handleSubmit}>
        <button className="submit-btn" type="submit" >Save</button>
        <div className="website-home">
          <h3>Home</h3>
          <input type="text" value={this.state.name1} onChange={this.handleChange} placeholder="Your name:"/>
          <input type="text" value={this.state.name2} onChange={this.handleChange} placeholder="Partner's name:" /> 
          <input type="date" value={this.state.date} onChange={this.handleChange} placeholder="Date of wedding:" />
          <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Location of venue:" />
        </div>

        <div className='website-story'>
          <h3>Story</h3>
          <textarea id="website-textarea" type="text" value={this.state.story} onChange={this.handleChange} placeholder="Tell your guest your story" />
        </div>

        <div className="website-photos">
          <h3>Photos</h3>
          <input type="file" value={this.state.photos} onChange={this.handleChange} />
        </div>

        <div className="website-rsvp">
          <h3>RSVP</h3>
          <p>This will show the user the guest list: accept/decline. Will nto be displayed to guests</p>
        </div>
        
      </form>
      </div>
    );
  }
}