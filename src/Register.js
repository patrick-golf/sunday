import { useState } from "react";
import axios from "axios";
import logo from "./assets/ss-logo.png";
// import { Link } from "react-router-dom";
import "./App.css";

function Register() {
  // States to store form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");  // For showing error/success messages
  const [loading, setLoading] = useState(false); // For loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Show loading spinner or disable button while waiting for response
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        email,
        password,
      });

      setMessage("Registration successful! You can now log in.");
      // Redirect user to login page
      // window.location.href = "/login"; // Uncomment if you're using a redirect

    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed. Please try again.");
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            {message && <p>{message}</p>}  {/* Display message */}
            <a className="register-link" href="/login">Already have an account? Log in</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Register;
