import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Signin() {
  const [loader, setloader] = useState(true);
  setTimeout(() => {
    setloader(false);
  }, [1500]);
  return (
    <>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <React.Fragment>
          <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="shadow-lg p-3 mb-5  rounded">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
              <hr />
              <div className="d-flex">
                <p>
                  <a class="link-opacity-100 me-4" href="#">
                    <Link to="/login"> Already Have a Account?</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default Signin;
