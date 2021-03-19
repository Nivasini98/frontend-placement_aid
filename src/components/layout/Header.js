import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";
//import Dashboard from "../../components/admin/Dashboard";
//import logo from  "../../../public/images/logo.jpg";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
  };
  return (
    <Fragment>
      <div>
        <header className="app-header">
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <Link to="/">
                 */}{" "}
                <img src="/images/logo.jpg" />
                {/* </Link> */}
                <a class="navbar-brand" href="/#">
                  <h3> PLACEMENT AID </h3>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Home">
                      <p> HOME </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#courses">
                      <p> COURSES </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#Home">
                      <p> UPCOMING COMPANIES </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#Home">
                      <p> PLACED STUDENTS </p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#Home">
                      <p> </p>
                    </a>
                  </li>
                </ul>
              </div>
              {user ? (
                <div className="ml-4 dropdown d-inline">
                  <Link
                    to="#!"
                    className="btn dropdown-toggle text-white mr-4"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true aria-expanded"
                    false
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="rounded-circle"
                      />
                    </figure>
                    <span>{user && user.name}</span>
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuBar"
                  >
                    {user && user.role !== "admin" ? (
                      <Link className="dropdown-item" to="/Home">
                        Home
                      </Link>
                    ) : (
                      <Link className="dropdown-item" to="/Dashboard">
                        Dashboard
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/me">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item text-danger "
                      to="/"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <Link to="/login" className="btn ml-4" id="login_btn">
                    Login
                  </Link>
                )
              )}
            </div>
          </nav>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
