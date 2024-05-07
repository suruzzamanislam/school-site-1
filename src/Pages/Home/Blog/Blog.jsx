import blog1 from '../../../assets/blog-img_1.jpg';
import blog2 from '../../../assets/blog-img_2.jpg';
import blog3 from '../../../assets/blog-img_3.jpg';
import blog4 from '../../../assets/blog-img_4.jpg';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaLink } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { TiMediaPlayOutline } from 'react-icons/ti';

const Blog = () => {
  return (
    <div className="px-3 md:px-16 lg:px-24 py-16 bg-[#F2F2F2]">
      <h1 className="text-4xl font-semibold mb-5">Our Blog</h1>
      <NavLink>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="md:col-span-2 bg-white">
            <img className="w-full" src={blog1} alt="" />
            <div className="px-3 py-1">
              <p className="text-2xl font-semibold">Eestibulum sodales</p>
              <div className="flex items-center gap-x-4">
                <p className="flex items-center gap-x-3 text-lg">
                  <FaRegUser></FaRegUser> by: admin
                </p>
                <p className="flex items-center gap-x-3 text-lg">
                  <MdOutlineWatchLater></MdOutlineWatchLater> 9- Nov-2016
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <img className="w-full" src={blog2} alt="" />
            <div className="px-3 py-1">
              <p className="text-2xl font-semibold">Variations of passages</p>
              <div className="flex items-center gap-x-4">
                <p className="flex items-center gap-x-3 text-lg">
                  <FaRegUser></FaRegUser> by: admin
                </p>
                <p className="flex items-center gap-x-3 text-lg">
                  <MdOutlineWatchLater></MdOutlineWatchLater> 9- Nov-2016
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <img className="w-full" src={blog3} alt="" />
            <div className="px-3 py-1">
              <p className="text-2xl font-semibold">Lorem Ipsum passage</p>
              <div className="flex items-center gap-x-4">
                <p className="flex items-center gap-x-3 text-lg">
                  <FaRegUser></FaRegUser> by: admin
                </p>
                <p className="flex items-center gap-x-3 text-lg">
                  <MdOutlineWatchLater></MdOutlineWatchLater> 9- Nov-2016
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 space-y-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <FaLink className="text-4xl"></FaLink>
            <p className="text-2xl pb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been dummy...
            </p>
            <div className="flex items-center gap-x-4">
              <p className="flex items-center gap-x-3 text-lg">
                <FaRegUser></FaRegUser> by: admin
              </p>
              <p className="flex items-center gap-x-3 text-lg">
                <MdOutlineWatchLater></MdOutlineWatchLater> 9- Nov-2016
              </p>
            </div>
          </div>
          <div className="bg-white">
            <div className="w-full relative flex items-center justify-center">
              <img className="w-full" src={blog4} alt="" />
              <div className="border-2 rounded-full flex items-center justify-center  p-2 border-white text-white absolute">
                <TiMediaPlayOutline className="text-3xl"></TiMediaPlayOutline>
              </div>
            </div>
            <div className="px-3 py-1">
              <p className="text-2xl font-semibold">Nam libero tempore</p>
              <div className="flex items-center gap-x-4">
                <p className="flex items-center gap-x-3 text-lg">
                  <FaRegUser></FaRegUser> by: admin
                </p>
                <p className="flex items-center gap-x-3 text-lg">
                  <MdOutlineWatchLater></MdOutlineWatchLater> 9- Nov-2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Blog;
