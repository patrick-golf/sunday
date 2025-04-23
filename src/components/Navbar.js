import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/ss-logo.png';
import NavDots from './NavDots';

function Navbar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/links" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-img" />
          <span className="navbar-title">Sunday Swing</span>
        </Link>
        <button onClick={handleLogout} className="navbar-link">
          <NavDots />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 