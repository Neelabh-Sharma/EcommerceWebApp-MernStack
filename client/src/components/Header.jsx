import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const nevigate = useNavigate();
  const login = () => {
    nevigate("/login");
  };
  const sigin = () => {
    nevigate("/sigin");
  };
  const [user, setUser] = useState({
    name: "user",
    type: "admin",
  });
  const [islogin,setlogin] = useState(true);
  const toggleLogin = () =>{
    setlogin(!islogin);
    nevigate('/');
  }

  return (
    <div>
      <header className="container-fluid shadow p-3 mb-5  rounded position-fixed z-3 mb-2 bg-white">
        <nav className="row">
          <div className="col-3">
            <h3 className="text-dark">
              <Link to="/" className="nav-link">
                Ecommerce
              </Link>
            </h3>
          </div>
          <div className="col-6">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link fs-5 text-dark">
                  Mens
                </a>
              </li>
              <li>
                <a href="#" className="nav-link  fs-5 text-dark">
                  Womens
                </a>
              </li>
              <li>
                <a href="#" className="nav-link  fs-5 text-dark">
                  Electronic
                </a>
              </li>
              <li>
              <Link to="/faq" className="nav-link" >
                <a  className="fs-5 text-dark">
                  FAQs & Policy
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 d-flex  justify-content-end mt-2">
            {(user.name && islogin) ? (
              <>
              <Link to="/search" className="nav-link">
                  <div className="me-4 mt-1">
                    <FaSearch className="fs-3" />
                  </div>
                </Link>
                <Link to="/cart" className="nav-link">
                  <div className="me-4 d-flex flex-column">
                    <FaShoppingBag className="fs-3" />
                    <h6 className="nav-link">Cart</h6>
                  </div>
                </Link>
                <div className="flex-shrink-0 dropdown">
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle "
                    />
                  </a>
                  <ul className="dropdown-menu text-small shadow ">
                    <li>
                      <a className="dropdown-item" href="#">
                        Hello {user.name}!
                      </a>
                    </li>
                    {user.type === "admin" ? (
                      <>
                        <li>
                          <a className="dropdown-item">
                            <Link to="/dashboard" className="nav-link">
                              DashBoard
                            </Link>
                          </a>
                        </li>
                      </>
                    ) : (
                      <></>
                    )}
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to="/order" className="nav-link">
                          Order
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Link to="/profile" className="nav-link">
                          Profile
                        </Link>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={toggleLogin}>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    onClick={login}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={sigin}
                  >
                    Sign-up
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
