import { Link } from "react-router-dom";
import image404 from "../assets/404/404.gif";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaArrowLeft } from "react-icons/fa6";

function Error() {
  return (
    <div>
      <Header />
      <Link to="/" className="flex items-center justify-center gap-4 mt-16">
        <FaArrowLeft />
        <p className="text-2xl font-rancho font-semibold">Back to Home</p>
      </Link>
      <img src={image404} alt="" />
      <Footer />
    </div>
  );
}

export default Error;
