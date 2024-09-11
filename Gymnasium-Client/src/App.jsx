import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-inter">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet></Outlet>
      </main>
      <Footer/>
    </div>
  );
};
export default App;
