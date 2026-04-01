import React from "react";
const NavBar = ({ carts }) => {
  return (
    <div className="navbar px-4">


      <div className="navbar-start">


        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>


        <h1 className="text-2xl md:text-3xl font-bold text-[#9333ea] cursor-pointer">
          DigiTools
        </h1>

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3 md:gap-5">


        <div className="relative">
          <button className="text-xl">
            🛒
          </button>

          {carts.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {carts.length}
            </span>
          )}
        </div>

        <p className="hidden sm:block cursor-pointer">Login</p>


        <a className="btn bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] rounded-full text-white text-sm md:text-base px-4 md:px-6">
          Get in Touch
        </a>

      </div>

    </div>
  );
};

export default NavBar;