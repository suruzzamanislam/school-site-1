import Hero from '../../Component/Hero';
import './Admissions.css';
import form_icon from '../../assets/form-icon.png';
import Button from '../../Component/Button';
const Admissions = () => {
  return (
    <div className="mb-7">
      <Hero title="Admissions"></Hero>
      {/* rules */}
      <div className="px-3 md:px-16 lg:px-24 ">
        <h1 className="text-3xl md:text-4xl mb-2 font-semibold ">
          Admission Rules
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0  md:gap-x-5 border-b pb-4 border-gray-600">
          <div className="md:w-3/5">
            <p className="md:text-xl md:tracking-wide md:leading-relaxed text-gray-800 font-thin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries. It has survived not only five
              centuries, but also the leap into electronic.
            </p>
          </div>
          <div className="md:w-2/5">
            <ul className="addmissions_list">
              <li>Donec molestie felis eget justo pellentesque</li>
              <li>Phasellus et justo sit amet nisl fringilla semper.</li>
              <li>Nam vitae ligula at risus posuere laoreet.</li>
              <li>Mauris tempor ex id sapien tincidunt porta</li>
            </ul>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="px-3 md:px-16 lg:px-24 my-10">
        <div className="flex flex-col items-center text-center mb-9">
          <img src={form_icon} alt="" />
          <h1 className="text-3xl md:text-4xl font-semibold">Admission Form</h1>
        </div>
        <form>
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-5">
            <div className="md:w-1/2 space-y-5">
              <div className="flex gap-x-3 items-center">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="course_name"
                >
                  {' '}
                  Course Name
                </label>
                <select
                  className="focus:outline-blue-600 text-xl px-2 py-3 w-full border border-gray-500"
                  name="course_name"
                  id="course_name"
                >
                  <option value="select">select</option>
                  <option value="one">one</option>
                  <option value="two">two</option>
                  <option value="three">three</option>
                </select>
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="First_name"
                >
                  Join date
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="date"
                  name="First_name"
                  id="First_name"
                />
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="First_name"
                >
                  First name
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="First_name"
                  id="First_name"
                />
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="Last_name"
                >
                  Last name
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="Last_name"
                  id="Last_name"
                />
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="Email_address"
                >
                  Email address
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="Email_address"
                  id="Email_address"
                />
              </div>
              <div className="flex">
                <label className="text-xl text-gray-700 w-full" htmlFor="Phone">
                  Phone
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="Phone"
                  id="Phone"
                />
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="Date_of_birth"
                >
                  Date of birth
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="date"
                  name="Date_of_birth"
                  id="Date_of_birth"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-5">
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="Address"
                >
                  Address
                </label>
                <div className="space-y-5">
                  <input
                    className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                    type="text"
                    name="Address"
                    id="Address"
                    placeholder="city"
                  />
                  <input
                    className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                    type="text"
                    name="state"
                    id="state"
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="Education"
                >
                  Education
                </label>
                <input
                  className="focus:outline-blue-600 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="Education"
                  id="Education"
                />
              </div>
              <div className="flex">
                <label
                  className="text-xl text-gray-700 w-full"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="focus:outline-blue-600 md:h-52 text-xl px-2 py-2 w-full border border-gray-500"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button content="SUBMIT NOW"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admissions;
