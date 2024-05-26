import { useContext, useState } from 'react';
import './header.css';
import img from "../../assets/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { SiteContext } from '../../context/siteContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { logout } = useContext(SiteContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const LogOut = async () => {
    toast.success('LOGGED OUT!', {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      autoClose: 2000,
      pauseOnHover: false,
    });
    await delay(2000);
    logout();
  }

  return (
    <>
      <ToastContainer />
      <header className="header">
        <nav>
          <div className='logo'>
            <img src={img} alt="" />
            <p>DISPRED</p>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            ☰
          </label>
          <div className="menu">
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
            <NavLink to="/finddoctor" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Find a doctor</NavLink>
            <NavLink to="/symptom" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
            <div className="user-icon" onClick={() => setShowDropdown(!showDropdown)}>
              <AiOutlineUser />
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/userprofile">Edit Profile</Link>
                  <span onClick={LogOut}>Logout</span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
