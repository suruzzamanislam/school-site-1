import Navbar from '../Pages/Shared/Navbar/Navbar';
import PropTypes from 'prop-types';

const Hero = ({ title }) => {
  return (
    <div
      id="about_banner"
      className="w-full h-[40vh] md:h-[60vh] flex items-center justify-center mb-9"
    >
      <Navbar></Navbar>
      <h1 className=" text-center text-5xl lg:text-7xl md:mt-32 text-white lg:ml-14">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
Hero.propTypes = {
  title: PropTypes.string,
};
