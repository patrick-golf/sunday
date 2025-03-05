import logo from './assets/ss-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="button-container">
            <button className="btn">Login</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
