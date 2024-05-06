import course1 from '../../../assets/courses_1.jpg';
import course2 from '../../../assets/courses_2.jpg';
import course3 from '../../../assets/courses_3.jpg';
import course4 from '../../../assets/courses_4.jpg';
import { FaPlus } from 'react-icons/fa6';
import './Courses.css';
import Button from '../../../Component/Button';

const Courses = () => {
  return (
    <div id="Courses" className="bg-[#F2F2F2] px-3 md:px-16 lg:px-24  py-12">
      <h1 className="text-4xl font-semibold mb-5">Our Courses</h1>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-y-4 gap-x-2 md:gap-x-10 mb-10">
        <div className="course_box hover:translate-y-3 duration-300 bg-white relative cursor-pointer">
          <div className="relative flex items-center justify-center">
            <img className="w-full img" src={course1} alt="" />
            <p className="course_details font-semibold absolute text-white">
              Course Details
            </p>
          </div>
          <div className="px-5 py-3 md:py-10 space-y-2">
            <p className="text-xl md:text-2xl font-medium">Biochemistry</p>
            <p className="md:text-lg">
              When you unknown printer took a galley...
            </p>
          </div>
          <div className="absolute top-[47%] right-3 w-10 h-10 bg-[#534C49] text-white rounded-full flex justify-center items-center plus_icon duration-200">
            <FaPlus></FaPlus>
          </div>
        </div>
        <div className="course_box hover:translate-y-3 duration-300 cursor-pointer bg-white relative">
          <div className="relative flex items-center justify-center">
            <img className="w-full img" src={course2} alt="" />
            <p className="course_details font-semibold absolute text-white">
              Course Details
            </p>
          </div>
          <div className="py-3 md:py-10 px-5 space-y-2">
            <p className="text-xl md:text-2xl font-medium">History</p>
            <p className=" md:text-lg">
              When you unknown printer took a galley...
            </p>
          </div>
          <div className="plus_icon absolute top-[47%] right-3 w-10 h-10 bg-[#534C49] text-white rounded-full flex justify-center items-center duration-200">
            <FaPlus></FaPlus>
          </div>
        </div>
        <div className="course_box hover:translate-y-3 duration-300 cursor-pointer bg-white relative">
          <div className="relative flex items-center justify-center">
            <img className="w-full img" src={course3} alt="" />
            <p className="course_details font-semibold absolute text-black">
              Course Details
            </p>
          </div>
          <div className="px-5 py-3 md:py-10 space-y-2">
            <p className="text-xl md:text-2xl font-medium">Human Sciences</p>
            <p className="md:text-lg">
              When you unknown printer took a galley...
            </p>
          </div>
          <div className="absolute top-[47%] right-3 w-10 h-10 bg-[#534C49] text-white rounded-full flex justify-center items-center plus_icon duration-200">
            <FaPlus></FaPlus>
          </div>
        </div>
        <div className="course_box hover:translate-y-3 duration-300 cursor-pointer bg-white relative">
          <div className="relative flex items-center justify-center">
            <img className="w-full img" src={course4} alt="" />
            <p className="course_details font-semibold absolute text-black">
              Course Details
            </p>
          </div>
          <div className="px-5 py-3 md:py-10 space-y-2">
            <p className="text-xl md:text-2xl font-medium">Earth Sciences</p>
            <p className="md:text-lg">
              When you unknown printer took a galley...
            </p>
          </div>
          <div className="absolute top-[47%] right-3 w-10 h-10 bg-[#534C49] text-white rounded-full flex justify-center items-center plus_icon duration-200">
            <FaPlus></FaPlus>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button content="VIEW ALL COURSES"></Button>
      </div>
    </div>
  );
};

export default Courses;
