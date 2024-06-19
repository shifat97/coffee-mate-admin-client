import logo from "../assets/more/logo1.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-footer-bg text-[#1B1A1A] p-8 lg:p-16 flex flex-col lg:flex-row gap-[100px] lg:items-center lg:justify-between">
      <div className="lg:w-1/2">
        <img width={75} height={90} src={logo} alt="" />
        <h1 className="font-rancho text-[35px] lg:text-[45px] text-[#331A15] font-semibold mt-4">
          Coffee Mate Admin
        </h1>
        <p className="text-xl mt-4">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-2 text-[30px] lg:text-[40px] mt-4">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <h1 className="font-rancho text-[35px] lg:text-[45px] text-[#331A15] font-semibold mt-4">
          Get in Touch
        </h1>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <p>+880 1704775275</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            <p>m.shifatbinreza@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <h1 className="font-rancho text-[35px] lg:text-[45px] text-[#331A15] font-semibold mt-4">
          Contact With Us
        </h1>
        <form className="mt-6 flex flex-col gap-2">
          <input
            className="px-4 py-2 w-full"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="px-4 py-2 w-full"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="px-4 py-2 h-[130px]"
            name="message"
            placeholder="Message"
          ></textarea>
          <input
            className="text-[#331A15] font-rancho text-2xl font-semibold border-[#331A15] border-2 rounded-full py-2 hover:bg-[#331A15] hover:text-white cursor-pointer mt-4"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
}

export default Footer;
