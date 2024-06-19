import PropTypes from "prop-types";
import { FaRegEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Product({ coffee }) {
  return (
    <div className="bg-[#F5F4F1] flex flex-col md:flex-row gap-4 items-center justify-between p-8 rounded-xl font-raleway text-[#1B1A1A] text-center md:text-left">
      <div>
        <img src={coffee.photo} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          <b>Name: </b>
          {coffee.coffee_name}
        </p>
        <p>
          <b>Chef: </b>
          {coffee.chef_name}
        </p>
        <p>
          <b>Price: </b>
          {coffee.price}
          Taka
        </p>
      </div>
      <div className="flex md:flex-col gap-2">
        <div className="bg-[#D2B48C] p-2 rounded-md text-white cursor-pointer">
          <FaRegEye />
        </div>
        <Link to="/update-coffee">
          <div className="bg-[#3C393B] p-2 rounded-md text-white cursor-pointer">
            <FaPen />
          </div>
        </Link>
        <div className="bg-[#EA4744] p-2 rounded-md text-white cursor-pointer">
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  coffee: PropTypes.object,
};

export default Product;
