import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <React.Fragment>
      <div className="container-fluid my-5">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
               <FaFacebook/>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaTwitter/>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
               <FaGoogle/>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <FaInstagram/>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
               <FaLinkedin/>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
               <FaGithub/>
              </a>
            </section>
          </div>

          <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="/">
              Neelabh sharma
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Footer;
