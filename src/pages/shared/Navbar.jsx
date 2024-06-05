import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import logo from '../../assets/images/icons/logo.png'
import { AuthContex } from '../../providers/AuthProvider';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContex)

  const handleSignOut = ()=>{
    logOut()
    .then()
    .catch()
  }
  
  
    
    return (
        <div className="navbar text-yellow-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink>Home</NavLink>


              </li>
              <li>

                <NavLink>Destination</NavLink>
              
                
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link>
          <img className='w-60 h-10' src={logo} alt="" />
          
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className=' text-lg'>
            <NavLink to='/'>Home</NavLink>
            </li>
            <li className=' text-lg'>
            <NavLink to='/d'>Destination</NavLink>
            </li>
            <li className=' text-lg'>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li className=' text-lg'>
              <NavLink to='/register'>Sign Up</NavLink>
            </li>
            
            
          </ul>
        </div>
        <div className="navbar-end">
          {
            !user ? <Link to='/login' className="btn btn-warning w-32">Login</Link> : <button onClick={handleSignOut} className='btn btn-warning'>Sign Out</button>
          }
        </div>
      </div>
    );
};

export default Navbar;