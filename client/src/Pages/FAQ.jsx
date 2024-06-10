import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
function FAQ() {
  const [loader, setloader] = useState(true);
  setTimeout(() => {
    setloader(false);
  }, [1500]);
  return (
    <div>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Header />
          <section>
            <h3 className="text-center mb-4 pb-2 text-primary fw-bold ">FAQ</h3>
            <p className="text-center mb-5">
              Find the answers for the most frequently asked questions below
            </p>

            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="far fa-paper-plane text-primary pe-2"></i> A
                  simple question?
                </h6>
                <p>
                  <strong>
                    <u>Absolutely!</u>
                  </strong>{" "}
                  We work with top payment companies which guarantees your
                  safety and security. All billing information is stored on our
                  payment processing partner.
                </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="fas fa-pen-alt text-primary pe-2"></i> A
                  question that is longer then the previous one?
                </h6>
                <p>
                  <strong>
                    <u>Yes, it is possible!</u>
                  </strong>{" "}
                  You can cancel your subscription anytime in your account. Once
                  the subscription is cancelled, you will not be charged next
                  month.
                </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="fas fa-user text-primary pe-2"></i> A simple
                  question?
                </h6>
                <p>
                  Currently, we only offer monthly subscription. You can upgrade
                  or cancel your monthly account at any time with no further
                  obligation.
                </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="fas fa-rocket text-primary pe-2"></i> A simple
                  question?
                </h6>
                <p>
                  Yes. Go to the billing section of your dashboard and update
                  your payment information.
                </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="fas fa-home text-primary pe-2"></i> A simple
                  question?
                </h6>
                <p>
                  <strong>
                    <u>Unfortunately no</u>.
                  </strong>{" "}
                  We do not issue full or partial refunds for any reason.
                </p>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <h6 className="mb-3 text-primary">
                  <i className="fas fa-book-open text-primary pe-2"></i> Another
                  question that is longer than usual
                </h6>
                <p>
                  Of course! We’re happy to offer a free plan to anyone who
                  wants to try our service.
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default FAQ;
