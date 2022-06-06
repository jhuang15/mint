import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
//css is in index.css

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (

    <div id="modalTwo" className="modal">
      <div className="modal-content">
        <div className="contact-form">
          <span className="close">&otimes;</span>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Log In to Mint</h2>
            <div>
            <input type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
            </div>
            <button className="submit-btn" type="submit">Log In</button>

          </form>
            <p className="error-message">&nbsp;{error}</p>
            <p>Not a member? 
            <button className="button" id="signup-btn" data-modal="modalOne">Sign Up</button> </p>
            <SignUpForm setUser={setUser} />
        </div>
      </div>
    </div>
  );
}