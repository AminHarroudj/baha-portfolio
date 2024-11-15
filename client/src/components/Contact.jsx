import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Contact() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center text-white text-2xl mx-2">
        <h1 className="text-black text-4xl md:text-5xl font-medium text-center">Contact Me Here</h1>
        <div className="flex max-md:flex-col justify-center items-center gap-16 bg-[#006d77] py-8 px-10 md:px-20 rounded-3xl">
          <div>
            <form
              action=""
              className="flex flex-col justify-center items-start gap-4 md:w-96"
            >
              <label htmlFor="">Full Name :</label>
              <input
                type="text"
                className="w-full outline-none py-2 px-10 rounded-full text-black"
              />
              <label htmlFor="">Phone Number :</label>
              <input
                type="number"
                className="w-full outline-none py-2 px-10 rounded-full text-black"
              />
              <label htmlFor="">Email :</label>
              <input
                type="email"
                className="w-full outline-none py-2 px-10 rounded-full text-black"
              />
              <label htmlFor="">Message :</label>
              <input
                type="text"
                className="w-full outline-none py-2 px-10 rounded-full text-black"
              />

              <button className="bg-[#e29578] py-2 px-16 rounded-full mt-2 hover:scale-110 duration-150">
                Send
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-6">
              <FaPhoneAlt className="text-3xl text-[#e29578]" />
              <p>0549817498</p>
            </div>
            <div className="flex items-center gap-6">
              <IoMail className="text-3xl text-[#e29578]" />
              <p>baha@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <FaFacebook className="text-3xl cursor-pointer hover:scale-125 duration-150"/>
              <RiInstagramFill className="text-3xl cursor-pointer hover:scale-125 duration-150"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
