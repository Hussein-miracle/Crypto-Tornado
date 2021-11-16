import {useState} from 'react'
import {Link}from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined} from '@ant-design/icons'
import icon from '../images/Cryptornado.png'
const Navbar=()=>{
  console.log('this rendered');
//  const [showTopNav,setShowTopNav]=useState(false)
 const [isMenuOpen,setIsMenuOpen]=useState(false)
//  const navCointainer=showTopNav?'nav-top':'nav-side'
 const hamburgerMenu=isMenuOpen?'hamburger open':'hamburger'
 const showMenu=isMenuOpen?' navbar-open':''

 const closeMenu=()=>setIsMenuOpen(!isMenuOpen)
    return(
      <>
       <div className='replacement-nav'>
      <div className="logo-container">
         <Link to='/'><img src={icon} /></Link>
          <Link to='/'><h3 className='text-logo'>CrypTornado</h3></Link>
            </div>
            {/* <div className="menu-container"> */}
<div className={hamburgerMenu} onClick={closeMenu}><div></div></div>
            <nav className={`navbar ${showMenu}`}>
        <Link to="/" onClick={closeMenu} className="navbar-item"><HomeOutlined /> Home</Link>
        <Link to="/cryptocurrencies" onClick={closeMenu} className="navbar-item"><FundOutlined /> Cryptocurrencies</Link>
        <Link to="/exchanges" onClick={closeMenu} className="navbar-item"><MoneyCollectOutlined /> Exchanges</Link>
        <Link to="/news" onClick={closeMenu} className="navbar-item"><BulbOutlined /> News</Link>
      </nav>
        {/* </div> */}
        </div>
        </>
    )
}

export default Navbar