import { NavLink } from 'react-router-dom';
import MobileMenu from '../../../Component/MobileMenu';
import logo from '../../../assets/logo.png';
import { useContext } from 'react';
import { AllContext } from '../../../AllProvider/AllProvider';

const Navbar = () => {
  const { isOpen, setOpen } = useContext(AllContext);
  return (
    <div className=" text-white top-0 z-10 py-2 text-center absolute w-full px-3">
      <ul className="md:flex hidden justify-center items-center md:gap-x-3 lg:gap-x-6  text-2xl">
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/admissions">Admissions</NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/">Research</NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/">Blog</NavLink>
        </li>
        <li className="hover:text-[#cbb58b] cursor-pointer duration-200">
          <NavLink to="/">Contact</NavLink>
        </li>
      </ul>
      <div className="md:hidden flex justify-between items-center">
        <div className="w-20">
          <NavLink to="/">
            <img className="w-full saturate-200" src={logo} alt="" />
          </NavLink>
        </div>
        <MobileMenu></MobileMenu>
      </div>
      <div
        id="mobile_menu"
        className={`duration-200 absolute right-0 left-0 mx-auto md:hidden  w-[90%] origin-top ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <ul className="bg-white text-black text-xl">
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1 hover:text-[#cbb58b]"
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1 hover:text-[#cbb58b]"
          >
            <NavLink to="/admissions">Admissions</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1 hover:text-[#cbb58b]"
          >
            <NavLink to="/academics">Acedemics</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1 hover:text-[#cbb58b]"
          >
            <NavLink>Blog</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1 hover:text-[#cbb58b]"
          >
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
