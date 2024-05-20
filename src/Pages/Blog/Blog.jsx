import Hero from '../../Component/Hero';
import blog1 from '../../assets/blog-img_01.jpg';
import blog2 from '../../assets/blog-img_02.jpg';
import blog3 from '../../assets/blog-img_03.jpg';
import { FaUser } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa6';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { PiGreaterThan, PiLessThan } from 'react-icons/pi';

const Blog = () => {
  return (
    <div className="mb-11">
      <Hero title="Blog"></Hero>

      <div className="px-3 md:px-16 lg:px-44 gap-x-10 flex mt-20">
        <div className="w-2/3 space-y-8">
          {/* cards */}
          <div className="">
            <div className="flex relative">
              <div className=" text-white absolute -left-12 top-[50%] h-full my-auto font-semibold font-serif ">
                <p className="bg-[#392F2F] px-4 py-2 text-xl">15-08-17</p>
              </div>
              <img className="w-full" src={blog1} alt="" />
            </div>
            <div className="pl-10 py-3">
              <h1 className="text-xl font-serif font-semibold">
                Blog Heading here One line
              </h1>
              <div className="flex gap-x-4 items-center">
                <p className="flex items-center">
                  <FaUser className="mr-2"></FaUser> admin
                </p>
                <span>|</span>
                <p className="flex items-center">
                  <FaBookOpen className="mr-2"></FaBookOpen> education
                </p>
              </div>
              <p className="my-5 text-xl font-serif leading-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </p>
              <a className="underline font-semibold font-sans" href="#">
                Read More
              </a>

              <div className="flex gap-x-3 items-center justify-end text-gray-500 border-y py-2 border-gray-500 mt-4">
                <p className="text-lg">Share:</p>
                <FaGooglePlusG></FaGooglePlusG>
                <FaTwitter></FaTwitter>
                <FaFacebookF></FaFacebookF>
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative">
              <div className=" text-white absolute -left-12 top-[50%] h-full my-auto font-semibold font-serif ">
                <p className="bg-[#392F2F] px-4 py-2 text-xl">20-08-17</p>
              </div>
              <img className="w-full" src={blog2} alt="" />
            </div>
            <div className="pl-10 py-3">
              <h1 className="text-xl font-serif font-semibold">
                Blog Heading here One line
              </h1>
              <div className="flex gap-x-4 items-center">
                <p className="flex items-center">
                  <FaUser className="mr-2"></FaUser> admin
                </p>
                <span>|</span>
                <p className="flex items-center">
                  <FaBookOpen className="mr-2"></FaBookOpen> education
                </p>
              </div>
              <p className="my-5 text-xl font-serif leading-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </p>
              <a className="underline font-semibold font-sans" href="#">
                Read More
              </a>

              <div className="flex gap-x-3 items-center justify-end text-gray-500 border-y py-2 border-gray-500 mt-4">
                <p className="text-lg">Share:</p>
                <FaGooglePlusG></FaGooglePlusG>
                <FaTwitter></FaTwitter>
                <FaFacebookF></FaFacebookF>
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative">
              <div className=" text-white absolute -left-12 top-[50%] h-full my-auto font-semibold font-serif ">
                <p className="bg-[#392F2F] px-4 py-2 text-xl">22-08-17</p>
              </div>
              <img className="w-full" src={blog3} alt="" />
            </div>
            <div className="pl-10 py-3">
              <h1 className="text-xl font-serif font-semibold">
                Blog Heading here One line
              </h1>
              <div className="flex gap-x-4 items-center">
                <p className="flex items-center">
                  <FaUser className="mr-2"></FaUser> admin
                </p>
                <span>|</span>
                <p className="flex items-center">
                  <FaBookOpen className="mr-2"></FaBookOpen> education
                </p>
              </div>
              <p className="my-5 text-xl font-serif leading-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </p>
              <a className="underline font-semibold font-sans" href="#">
                Read More
              </a>

              <div className="flex gap-x-3 items-center justify-end text-gray-500 border-y py-2 border-gray-500 mt-4">
                <p className="text-lg">Share:</p>
                <FaGooglePlusG></FaGooglePlusG>
                <FaTwitter></FaTwitter>
                <FaFacebookF></FaFacebookF>
              </div>
            </div>
          </div>
          {/* tabs */}
          <div className="flex items-center justify-center gap-x-4">
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm text-white bg-[#cbb58b] hover:bg-[#b8a581] rounded-s-md">
              <PiLessThan></PiLessThan>
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#b8a581] hover:text-white">
              1
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#b8a581] hover:text-white">
              2
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#b8a581] hover:text-white">
              3
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#b8a581] hover:text-white">
              4
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#b8a581] hover:text-white">
              5
            </button>
            <button className="border w-9 h-9 flex items-center justify-center rounded-e-md text-white bg-[#cbb58b] hover:bg-[#b8a581]">
              <PiGreaterThan></PiGreaterThan>
            </button>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default Blog;
