import PropTypes from "prop-types";
import { FaRegEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

function Product({ coffee, handleDataAfterDelete }) {
  const [deleted, setDeleted] = useState(false);

  const handleDeleteProduct = (_id) => {
    fetch(`http://localhost:5000/view-product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          handleDataAfterDelete(_id);
        }
      });
  };

  return (
    <div className="bg-[#F5F4F1] flex flex-col md:flex-row gap-4 items-center justify-between p-8 rounded-xl font-raleway text-[#1B1A1A] text-center md:text-left">
      <div>
        <img width={300} src={coffee.photo} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          <b>Name: </b>
          {coffee.name}
        </p>
        <p>
          <b>Chef: </b>
          {coffee.chef}
        </p>
        <p>
          <b>Price: </b>
          {coffee.price}
          <span className="ml-1">Taka</span>
        </p>
      </div>
      <div className="flex md:flex-col gap-2">
        <Link to={`/view-product/${coffee._id}`}>
          <div className="bg-[#D2B48C] p-2 rounded-md text-white cursor-pointer">
            <FaRegEye />
          </div>
        </Link>
        <Link to={`/update-coffee/${coffee._id}`}>
          <div className="bg-[#3C393B] p-2 rounded-md text-white cursor-pointer">
            <FaPen />
          </div>
        </Link>
        <div
          className="bg-[#EA4744] p-2 rounded-md text-white cursor-pointer"
          onClick={() =>
            document.getElementById(`my_modal_${coffee._id}`).showModal()
          }
        >
          <MdDelete />
        </div>
      </div>

      <dialog
        id={`my_modal_${coffee._id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {deleted ? (
            <FaRegCheckCircle className="text-[#A5DC86] text-[120px] text-center mx-auto" />
          ) : (
            <MdErrorOutline className="text-[#F8BB86] text-[120px] text-center mx-auto" />
          )}
          {deleted ? (
            <h3 className="font-raleway text-xl font-semibold text-center mt-4">
              Good Luck !!!
            </h3>
          ) : (
            <h3 className="font-raleway text-xl font-semibold text-center mt-4">
              Are you sure?
            </h3>
          )}
          {deleted ? (
            <p className="font-raleway text-md text-center mt-4">
              Deleted coffee details
            </p>
          ) : (
            <p className="font-raleway text-md text-center mt-4">
              Are you sure that you want to delete it?
            </p>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => setDeleted(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <button
              onClick={() => {
                setDeleted(true);
                handleDeleteProduct(coffee._id);
              }}
              className={`btn  ${
                deleted ? "bg-[#63C7F6]" : "bg-[#E64942]"
              } text-white focus:ring-0 hover:bg-black`}
            >
              OK
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

Product.propTypes = {
  coffee: PropTypes.object,
  handleDataAfterDelete: PropTypes.func,
};

export default Product;
