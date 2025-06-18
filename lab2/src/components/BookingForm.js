import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select a Service',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Booking request submitted!');
    setFormData({
      name: '',
      email: '',
      service: 'Select a Service',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Book Your Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <select 
                className="form-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Select a Service</option>
                <option value="dine-in">Dine In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Please write your comment"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning px-4 py-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm; 