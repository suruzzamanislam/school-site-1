import { Helmet } from 'react-helmet';
import Hero from '../../Component/Hero';
import research1 from '../../assets/research-img_01.jpg';
import research2 from '../../assets/research-img_02.jpg';
import research3 from '../../assets/research-img_03.jpg';
import research4 from '../../assets/resources-img_01.jpg';
import research5 from '../../assets/resources-img_02.jpg';
import research6 from '../../assets/resources-img_03.jpg';
import './Research.css';

import research_banner from '../../assets/research-features_img.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Research = () => {
  return (
    <div id="Research" className="mb-10">
      <Helmet>
        <title>Research</title>
      </Helmet>
      <Hero title="Research"></Hero>

      <div className="px-3 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-x-5 mb-10">
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-semibold mb-6 font-serif">
            Current Research
          </h1>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-x-6">
              <div className="md:w-2/4">
                <img className="w-full" src={research1} alt="" />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-semibold">Economic Development</p>
                <p className="text-xl text-gray-600 leading-9">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry is
                  standard dummy text ever since the 1500s, when an unknown
                  printer...
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-6">
              <div className="md:w-2/4">
                <img className="w-full" src={research2} alt="" />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-semibold">Centers and Institutes</p>
                <p className="text-xl text-gray-600 leading-9">
                  Desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search..
                </p>
                <ul className="list-disc list-inside text-xl font-semibold">
                  <li>Aenean ullamcorper</li>
                  <li>Morbi finibus dolor vitae enim</li>
                  <li>Nullam non nibh sed magna</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-6">
              <div className="md:w-2/4">
                <img className="w-full" src={research3} alt="" />
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-semibold">For Corporate Partners</p>
                <p className="text-xl text-gray-600 leading-9">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 mt-5 lg:mt-0">
          <h1 className="text-3xl font-semibold mb-6">Research News</h1>
          <div>
            <p className="text-[#cbb58b] font-semibold">16- 01- 17</p>
            <p className=" font-medium font-serif">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>

          <hr className="my-5" />

          <div>
            <p className="text-[#cbb58b] font-semibold">20- 01- 17</p>
            <p className=" font-medium font-serif">
              Phasellus porttitor tortor eu ipsum condimentum, non dictum quam
            </p>
          </div>

          <hr className="my-5" />

          <div>
            <p className="text-[#cbb58b] font-semibold">23- 01- 17</p>
            <p className=" font-medium font-serif">
              Quisque id lacus ut tellus faucibus pharetra tortor eu ipsum
              condimentum...{' '}
            </p>
          </div>

          <div className="mt-9 ">
            <iframe
              className="w-full h-[197px
                
              ]"
              src="https://www.youtube.com/embed/l9jVZB6gQ5U?rel=0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 relative">
        <img className="w-full h-full" src={research_banner} alt="" />
        <div className="bg-[#CBB58B] md:w-2/3 lg:w-2/4 text-gray-700 px-3 py-3 md:px-5 md:py-9 lg:px-10 lg:py-16 md:space-y-4 text-center md:relative md:-mt-36 lg:-mt-48 mx-auto">
          <p className="text-2xl md:text-4xl font-medium font-sans">
            Research with Purpose
          </p>
          <p className="text-lg">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum...
          </p>
        </div>
      </div>
      <div className="px-3 md:px-16 lg:px-24 mt-16">
        <h1 className="text-4xl mb-12 font-semibold font-sans text-gray-600 text-center">
          Resources
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research4} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Proposals and awards »
              </p>
              <p className="text-xl font-sans text-gray-800">
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident crambled it.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research5} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Integrity and compliance »
              </p>
              <p className="text-xl font-sans text-gray-800">
                Dustry is standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research6} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Centers and institutes »
              </p>
              <p className="text-xl font-sans text-gray-800">
                Readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research4} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Proposals and awards »
              </p>
              <p className="text-xl font-sans text-gray-800">
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident crambled it.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research5} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Integrity and compliance »
              </p>
              <p className="text-xl font-sans text-gray-800">
                Dustry is standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center space-y-5">
              <img className="rounded-full" src={research6} alt="" />
              <p className="text-2xl font-semibold font-sans">
                Centers and institutes »
              </p>
              <p className="text-xl font-sans text-gray-800">
                Readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Research;
