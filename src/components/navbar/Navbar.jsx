import "./navbar.css"
import {Routes, Route, useNavigate} from 'react-router-dom';
  
const Navbar = () => {
  const navigate = useNavigate();

  const navigateHome1 = () => {
    // 👇️ navigate to /
    navigate('/login/Login');
  };
  const navigateHome2 = () => {
    // 👇️ navigate to /
    navigate('/register/Register');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Travel Nest</span>
        <div className="navItems">
          <button className="navButton" onClick={navigateHome2}>Register</button>
          <button className="navButton" onClick={navigateHome1}>Login</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar