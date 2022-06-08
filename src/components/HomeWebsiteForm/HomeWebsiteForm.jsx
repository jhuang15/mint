import React, { Component } from 'react';

export default class HomeWebsiteForm extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        formValues: [{
          name1: '',
          name2: '',
          date: '',
          location: '',
          story: '',
          photos: '',
          invite: ''
        }]
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async (evt) => {
      evt.preventDefault();
      alert(JSON.stringify(this.state.formValues));
      
    }
    handleChange = (i, evt) => {

      let formValues = this.state.formValues;
      formValues[i][evt.target.name] = evt.target.value;
      this.setState({ formValues });
      /*
      this.setState({
        [evt.target.name1]: evt.target.value, 
        [evt.target.name2]: evt.target.value,
        [evt.target.date]: evt.target.value,
        [evt.target.location]: evt.target.value,
        [evt.target.story]: evt.target.value
      });
      */
    }

    addFormFields() {
      this.setState(({
        formValues: [...this.state.formValues, { invite: ""}]
      }))
    }
  
    removeFormFields(i) {
      let formValues = this.state.formValues;
      formValues.splice(i, 1);
      this.setState({ formValues });
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

        <div className="website-rsvp" >
          <h3>RSVP</h3>
          <p>This will show the user the guest list: accept/decline. Will nto be displayed to guests</p>

        {this.state.formValues.map((element, index) => (
          <div className="add-invite-input" key={index}>
           <input type="text" value={element.invite || ""} onChange={e => this.handleChange(index, e)} placeholder="Name of guest" />
           { index ? 
             <button type="button" className="btn-remove" onClick={() => this.removeFormFields(index)}>Remove</button>
             : null
           }
          </div>
        ))}
        <div className="button-section">
          <button className="btn-add" type="button" onClick={() => this.addFormFields()}>Add</button>
          <button className="btn-submit" type="submit">Submit</button>
        </div>
        </div>
      </form>
      </div>
    );
  }
}