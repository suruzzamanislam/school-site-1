import './count.css';
import { GiTeacher } from 'react-icons/gi';
import { PiStudentFill } from 'react-icons/pi';
import { SiHelpscout } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';

const Count = () => {
  return (
    <div
      id="count"
      className="px-3 md:px-16 lg:px-24 grid py-10 text-white grid-cols-4 justify-between"
    >
      <div className="flex flex-col justify-center items-center gap-y-2">
        <GiTeacher className="text-7xl"></GiTeacher>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p className="text-4xl">39</p>
          <p className="text-3xl">Teachers</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <PiStudentFill className="text-7xl"></PiStudentFill>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p className="text-4xl">2600</p>
          <p className="text-3xl">Students</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <SiHelpscout className="text-7xl"></SiHelpscout>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p className="text-4xl">56</p>
          <p className="text-3xl">Courses</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <FaTrophy className="text-7xl"></FaTrophy>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <p className="text-4xl">13</p>
          <p className="text-3xl">Exp.</p>
        </div>
      </div>
    </div>
  );
};

export default Count;
