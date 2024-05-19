import Hero from '../../Component/Hero';
import './Academics.css';
import courseImg1 from '../../assets/our-cources_01.jpg';
import courseImg2 from '../../assets/our-cources_02.jpg';
import courseImg3 from '../../assets/our-cources_03.jpg';
import courseImg4 from '../../assets/our-cources_04.jpg';
import courseImg5 from '../../assets/our-cources_05.jpg';
import courseImg6 from '../../assets/our-cources_06.jpg';
import courseImg7 from '../../assets/our-cources_07.jpg';
import courseImg8 from '../../assets/our-cources_08.jpg';

import { FaStar } from 'react-icons/fa6';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const Academics = () => {
  return (
    <div id="academics">
      <Hero title="Academics"></Hero>

      <div className="px-5 md:px-20 lg:px-28 mb-10">
        <div className="flex text-center justify-center items-center flex-col">
          <h1 className="text-3xl md:text-5xl font-semibold mb-2">
            Our Courses
          </h1>
          <p className="md:text-xl text-xl text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
        </div>
        <div className="bg-[#CBB58B] p-5 md:p-9 grid gap-y-3 md:grid-cols-5 gap-x-3 mt-5">
          <div>
            <select
              className=" text-xl px-2 py-3 w-full "
              name="course_name"
              id="course_name"
            >
              <option value="select">Select Course</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
          <div>
            <select
              className=" text-xl px-2 py-3 w-full "
              name="course_name"
              id="course_name"
            >
              <option value="select">Starts</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
          <div>
            <select
              className=" text-xl px-2 py-3 w-full "
              name="course_name"
              id="course_name"
            >
              <option value="select">Fee range</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
          <div>
            <select
              className=" text-xl px-2 py-3 w-full "
              name="course_name"
              id="course_name"
            >
              <option value="select">Length</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
          <div>
            <button className="bg-[#d8c299] uppercase font-semibold hover:bg-[#f0d6a7] shadow-xl duration-200 py-5 md:py-0 text-gray-600 w-full h-full ">
              Search
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-y-3 md:gap-y-6 md:grid-cols-2 gap-x-3">
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg1} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg2} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg3} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg4} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg5} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg6} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg7} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 border">
            <img src={courseImg8} alt="" />
            <div className="p-2 space-y-3">
              <p className="text-2xl font-semibold">Course Name</p>
              <div className="flex text-orange-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p className=" text-xl text-gray-700">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry. Lorem Ipsum has.
              </p>
              <div>
                <ul className="flex flex-wrap justify-between items-center">
                  <li>
                    <p className="text-xl text-[#cbb58b]">Duration</p>
                    <p className="font-semibold">1 Year</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Fee</p>
                    <p className="font-semibold">$500</p>
                  </li>
                  <li>
                    <p className="text-xl text-[#cbb58b]">Timing</p>
                    <p className="font-semibold">10 am-2 pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
