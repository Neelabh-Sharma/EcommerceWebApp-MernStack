import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import {
  FaCartArrowDown,
  FaCartPlus,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Home() {
  const[loader,setloader] = useState(true)
  setTimeout(() => {
    setloader(false);
  }, [1500]);
  const [item, setitem] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setitem(data.data))
      .catch((err) => {
        console.log(`error : ${err}`);
      });
  }, []);
  const imageStyle = {
    height: 100,
    width: 100,
  };
  const imageSider = {
    height: 600,
    width: 100,
  };
  return (
   <>
    {
      loader?(
        <>
          <Loader/>
        </>
      ):(
        <React.Fragment>
        {/* Header component */}
        <Header />
        {/* Header end */}
  
        {/* Image Slidder */}
        <div className="container-fluid vh-100">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  className="d-block w-100"
                  src="https://www.praveenbhat.net/wp-content/uploads//2020/07/ny_photography_sunglasses.jpg"
                  alt="..."
                  style={imageSider}
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://cdn.shopify.com/s/files/1/1859/8979/files/colorful_background.jpg?v=1650544976"
                  className="d-block w-100"
                  alt="..."
                  style={imageSider}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://files.cdn.printful.com/o/upload/bfl-image/33/4638_l_12-monochromatic-product-photography-trends.png"
                  className="d-block w-100"
                  alt="..."
                  style={imageSider}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/*End of Slidder  */}
  
        {/* main image card section */}
        <div className="container mt-2">
          <div className="row">
            {item.map((item) => (
              <div className="col-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    style={imageStyle}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <div className="">
                        <FaRupeeSign />
                        {item.price}
                      </div>
                      <div className="">
                        <FaStar />
                        {item.rating.rate}
                      </div>
                    </li>
                    <li className="list-group-item">{item.category}</li>
                    <li className="list-group-item">
                      <button className="btn btn-outline-warning me-2">
                        Add to Cart
                      </button>
                      <button className="btn btn-outline-danger me-2">
                        Buy Now
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end of Image Card*/}
  
        <Footer/>
      </React.Fragment>
      )
    }
   </>
  );
}

export default Home;
