import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../Assests/new.jpg';

const Header = () => {
  const linkStyle = {
    color: 'cornsilk',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '5px',
    textDecoration: 'none', // Remove default underline
    transition: 'color 0.3s, background-color 0.3s', // Add transition effect
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: 'red', // Background color for active page
    color: 'white', // Text color for active page
    textDecorationColor: 'yellow', // Underline color for active page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark shadow navbar-dark">
        <div className="container-fluid">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" className="me-2" style={{ width: '4rem', height: '4rem' }} />
            <span exact to="#" className="navbar-brand" style={{  color: 'chartreuse',fontFamily:'cursive', fontSize:'30px',fontStyle:'italic' }}>APCS</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link1" style={linkStyle} activeStyle={activeLinkStyle} activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link2" style={linkStyle} activeStyle={activeLinkStyle} activeClassName="active">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link3" style={linkStyle} activeStyle={activeLinkStyle} activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link4" style={linkStyle} activeStyle={activeLinkStyle} activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
