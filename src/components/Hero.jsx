function Hero() {
  return (
    <div className="bg-hero-bg text-white bg-cover bg-no-repeat bg-center h-[800px] flex justify-center items-center">
      <div className="max-w-[930px] text-center px-6">
        <h1 className="text-[45px] lg:text-[55px] font-rancho">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="font-raleway mb-6">
          It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="bg-[#E3B577] text-[#242222] font-rancho text-xl px-4 py-1 block mx-auto">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
