import serviceLogo1 from "../assets/icons/1.png";
import serviceLogo2 from "../assets/icons/2.png";
import serviceLogo3 from "../assets/icons/3.png";
import serviceLogo4 from "../assets/icons/4.png";

function Service() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 lg:px-16 py-12 bg-[#ECEAE3]">
      <div>
        <img src={serviceLogo1} alt="" />
        <h1 className="font-rancho text-[#331A15] text-[35px]">
          Awesome Aroma
        </h1>
        <p className="font-raleway text-[#1B1A1A]">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div>
        <img src={serviceLogo2} alt="" />
        <h1 className="font-rancho text-[#331A15] text-[35px]">High Quality</h1>
        <p className="font-raleway text-[#1B1A1A]">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div>
        <img src={serviceLogo3} alt="" />
        <h1 className="font-rancho text-[#331A15] text-[35px]">Pure Grades</h1>
        <p className="font-raleway text-[#1B1A1A]">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div>
        <img src={serviceLogo4} alt="" />
        <h1 className="font-rancho text-[#331A15] text-[35px]">
          Proper Roasting
        </h1>
        <p className="font-raleway text-[#1B1A1A]">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
  );
}

export default Service;
