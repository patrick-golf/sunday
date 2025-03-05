import logo from "./assets/ss-logo.png";
//import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="login-container">
            <form>
              <input type="email" placeholder="Email" className="input-field" required />
              <input type="password" placeholder="Password" className="input-field" required />
              <button type="submit" className="btn">Login</button>
            </form>
            <a href="/register">Register</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
