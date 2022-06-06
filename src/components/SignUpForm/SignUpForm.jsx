import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch{ 
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;

    return (

    <div id="modalOne" className="modal">
      <div className="modal-content">
        <div className="contact-form">
          <a className="close">&otimes;</a>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <h2>Your wedding planning starts now!</h2>
            <div>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            <input type="password" name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <p>By clicking 'Sign Up', I agree to Mint's  Privacy Policy and Terms of Use. I understand Mint may share my information with partners as described here.</p>
            <button className="submit-btn" type="submit" disabled={disable}>Sign Up</button>

            
          </form>
          <p>Already a member? <a href="">Log In</a></p>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    </div> 
    );
  }
}
