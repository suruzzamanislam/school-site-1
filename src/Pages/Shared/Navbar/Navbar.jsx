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
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/">Admissions</NavLink>
        </li>
        <li>
          <NavLink to="/">Academics</NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Research</NavLink>
        </li>
        <li>
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
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
        className={`duration-200 absolute w-full origin-top ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <ul className="bg-white text-black text-xl">
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1"
          >
            <NavLink>About</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1"
          >
            <NavLink>Admissions</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1"
          >
            <NavLink>Acedemics</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1"
          >
            <NavLink>Blog</NavLink>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="border-b border-black py-1"
          >
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
