import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/ss-logo.png';

function Navbar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-img" />
        </Link>
        <button onClick={handleLogout} className="navbar-link">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar; 