import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
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
          <span className="close">X</span>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div>
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}