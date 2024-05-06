// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './Events.css';
const Events = () => {
  return (
    <div id="Event" className="px-3 md:px-16 lg:px-24 py-16">
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:gap-x-5">
        <div className="lg:w-1/2  ">
          <h1 className="text-4xl font-semibold mb-3">Upcoming Events</h1>
          <div id="event_img" className="relative h-[50vh]">
            <div className="p-5 absolute z-10">
              <p className="bg-[#957C63] text-white font-medium w-24 rounded-md flex justify-center items-center px-2 py-1 ">
                06-Nov-17
              </p>
              <div className="text-white mt-44 space-y-3">
                <p className="text-4xl p_unerline relative">Evnet Heading</p>
                <p className="text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the ...
                </p>
              </div>
            </div>
            <div className="w-full h-full  bg-gradient-to-b from-transparent to-black absolute top-0 left-0 "></div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <h1 className="text-4xl font-semibold mb-3">Important Dates</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed="500"
            autoplay={{
              delay: 1700,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="md:mt-7">
                <div className="flex gap-x-5 border-b border-gray-500 pb-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>05</span> <br />
                      <span>Oct.17</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Eestibulum sodales metus.
                    </h1>
                    <p className="md:text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5 pt-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>06</span> <br />
                      <span>Nov.19</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Integer faucibus nulla a ligula..
                    </h1>
                    <p className="md:text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" md:mt-7">
                <div className="flex gap-x-5 border-b border-gray-500 pb-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>15</span> <br />
                      <span>Jun.17</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Eestibulum sodales metus.
                    </h1>
                    <p className="text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5 pt-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>04</span> <br />
                      <span>Dec.19</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Integer faucibus nulla a ligula..
                    </h1>
                    <p className="md:text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" md:mt-7">
                <div className="flex gap-x-5 border-b border-gray-500 pb-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>05</span> <br />
                      <span>Oct.17</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Eestibulum sodales metus.
                    </h1>
                    <p className="md:text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5 pt-8">
                  <div className="bg-[#665c7c] p-3">
                    <p className="text-3xl text-center font-medium border p-2 text-white">
                      <span>06</span> <br />
                      <span>Nov.19</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl md:text-3xl p_unerline relative">
                      Integer faucibus nulla a ligula..
                    </h1>
                    <p className="md:text-lg">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Events;
