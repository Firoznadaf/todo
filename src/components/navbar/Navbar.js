import React from "react";
import "./Navbar.css";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><b>
            <GiWhiteBook /> &nbsp; TO-DO</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"
                  aria-current="page"
                  to="/about">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/todo">
                  ToDo
                </Link>

              </li>
              {!isLoggedIn && (
                <> <div className="d-flex">
                  <li className="nav-item mx-2 p-lg-0 p-2">
                    <Link className="nav-link active btn-nav" aria-current="page"
                      to="/signup">
                      SignUp
                    </Link>
                  </li></div>
                  <div className="d-flex ">
                    <li className="nav-item mx-2 p-lg-0 p-2">
                      <Link className="nav-link active btn-nav" aria-current="page"
                        to="/signin">
                        SignIn
                      </Link>
                    </li></div>

                </>
              )}
              {isLoggedIn && <>
                <div className="d-flex p-lg-0 p-2">
                  <li className="nav-item mx-2" onClick={logout}>
                    <Link className="nav-link active btn-nav" aria-current="page" to="#">
                      Log Out
                    </Link>

                  </li>
                </div>

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    <img
                      className="img-fluid user-png"
                      src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
                      alt="user imag"></img>
                  </Link>
                </li></>}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;