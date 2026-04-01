const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className=" text-2xl font-bold text-[#9333ea] cursor-pointer font-bold text-3xl">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button  className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <span>🛒</span> 
            </button>
        <p>Login</p>
        <a className="btn bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;