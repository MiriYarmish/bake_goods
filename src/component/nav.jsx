import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import './nav.css';

export const Nav = () => {
  const currentUser = useSelector((s) => s.dataU.currentUser);
  const location = useLocation(); // לזהות את ה-URL הנוכחי

  return (
    <nav className="navbar navbar-expand-sm navbar-dark" id="nav">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <Link
              to="/home"
              className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/allP"
              className={`nav-link ${location.pathname === '/allP' ? 'active' : ''}`}
            >
              All Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Log in 📄
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bag"
              className={`nav-link ${location.pathname === '/bag' ? 'active' : ''}`}
            >
              Bag 🛒
            </Link>
          </li>
          {currentUser === "estee" && (
            <li className="nav-item">
              <Link
                to="/addI"
                className={`nav-link ${location.pathname === '/addI' ? 'active' : ''}`}
              >
                Add Item
              </Link>
            </li>
          )}
        </ul>

        <h3>{currentUser}</h3>
      </div>
    </nav>
  );
};
