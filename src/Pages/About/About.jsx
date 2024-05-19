import './About.css';
import Button from '../../Component/Button';
import welcome from '../../assets/about-welcome-img.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import user from '../../assets/testi-img.jpg';
import teacher1 from '../../assets/our-teachers_01.jpg';
import teacher2 from '../../assets/our-teachers_02.jpg';
import teacher3 from '../../assets/our-teachers_03.jpg';
import teacher4 from '../../assets/our-teachers_04.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Hero from '../../Component/Hero';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div className="mb-10" id="About">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Hero title={'About Us'}></Hero>
      <div className="px-3 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-y-4 items-center  gap-x-5">
        <div className="space-y-3 md:space-y-5 lg:w-4/6">
          <h1 className="text-3xl md:text-5xl font-semibold">What we are</h1>
          <p className="md:text-xl text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <p className="md:text-xl text-gray-600">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
          <Button content="VIEW OUR COURSE"></Button>
        </div>
        <div className="w-full lg:w-2/6">
          <img className="w-full h-full" src={welcome} alt="" />
        </div>
      </div>
      <div className="bg-[#F2F2F2] py-16 mt-8">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">
          Our Students Says
        </h1>
        <div className="lg:w-1/2 mx-auto mt-6">
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
              <div className="flex flex-col  items-center justify-center  gap-y-5">
                <div className="border border-[#cbb58b] p-3 rounded-full text-[#cbb58b] text-3xl">
                  <FaQuoteLeft> </FaQuoteLeft>
                </div>
                <div>
                  <p className="text-xl font-normal text-center">
                    Lorem Ipsum has been the industry is standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                    Printing and typesetting industry. It has survived not only
                    five centuries.
                  </p>
                  <div className="flex items-center justify-center text-start gap-x-3 mt-3">
                    <div className="rounded-full overflow-hidden">
                      <img className="w-full" src={user} alt="" />
                    </div>
                    <div className="text-xl font-medium">
                      <p className="text-[#cbb58b]">Student Name</p>
                      <p>Top Rank Holder</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col  items-center justify-center  gap-y-5">
                <div className="border border-[#cbb58b] p-3 rounded-full text-[#cbb58b] text-3xl">
                  <FaQuoteLeft> </FaQuoteLeft>
                </div>
                <div>
                  <p className="text-xl font-normal text-center">
                    Lorem Ipsum has been the industry is standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                    Printing and typesetting industry. It has survived not only
                    five centuries.
                  </p>
                  <div className="flex items-center justify-center text-start gap-x-3 mt-3">
                    <div className="rounded-full overflow-hidden">
                      <img className="w-full" src={user} alt="" />
                    </div>
                    <div className="text-xl font-medium">
                      <p className="text-[#cbb58b]">Student Name</p>
                      <p>Top Rank Holder</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="my-8 px-3 md:px-16 lg:px-24">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">
          Our Teachers
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-4">
          <div className="flex items-center gap-x-3 shadow-lg">
            <div className="w-full h-full">
              <img
                className="w-full md:w-auto md:h-auto h-full"
                src={teacher1}
                alt=""
              />
            </div>
            <div className="flex gap-x-3 justify-between w-full">
              <div>
                <div className="border-b border-[#cbb58b] pb-3">
                  <p className="text-xl font-bold">Melissa Baker</p>
                  <p> MBA, PhD</p>
                </div>
                <div className="pt-3">
                  <p className="text-xl">
                    Syllabus :{' '}
                    <span className="text-[#cbb58b]">
                      {' '}
                      Economics, <br /> Marketing & Finance
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-xl flex flex-col justify-between cursor-pointer">
                <div className="border-l border-b p-3">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="border-l border-b p-3">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="border-l border-b p-3">
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 shadow-lg">
            <div className="w-full h-full">
              <img
                className="w-full md:w-auto md:h-auto h-full"
                src={teacher2}
                alt=""
              />
            </div>
            <div className="flex gap-x-3 justify-between w-full">
              <div>
                <div className="border-b border-[#cbb58b] pb-3">
                  <p className="text-xl font-bold">Raymond Salazar</p>
                  <p> MBA, PhD</p>
                </div>
                <div className="pt-3">
                  <p className="text-xl">
                    Syllabus :{' '}
                    <span className="text-[#cbb58b]">
                      {' '}
                      Economics, <br /> Marketing & Finance
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-xl flex flex-col justify-between cursor-pointer">
                <div className="border-l border-b p-3">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="border-l border-b p-3">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="border-l border-b p-3">
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 shadow-lg">
            <div className="w-full h-full">
              <img
                className="w-full md:w-auto md:h-auto h-full"
                src={teacher3}
                alt=""
              />
            </div>
            <div className="flex gap-x-3 justify-between w-full">
              <div>
                <div className="border-b border-[#cbb58b] pb-3">
                  <p className="text-xl font-bold">Alexander Bennett</p>
                  <p>PhD, Medical Sciences</p>
                </div>
                <div className="pt-3">
                  <p className="text-xl">
                    Syllabus :{' '}
                    <span className="text-[#cbb58b]">
                      {' '}
                      Economics, <br /> Marketing & Finance
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-xl flex flex-col justify-between cursor-pointer">
                <div className="border-l border-b p-3">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="border-l border-b p-3">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="border-l border-b p-3">
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3 shadow-lg">
            <div className="w-full h-full">
              <img
                className="w-full md:w-auto md:h-auto h-full"
                src={teacher4}
                alt=""
              />
            </div>
            <div className="flex gap-x-3 justify-between w-full">
              <div>
                <div className="border-b border-[#cbb58b] pb-3">
                  <p className="text-xl font-bold">Charles Murphy</p>
                  <p> MFA, PhD</p>
                </div>
                <div className="pt-3">
                  <p className="text-xl">
                    Syllabus :{' '}
                    <span className="text-[#cbb58b]">
                      {' '}
                      Economics, <br /> Marketing & Finance
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-xl flex flex-col justify-between cursor-pointer">
                <div className="border-l border-b p-3">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="border-l border-b p-3">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="border-l border-b p-3">
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button content="See All Teachers"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
