import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  EyeOutlined,
  LoadingOutlined
} from "@ant-design/icons";
import {signout} from '../../../store/slices/authSlice'
import {BtnToggle} from '../../components'
import icon from "../../../assets/imgs/Cryptornado.png";


const Navbar = ({setTheme,isUserResolved}) => {
  
  //state management
  const currentUser=useSelector(state=>state.authApi.currentUser)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerMenu = isMenuOpen ? "hamburger open" : "hamburger";
  const showMenu = isMenuOpen ? " navbar-open" : "";


  const dispatch=useDispatch()
  const history=useHistory()
  const closeMenu = () => setIsMenuOpen(!isMenuOpen);

  const onSignout=async()=>{
   await dispatch(signout())
    history.push('/')
    closeMenu()
  }

  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <Link to="/">
            <img src={icon} />
          </Link>
          <Link to="/">
            <h3 className="text-logo">CrypTornado</h3>
          </Link>
        </div>
        <div className={hamburgerMenu} onClick={closeMenu}>
          <div></div>
        </div>
        <nav className={`navbar ${showMenu}`}>
        <BtnToggle setTheme={setTheme}/>
        <Link to="/watchlist" onClick={closeMenu} className="navbar-item">
            <HomeOutlined /> Watchlist
          </Link>
          <Link to="/" onClick={closeMenu} className="navbar-item">
            <EyeOutlined /> Glance
          </Link>
          <Link
            to="/cryptocurrencies"
            onClick={closeMenu}
            className="navbar-item"
          >
            <FundOutlined /> Cryptocurrencies
          </Link>
          <Link to="/exchanges" onClick={closeMenu} className="navbar-item">
            <MoneyCollectOutlined /> Exchanges
          </Link>
          <Link to="/news" onClick={closeMenu} className="navbar-item" style={{marginBottom:'2rem'}}>
            <BulbOutlined /> News
          </Link>
        {!currentUser&&isUserResolved&&<><Link to='/signup' className='nav-btn-primary' onClick={closeMenu}>Sign Up</Link>
        <Link to='/signin' className='nav-btn-secondary' onClick={closeMenu}>Log In</Link></>}
        {currentUser&&isUserResolved&&<Link to='/' className='nav-btn-tertiary' onClick={onSignout}>Log Out</Link>}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
