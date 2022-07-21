import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import UserDetails from "./UserDetails";

function Navbar() {

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('info')
    navigate("/login")
  }

  let location = useLocation();

  return (
    // 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <i className="fa-solid fa-notebook"></i>
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/Home" ? "active" : ""
                  }`}
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/About" ? "active" : ""
                  }`}
                aria-current="page"
                to="/About"
              >
                About
              </Link>
            </li>
            {/* <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background : "none", border : "0px"}} onFocus={{border : "0px"}}>
                Settings
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="#">Dark mode</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div> */}
          </ul>
          
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="btn text-light mx-1" to="/signup" role="button" style={{ border: "none", fontSize: "16px" }}><i className="fa-solid fa-user-plus" style={{ fontSize: "16px", marginRight: "2px" }}></i> Sign Up</Link>
            <Link className="btn text-light mx-1" to="/login" role="button" style={{ border: "none", fontSize: "16px" }}><i className="fa-solid fa-right-to-bracket" style={{ fontSize: "16px", marginRight: "2px" }}></i> Login</Link>
          </form> : <div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
            <UserDetails></UserDetails>
            <button onClick={handleLogout} className="btn text-light"><i className="fa-solid fa-right-from-bracket" style={{ padding: "2px" }}></i></button></div>
            }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
