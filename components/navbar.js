import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="col-md-3 ms-5 p-5 p-md-5 me-5 nav-satu">
          <div className="d-flex flex-column parent-div">
            <nav className="nav flex-fill flex-column">
              <NavLink activeClassname="active" className="nav-link dashboard mb-3" to="/Home">
                <img src={da} style={{width: "15%"}} className="img-fluid me-3" alt='Dashboard'/> Dashboard
              </NavLink>
              <NavLink activeClassname="active" className="nav-link transfer-nav mb-3" to="/Transfer1">
                <img src={transfer} style={{width: "15%"}} className="img-fluid me-3" alt='Transfer'/> Transfer
              </NavLink>
              <NavLink activeClassname="active" className="nav-link topup mb-3" to="/Topup">
                <img src={topup} style={{width: "15%"}} className="img-fluid me-3" alt='Top Up'/> Top Up
              </NavLink>
              <NavLink activeClassname="active" className="nav-link profil-nav" to="/Profile1">
                <img src={profile} style={{width: "15%"}} className="img-fluid me-3" alt='profile'/> Profile
              </NavLink>
            </nav>

            <nav className='ms-2'>
              {/* <LogoutButton /> */}
            </nav>
          </div>
        </nav>
    </>
  )
}

export default Navbar