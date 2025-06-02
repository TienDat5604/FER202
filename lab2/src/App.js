import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      {/* Thanh điều hướng */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Pizza House</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Bật/tắt điều hướng"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Phần giới thiệu */}
      <section id="home" className="hero-section text-white text-center position-relative">
        <div className="container">
          <div className="hero-content">
            <img src="/pizza1.jpg" alt="Neapolitan Pizza" className="hero-image" />
            <h1 className="display-4">Neapolitan Pizza</h1>
            <p className="lead">
              If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
            </p>

          </div>
        </div>
      </section>

      {/* Phần thực đơn */}
      <section id="menu" className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">Our Menu</h2>
          <div className="row">
            {/* Pizza 1 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">SALE</span>
                <img src="/hero-pizza.jpg" className="card-img-top" alt="Margherita Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text text-danger">$40.00 <del>$52.00</del></p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>
            {/* Pizza 2 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src="/pizza2.jpg" className="card-img-top" alt="Mushroom Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <p className="card-text">$25.00</p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>
            {/* Pizza 3 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">NEW</span>
                <img src="/pizza3.jpg" className="card-img-top" alt="Hawaiian Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <p className="card-text">$10.00</p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
              </div>
            </div>
            {/* Pizza 4 */}
            <div className="col-md-3 mb-4">
              <div className="card position-relative">
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">SALE</span>
                <img src="/pizza4.jpg" className="card-img-top" alt="Pesto Pizza" />
                <div className="card-body text-center">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <p className="card-text text-danger">$40.00 <del>$50.00</del></p>
                  <a href="#" className="btn btn-dark">Buy</a>
                </div>
            
            </div>
          </div>
        </div>
        </div>

      </section>

      {/* Phần đặt bàn */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">Book Your Table</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="mb-3">
                  <select className="form-control" required>
                    <option value="">Select a Service</option>
                    <option value="dine-in">Dine In</option>
                    <option value="takeaway">Takeaway</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Please write your comment"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;