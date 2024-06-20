import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { useEffect, useState } from "react";
import Product from "./Product";
import cup1 from "../assets/cups/Rectangle 9.png";
import cup2 from "../assets/cups/Rectangle 10.png";
import cup3 from "../assets/cups/Rectangle 11.png";
import cup4 from "../assets/cups/Rectangle 12.png";
import cup5 from "../assets/cups/Rectangle 13.png";
import cup6 from "../assets/cups/Rectangle 14.png";
import cup7 from "../assets/cups/Rectangle 15.png";
import cup8 from "../assets/cups/Rectangle 16.png";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-[120px]">
      <p className="font-raleway text-center">--- Sip & Savor ---</p>
      <h1 className="font-rancho text-[45px] lg:text-[55px] text-center font-semibold text-[#331A15]">
        Our Popular Products
      </h1>
      <Link to="/add-coffee">
        <button className="bg-[#E3B577] font-rancho px-4 py-2 border-2 border-[#331A15] flex gap-2 items-center mx-auto rounded-md hover:bg-[#331A15] hover:text-white cursor-pointer">
          <p className="text-white">Add Coffee</p>
          <FaCoffee />
        </button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {data.map((d) => (
          <Product key={d._id} coffee={d} />
        ))}
      </div>
      <div className="my-[120px]">
        <p className="font-raleway text-[#1B1A1A] text-center">Follow Us Now</p>
        <h1 className="font-rancho font-semibold text-[#331A15] text-[45px] lg:text-[55px] text-center">
          Follow on Instagram
        </h1>
        <div className="grid grid-cols-4 justify-between gap-4 mt-10">
          <img src={cup1} alt="" />
          <img src={cup2} alt="" />
          <img src={cup3} alt="" />
          <img src={cup4} alt="" />
          <img src={cup5} alt="" />
          <img src={cup6} alt="" />
          <img src={cup7} alt="" />
          <img src={cup8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Products;
