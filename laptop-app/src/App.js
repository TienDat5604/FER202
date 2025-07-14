import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import LaptopList from './pages/LaptopList';
import LaptopDetail from './pages/LaptopDetail';
import NotFound from './pages/NotFound';

function App() {
  const [user, setUser] = useState(null);

  // Logout function to clear user state
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/laptops" /> : <Login setUser={setUser} />} />
          <Route path="/laptops" element={user ? <LaptopList user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/laptops/:id" element={user ? <LaptopDetail user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
