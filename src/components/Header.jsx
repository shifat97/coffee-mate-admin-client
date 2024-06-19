import logo from "../assets/more/logo1.png";

function Header() {
  return (
    <div className="bg-header-bg flex justify-center items-center gap-6 py-6">
      <img width={75} height={90} src={logo} alt="" />
      <h1 className="font-rancho text-[40px] lg:text-[60px] text-white">
        Coffee Mate Admin
      </h1>
    </div>
  );
}

export default Header;
