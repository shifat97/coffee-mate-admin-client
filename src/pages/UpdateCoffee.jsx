import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function UpdateCoffee() {
  return (
    <div className="my-[120px]">
      <div>
        <Link to="/" className="flex items-center gap-4">
          <FaArrowLeft />
          <p className="text-2xl font-rancho font-semibold">Back to Home</p>
        </Link>
      </div>
      <div className="mt-[50px] bg-[#F4F3F0] p-8 lg:p-16">
        <h1 className="font-rancho font-semibold text-[#374151] text-[35px] lg:text-[45px] text-center">
          Update Existing Coffee Details
        </h1>
        <p className="font-raleway text-center text-gray-500 mt-2">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="block font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="name"
              placeholder="Enter your coffee name"
            />
          </div>
          <div>
            <label className="block font-bold" htmlFor="chef">
              Chef
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="chef"
              placeholder="Enter chef's name"
            />
          </div>
          <div>
            <label className="block font-bold" htmlFor="supplier">
              Supplier
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="supplier"
              placeholder="Enter supplier name"
            />
          </div>
          <div>
            <label className="block font-bold" htmlFor="taste">
              Taste
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </div>
          <div>
            <label className="block font-bold" htmlFor="category">
              Category
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="category"
              placeholder="Enter coffee category"
            />
          </div>
          <div>
            <label className="block font-bold" htmlFor="price">
              Price
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="price"
              placeholder="Enter coffee price"
            />
          </div>
          <div className="col-span-full">
            <label className="block font-bold" htmlFor="photo">
              Photo
            </label>
            <input
              className="p-4 mt-[16px] w-full"
              type="text"
              name="photo"
              placeholder="Enter photo url"
            />
          </div>
          <div className="col-span-full">
            <input
              className="px-4 py-2 mt-12 bg-[#D2B48C] border-2 border-[#331A15] w-full hover:bg-[#331A15] hover:text-white cursor-pointer"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCoffee;
