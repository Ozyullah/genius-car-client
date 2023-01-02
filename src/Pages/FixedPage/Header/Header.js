import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { GoSearch, GoSignOut } from 'react-icons/go'
import { SiShopify } from 'react-icons/si'
import { useContext } from 'react';
import { CarContext } from '../../../Context/AuthContext';
import { FaUser } from 'react-icons/fa';
import './Header.css'

const Header = () => {

    const {user,signUp} =useContext(CarContext);

    const handleSignOut=()=>{
        signUp()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/searvices'}>Services</Link>
                            <Link to={'/'}>Blog</Link>
                            <Link to={'/'}>Contact</Link>
                        </li>

                    </ul>
                </div>
                <Link to={'/'}><img className='w-20' src={logo}></img></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 mr-4">
                    <li>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/searvices'}>Services</Link>
                        <Link to={'/'}>Blog</Link>
                        <Link to={'/'}>Contact</Link>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">

                <>
                {
                    user?.uid ? <button onClick={handleSignOut} title='sign out' className='mr-2' ><GoSignOut/></button>: ""
                }
                </>

                <>
                {user?.uid ? <img className='userImg' src={user.photoURL} alt="" /> : <Link title='click for login' to={'/login'}><FaUser/></Link>}
                </>

                <button className='ml-2' title='for login' ><SiShopify /></button>

                <button className='m-2'><GoSearch /></button>

                <a className="btn btn-outline btn-warning text-xs">Appointment</a>
            </div>
        </div>
    );
};

export default Header;