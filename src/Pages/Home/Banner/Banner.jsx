// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Button from '../../../Component/Button';
import Navbar from '../../Shared/Navbar/Navbar';
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
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            id="banner_1"
            className="w-full h-[50vh] md:h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-2xl md:text-6xl">
              Creative Thinking & Innovation
            </h1>
            <p className="max-w-2xl md:text-xl leading-relaxed font-normal text-center">
              Proactively utilize open-source users for process-centric total
              linkage. Energistically reinvent web-enabled initiatives with
              premium processes. Proactively drive.
            </p>
            <div className="flex flex-wrap gap-x-3 items-center md:ml-10">
              <Button content="SEE PROGRAMS"></Button>
              <Button content="LEARN MORE"></Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="banner_3"
            className="w-full h-[50vh] md:h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-2xl md:text-6xl">Campus life @ Unisco</h1>
            <p className="max-w-2xl md:text-xl leading-relaxed font-normal text-center">
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
            className="w-full h-[50vh] md:h-[90vh] flex flex-col items-center text-center space-y-6 justify-center text-white  font-semibold"
          >
            <h1 className="text-2xl md:text-6xl">We foster wisdom</h1>
            <p className="max-w-2xl md:text-xl leading-relaxed font-normal text-center">
              Proactively utilize open-source users for process-centric total
              linkage. Energistically reinvent web-enabled initiatives with
              premium processes. Proactively drive.
            </p>
            <div className="flex flex-wrap gap-x-3 items-center md:ml-10">
              <Button content="SEE PROGRAMS"></Button>
              <Button content="LEARN MORE"></Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Navbar></Navbar>
    </div>
  );
};

export default Banner;
