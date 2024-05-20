import Hero from '../../Component/Hero';
import { FaRegUser } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { MdErrorOutline } from 'react-icons/md';

const Contact = () => {
  return (
    <div>
      <Hero title="Contact Us"></Hero>
      <div className="space-y-10">
        <h1 className="text-center text-3xl font-sans font-medium">
          Contact Details
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:w-5/6 lg:w-3/4 bg-[#CBB58B] mx-auto p-3 md:p-6 lg:p-10">
          <form className="md:w-1/2 md:pr-5 lg:pr-20 space-y-6">
            <h1 className="text-2xl font-semibold font-serif text-white">
              Leave a message
            </h1>
            <div>
              <input
                className="w-full px-3 py-3 rounded-sm placeholder:text-lg focus:outline-none"
                type="text"
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                className="w-full px-3 py-3 rounded-sm placeholder:text-lg focus:outline-none"
                type="email"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                className="w-full px-3 py-3 rounded-sm placeholder:text-lg focus:outline-none"
                type="text"
                placeholder="Phone"
                name=""
                id=""
              />
            </div>
            <div>
              <textarea
                className="w-full h-28 px-3 py-2 rounded-sm placeholder:text-lg focus:outline-none"
                type="text"
                placeholder="Message"
                name=""
                id=""
              />
            </div>
            <button className="border-2 border-white text-white hover:text-gray-400 px-8 py-2 hover:bg-white duration-200 text-xl">
              SUBMIT
            </button>
          </form>
          <div className="relative my-5 md:my-0 flex justify-center items-center">
            <span className="bg-[#b39c71] relative z-10 flex items-center justify-center text-white font-semibold font-serif  w-12 h-12 rounded-full">
              OR
            </span>
            <span className="w-full md:w-[1px]  absolute bg-gray-800 h-[1px] md:h-full"></span>
          </div>
          <div className="md:w-1/2 md:pl-5 lg:pl-20 space-y-6 text-white">
            <h1 className="text-2xl font-semibold font-serif text-white">
              Location
            </h1>
            <div className="space-y-10">
              <div className="flex gap-x-3">
                <FaRegUser className="mt-1"></FaRegUser>
                <p className="text-xl font-serif">
                  Address <br /> Unisco university <br /> Albany, NY <br /> USA.
                  11001
                </p>
              </div>
              <div className="flex gap-x-3">
                <IoMailOutline className="mt-1"></IoMailOutline>
                <div className="text-xl font-serif">
                  <p>Email </p>
                  <p>info@unisco.edu</p>
                  <p>admin@unisco.edu</p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <FaPhone className="mt-1"></FaPhone>
                <div className="text-xl font-serif">
                  <p>Phone</p>
                  <p>+8801880992236</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[40vh] md:h-[90vh] relative md:-mt-48 -z-10 bg-[#E8EAED] flex flex-col justify-center items-center text-center">
        <MdErrorOutline className="text-6xl mb-3"></MdErrorOutline>
        <p className="text-3xl">Oops! Something went wrong.</p>
        <p className="text-sm mt-3">
          This page did not load Google Maps correctly. See the JavaScript
          console for technical details.
        </p>
      </div>
    </div>
  );
};

export default Contact;
