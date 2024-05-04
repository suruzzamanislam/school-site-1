// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';
import logo from '../../../assets/logo.png';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../../../Component/Button';
import { NavLink } from 'react-router-dom';
const Banner = () => {
  return (
    <div id="Banner" className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div
            id="banner_1"
            className="w-full h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-6xl">Creative Thinking & Innovation</h1>
            <p className="max-w-2xl text-xl leading-relaxed font-normal text-center">
              Proactively utilize open-source users for process-centric total
              linkage. Energistically reinvent web-enabled initiatives with
              premium processes. Proactively drive.
            </p>
            <div className="flex flex-wrap gap-x-3 items-center ml-10">
              <Button content="SEE PROGRAMS"></Button>
              <Button content="LEARN MORE"></Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="banner_3"
            className="w-full h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-6xl">Campus life @ Unisco</h1>
            <p className="max-w-2xl text-xl leading-relaxed font-normal text-center">
              Proactively utilize open-source users for process-centric total
              linkage. Energistically reinvent web-enabled initiatives with
              premium processes. Proactively drive.
            </p>
            <div className="flex flex-wrap gap-x-3 items-center ml-10">
              <Button content="CUMPAS LIFE"></Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="banner_2"
            className="w-full h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-6xl">We foster wisdom</h1>
            <p className="max-w-2xl text-xl leading-relaxed font-normal text-center">
              Proactively utilize open-source users for process-centric total
              linkage. Energistically reinvent web-enabled initiatives with
              premium processes. Proactively drive.
            </p>
            <div className="flex flex-wrap gap-x-3 items-center ml-10">
              <Button content="SEE PROGRAMS"></Button>
              <Button content="LEARN MORE"></Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" text-white top-0 z-10 py-2 text-center absolute w-full">
        <ul className="flex justify-center items-center gap-x-6  text-2xl">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/about">Admissions</NavLink>
          </li>
          <li>
            <NavLink to="/about">Academics</NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">Research</NavLink>
          </li>
          <li>
            <NavLink to="/about">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
