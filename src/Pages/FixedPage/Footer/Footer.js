import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content">
      <div>
        <img src={logo} alt="" />
        {/* <svg width="50" height="50" viewBox="0 0 24 24" ></svg> */}
        <div className='text-white'>
          <p >Edwin Diaz is a software and web<br /> technologies engineer, a life coach<br /> trainer who is also a serial .</p>

          <div className='flex m-5'>
            <a href="" className='m-2'><FaGoogle /></a>
            <a href="" className='m-2'><FaTwitter /></a>
            <a href="https://www.facebook.com/profile.php?id=100073732558001" className='m-2'><FaFacebookF /></a>
            <a href="#" className='m-2'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <span className="footer-title">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div className='text-white'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Why Car Doctor</a>
      </div>
      <div className='text-white'>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;