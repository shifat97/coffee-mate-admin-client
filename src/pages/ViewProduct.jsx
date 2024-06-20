import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function ViewProduct() {
  const product = useLoaderData();

  return (
    <div>
      <div className="mt-4">
        <Link to="/" className="flex items-center gap-4">
          <FaArrowLeft />
          <p className="text-2xl font-rancho font-semibold">Back to Home</p>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] flex items-center justify-center gap-[100px] p-[72px] mt-10">
        <div>
          <img className="rounded-xl" src={product.photo} alt="" />
        </div>
        <div>
          <p>
            <b>Name: </b>
            {product.name}
          </p>
          <p>
            <b>Chef: </b>
            {product.chef}
          </p>
          <p>
            <b>Supplier: </b>
            {product.supplier}
          </p>
          <p>
            <b>Taste: </b>
            {product.taste}
          </p>
          <p>
            <b>Category: </b>
            {product.category}
          </p>
          <p>
            <b>Price: </b>
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
