import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="xl:container xl:mx-auto min-w-[340px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
