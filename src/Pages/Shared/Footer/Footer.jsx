import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] px-3 md:px-16 lg:px-24  py-12 text-white">
      <h1 className="text-center text-3xl md:text-5xl tracking-widest font-medium">
        Newsletter
      </h1>
      <div className="flex justify-center gap-x-2 md:gap-x-5 mt-5 border-b border-gray-600 pb-8">
        <input
          className="w-full md:w-1/2 px-5 bg-[#3F3F3F] text-gray-300 text-xl focus:outline-none py-3"
          type="text"
        />

        <button className="bg-[#637483] px-5 tracking-wider font-medium">
          SUBCIRBE
        </button>
      </div>
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 gap-x-5 mt-8">
        <div>
          <img src={logo} alt="" />
          <p>2016 © copyright All rights reserved.</p>
        </div>
        <div>
          <h1 className="text-2xl font-medium md:mb-2">Navigation</h1>
          <ul className="space-y-2">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="academics">Academics</NavLink>
            </li>
            <li>
              <NavLink to="admissions">Admissions</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/research">Research</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-medium md:mb-2">Tweets</h1>
          <ul className="space-y-2">
            <li>Tweets-1</li>
            <li>Tweets-2</li>
            <li>Tweets-3</li>
            <li>Tweets-4</li>
            <li>Tweets-5</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium md:mb-2">Contact Us</h1>
          <address>
            Address: Unisco university Albany, <br /> NY, USA. 11001
          </address>
          <p>
            Email : info@unisco.com <br /> Phone : +91 555 668 986
          </p>
          <div className="flex items-center gap-x-4 mt-4">
            <FaFacebookF></FaFacebookF>
            <FaLinkedinIn></FaLinkedinIn>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
