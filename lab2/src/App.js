import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Menu from './components/Menu';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;