import Hero from '../../Component/Hero';
import './Academics.css';
const Academics = () => {
  return (
    <div id="academics">
      <Hero title="Academics"></Hero>

      <div className="px-5 lg:px-52 mb-10">
        <div className="flex text-center justify-center items-center flex-col">
          <h1 className="text-3xl md:text-5xl font-semibold mb-2">
            Our Courses
          </h1>
          <p className="md:text-xl text-gray-700">
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
      </div>
    </div>
  );
};

export default Academics;
