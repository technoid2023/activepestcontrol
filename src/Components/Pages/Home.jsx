import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import banner1 from "../../Assests/banner.jpg";
import banner2 from "../../Assests/pestcontrol1.jpg";
import banner3 from "../../Assests/pcontrol.jpg";
import pest1 from "../../Assests/fertilizer.png";
import pest2 from "../../Assests/herbicide.png";
import pest3 from "../../Assests/pesticide (2).png";
import wcu1 from "../../Assests/bug-spray.png";
import wcu2 from "../../Assests/quick-response.png";
import wcu3 from "../../Assests/pest-control.png";
import "../styles/style.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleSlidesOnly");
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 4000, // Interval in milliseconds (2 seconds)
    });
    return () => {
      carouselInstance.dispose();
    };
  }, []);
  const handleBookServiceClick = () => {
    window.location.href = "/contact-us"; // Redirect to the contact us page
  };

  return (
    <Layout>
      <div style={{ backgroundColor: "linen", minHeight: "100vh" }}>
        <div className="container mt-5">
          <h1 className="text-center mb-5">Welcome to APCS</h1>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide mb-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={banner1}
                  className="d-block w-100"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={banner2}
                  className="d-block w-100"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <div
                    className="carousel-text bg-gradient rounded p-3 text-center text-white"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    <h3 className="text-bold">Protect Your Home</h3>
                    <p className="text-bold">
                      Keep your home safe and pest-free with PestAway.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={banner3}
                  className="d-block w-100"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <div
                    className="carousel-text bg-gradient rounded p-3 text-center text-white"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    <h3 className="text-bold">Preventive Measures</h3>
                    <p className="text-bold">
                      Prevent pests from invading your home with our effective
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="text-center mb-6 hover-container">
                <img
                  src={pest1}
                  alt="Pest Extermination"
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "120px" }}
                />
                <h3>Pest Extermination</h3>
                <p>
                  We specialize in eliminating all types of pests from your
                  property.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-6 hover-container">
                <img
                  src={pest2}
                  alt="Preventive Measures"
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "120px" }}
                />
                <h3>Preventive Measures</h3>
                <p>
                  Our experts offer effective preventive solutions to keep pests
                  away.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-6 hover-container">
                <img
                  src={pest3}
                  alt="Safe Solutions"
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "120px" }}
                />
                <h3>Safe Solutions</h3>
                <p>
                  We use eco-friendly and safe methods to protect your family
                  and pets.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="text-center my-5">Why Choose APCS?</h2>
          <div
            className="row"
            style={{
              background:
                "linear-gradient(to bottom, rgba(56, 142, 60, 0.8), rgba(200, 230, 201, 0.8)), url(${bg})",
              backgroundSize: "cover",
              padding: "20px", // Adjust padding as needed
            }}
          >
            <div className="col-md-4">
              <div className="text-center mb-4">
                <img
                  src={wcu1}
                  alt="Professional Team"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100px" }}
                />
                <h4>Professional Team</h4>
                <p>
                  Our team consists of highly trained and experienced
                  professionals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-4">
                <img
                  src={wcu3}
                  alt="Safety First"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100px" }}
                />
                <h4>Safety First</h4>
                <p>
                  We prioritize the safety of your family, pets, and the
                  environment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center mb-4">
                <img
                  src={wcu2}
                  alt="Quick Response"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100px" }}
                />
                <h4>Quick Response</h4>
                <p>
                  We respond promptly to your pest control needs, ensuring fast
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-6">
              <div className="service-section">
                <h2 className="section-title">Our Services</h2>
                <ul className="service-list">
                  <li>Pest Inspection and Identification</li>
                  <li>Customized Treatment Plans</li>
                  <li>Integrated Pest Management</li>
                  <li>Residential and Commercial Services</li>
                  <li>Seasonal Pest Control</li>
                  <li>Emergency Pest Control</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="promise-section">
                <h2 className="section-title">Our Promise</h2>
                <p className="promise-text">
                  At APCS, we are dedicated to providing:
                </p>
                <ul className="promise-list">
                  <li>Efficient and effective pest control solutions</li>
                  <li>Environmentally friendly methods</li>
                  <li>Professional and courteous service</li>
                  <li>Guaranteed satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              className="btn btn-primary btn-lg btn-book-service"
              onClick={handleBookServiceClick}
            >
              Book a Service
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
