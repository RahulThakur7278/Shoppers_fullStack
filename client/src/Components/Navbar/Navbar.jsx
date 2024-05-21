import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
const Navbar = () => {
    const[menu,setMenu]=useState("shop");
    const {geTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle('nav-menu-vissble');
      e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt=''></img>
      <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt='' ></img>
      <ul ref={menuRef} className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr></hr>:""}</li>
      <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='men'>Men</Link>{menu==="mens"?<hr></hr>:""}</li>
      <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='women'>Women</Link>{menu==="womens"?<hr></hr>:""}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr></hr>:""}</li>

      </ul>
      <div className='nav-login-cart'>
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:       <Link to='/login'><button>Login</button></Link> }
        <Link to='/cart'><img src={cart_icon} alt=''></img></Link>
        <div className='nav-cart-count'>
         {geTotalCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar
