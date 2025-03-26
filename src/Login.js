import { useState } from "react";
import axios from "axios";
import logo from "./assets/ss-logo.png";
// import { Link } from "react-router-dom"; // Uncomment if you're using React Router for navigation
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  // States to store form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");  // For showing error/success messages
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading spinner or disable button while waiting for response
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });

      // On successful login, store token in localStorage
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
      // Redirect user to another page (e.g., dashboard)
      // window.location.href = '/dashboard'; // Uncomment if you're using a redirect
      navigate("/links");

    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false); // Hide loading spinner or enable button
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="login-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            {message && <p>{message}</p>}
            <a className="register-link" href="/register">Register</a>
            <a className="register-link" href="/forgot-password">Forgot Password?</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
