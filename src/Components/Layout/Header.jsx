
import { Link } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../Assests/logo.png';

const Header = () => {

 
 
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow navbar-dark bg-dark">

        <div className="container-fluid">
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={logo} alt="logo" className="me-2" style={{ width: '3rem', height: '3rem' }} />
  <Link className="navbar-brand" to="/" >APCS</Link>
</div>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars}/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/contact-us">Contact Us</Link>
              </li>

             
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;