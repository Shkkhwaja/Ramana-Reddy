import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../Images/navLogo.png";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';



function Header() {
    const [openNav, setOpenNav] = useState(false)
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex relative left-0 2xl:-left-[18em] ">
            <img src={navLogo} className="h-16 md:h-20  " alt="Logo" />
          </Link>
          <div class="absolute left-[6em] top-[1.5em] text-[#a80000dc] md:left-[8.5em] font-bold tracking-wide font-mono">
    <h2 class="text-[15px] md:text-[20px]">
        Ramana Reddy Luxury 
        <span class="text-[15px] md:text-[18px] absolute top-6 left-[1em]">
          Gents & ladies
          </span>
    </h2>
</div>

          <div>
            <h2 className="text-[#a80000dc]  md:relative left-[10em] hidden ">
              || कनका दुर्गा ||
            </h2>
          </div>
          {/* <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div> */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="aboutus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="ourfacilities"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Our Facilities
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contactus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

          </div>
          <h2 className="text-2xl absolute right-6 lg:hidden " onClick={() => setOpenNav(!openNav)}><Menu /></h2>

        </div>
      </nav>










{/* Mobile Responsive */}

<div className={`w-[15em] h-[41em] bg-white absolute top-0 right-0 shadow-md md:fixed transition-all duration-300 ${openNav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <aside>
            <h2 className="absolute right-6 top-8 text-[30px]" onClick={() => setOpenNav(!openNav)}><X /></h2>
        <ul className=" mt-4 text-xl relative top-10 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `absolute left-6 my-[2em] duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="aboutus"
                  className={({ isActive }) =>
                    `absolute left-6 my-[4em] duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="ourfacilities"
                  className={({ isActive }) =>
                    `absolute left-6 my-[6em] duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Our Facilities
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="gallery"
                  className={({ isActive }) =>
                    `absolute left-6 my-[8em] duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contactus"
                  className={({ isActive }) =>
                    `absolute left-6 my-[10em] duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            
        </aside>
      </div>
    </header>
  );
}

export default Header;
