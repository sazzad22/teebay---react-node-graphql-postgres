import React from 'react';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import { signOut } from 'firebase/auth';

const Header = () => {
//   const [user] = useAuthState(auth);
  
//     const handleSignOut = () => {
//       signOut(auth);
//     localStorage.removeItem('accessToken');
    // }
    const menuItem = (
        <>
          <li>
            <Link to={"/all-products"}>All Products</Link>
          </li>
          
          <li>
            <Link to={"/my-products"}>My Products</Link>
          </li>
          <li>
            <Link to={"portfolio"}>Portfolio</Link>
          </li>
          
          
        </>
      );
    return (
        <div >
      <div className="navbar mb-10  fixed  bg-gradient-to-r from-primary via-secondary  to-white   ease-in-out duration-200   z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <p to={"/home"} className="font-semibold px-5 lg:px-10 normal-case text-2xl lg:text-4xl text-white">
            Teebay
          </p>
        </div>
        <div className="navbar hidden lg:flex justify-end">
          <ul className="menu  menu-horizontal p-0">{menuItem}</ul>
          
        </div>
        <div className="navbar-end lg:hidden">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
        
        </div>
      </div>
    </div>
    );
};

export default Header;