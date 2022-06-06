import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className="navbar-nav">
      <div className="nav-div">
      <div className="nav-div-left">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/wedding-website/" className="nav-link">Wedding Website</Link>
      <Link to="/invitations" className="nav-link">Invitations</Link>
      </div>
      <div className="nav-div-right">
      <p className="nav-welcome">Welcome, {user.name}</p>
      <Link to="" onClick={handleLogOut} className="nav-link" id="nav-logout">Log Out</Link>
      </div>
      </div>
    </nav>
    
  );
}