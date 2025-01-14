import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user } = useAuth();


  return (
    <div>
      <div className="navbar bg-gradient-to-b from-black to-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/" className="hover:text-red-500">Home</Link></li>
              <li><Link to="/service" className="hover:text-red-500">Service</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
              <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-red-500 font-extrabold">Fitness</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-white bg-opacity-10 rounded-full">
            <li><Link to="/" className="hover:bg-red-500 rounded-full">Home</Link></li>
            <li><Link to="/service" className="hover:bg-red-500 rounded-full">Service</Link></li>
            <li><Link to="/contact" className="hover:bg-red-500 rounded-full">Contact</Link></li>
            <li><Link to="/about" className="hover:bg-red-500 rounded-full">Profile</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Cart Icon with click handler */}
          <Link to="/cart" className="w-10">
            <FaCartPlus />
          </Link>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul tabIndex={0} title={user.displayName} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-black rounded-box w-52">
                <li>
                  <button className="btn btn-sm btn-ghost">{user.displayName}</button>
                </li>
                <li>
                  <button className="btn btn-sm bg-red-500 text-white"
                    onClick={logOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signup" className="btn bg-red-500 text-white border-none hover:bg-red-600">Sign Up</Link>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
