import React from "react";
import Header from "../components/Header";

function Order() {
  return (
    <React.Fragment>
      <Header />
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-stepper">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="lead fw-normal">
                        Your order has been delivered
                      </span>
                      <span className="text-muted small">
                        by DHFL on 21 Jan, 2020
                      </span>
                    </div>
                    <div>
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary"
                        type="button"
                      >
                        Track order details
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="d-flex justify-content-center align-items-center big-dot dot">
                      <i className="fa fa-check text-white"></i>
                    </span>
                  </div>

                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-start">
                      <span>15 Mar</span>
                      <span>Order placed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span>15 Mar</span>
                      <span>Order placed</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span>15 Mar</span>
                      <span>Order Dispatched</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span>15 Mar</span>
                      <span>Out for delivery</span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span>15 Mar</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Order;
