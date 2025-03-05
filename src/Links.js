// import { Link } from "react-router-dom";
import trackman from "./assets/trackman.png"
import mindbody from "./assets/mindbody.png"
import puttview from "./assets/puttview.png"
import ghin from "./assets/ghin.png"
import logo from './assets/ss-logo.png'
import tpi from "./assets/tpi.png"
import bridge from "./assets/bridge.png"
import "./App.css";

function Links() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="home-button" alt="home button" />
                <div className="links-container">
                    <a href="https://www.trackman.com/login" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={trackman} alt="trackman login" className="links-image" />
                            <div class="hover-text">Trackman Login</div>
                        </div>
                    </a>
                    <a href="https://clients.mindbodyonline.com/classic/ws?studioid=5732646&stype=-98" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={mindbody} alt="mindbody login" className="links-image" />
                            <div class="hover-text">Mindbody Scheduling</div>
                        </div>
                    </a>
                    <a href="https://www.puttview.com" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={puttview} alt="puttview" className="links-image" />
                            <div class="hover-text">Puttview</div>
                        </div>
                    </a>
                    <a href="https://www.ghin.com/login" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={ghin} alt="ghin" className="links-image" />
                            <div class="hover-text">GHIN Login</div>
                        </div>
                    </a>
                    <a href="https://www.mytpi.com/" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={tpi} alt="tpi" className="links-image" />
                            <div class="hover-text">TPI Login</div>
                        </div>
                    </a>
                    <a href="https://www.bridgeathletic.com/login" target="_blank" rel="noopener noreferrer">
                        <div className="image-wrapper">
                            <img src={bridge} alt="bridge athletic" className="links-image" />
                            <div class="hover-text">Bridge Athletic Login</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Links