import logo from './assets/ss-logo.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="button-container">
            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
            <Link to="/register">
                <button className="btn">Register</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
