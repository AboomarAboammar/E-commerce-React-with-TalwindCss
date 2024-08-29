import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
function Navbar() {
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT US</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search products"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="my profile"
            />
          </Link>

          <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="hover:text-black cursor-pointer">My profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="shopping cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4  text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/*Sidebar menu for mobile screen*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div
          onClick={() => setVisible(false)}
          className="flex flex-col text-gray-600"
        >
          <div className="flex items-center gap-4 p-3 cursor-pointer max-w-fit">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-red-700 "> Back</p>
          </div>
          <NavLink className="border py-2 pl-6 " to="/">
            Home
          </NavLink>
          <NavLink className="border py-2 pl-6 " to="/collection">
            Collection
          </NavLink>
          <NavLink className="border py-2 pl-6 " to="/about">
            About
          </NavLink>
          <NavLink className="border py-2 pl-6 " to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
