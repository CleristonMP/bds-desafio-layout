import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md main-nav">
      <div className="container-fluid main-nav-container">
        <Link to='/'>
          <a href="link">
            <h4>Carros Top</h4>
          </a>
        </Link>

        <button
          className="navbar-toggler custom-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#desafio-navbar"
          aria-controls="desafio-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="desafio-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li className="custom-li">
              <a href="link">Home</a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
