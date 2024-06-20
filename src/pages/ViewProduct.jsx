import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function ViewProduct() {
  return (
    <div>
      <div>
        <Link to="/" className="flex items-center gap-4">
          <FaArrowLeft />
          <p className="text-2xl font-rancho font-semibold">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}

export default ViewProduct;
