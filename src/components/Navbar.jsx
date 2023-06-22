import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { NavLinks, socials } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [hoveredItems, setHoveredItems] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [index]: true,
    }));
  };
  const handleMouseLeave = (index) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [index]: false,
    }));
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <div className="flex flex-row items-center">
          <Link
            to="/"
            className="flex items-align gap-2"
            onClick={() => {
              setActive("/");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain mr-4 bg-white-100 border border-black-300"
            />
            <p
              className={`
                hover:text-white-100 text-secondary transition duration-100 ease-in-out text-[18px] font-medium cursor-pointer flex`}
            >
              Emily &nbsp; Dawson &nbsp;
              <span className="md:block hidden">| &nbsp; Porfolio</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-evenly">
          <ul className="list-none hidden md:flex flex-row gap-10 items-center">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className={` hover:text-white-100 text-secondary text-[18px] font-medium cursor-pointer transition duration-100 ease-in-out`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <div className="flex gap-2 border-l border-secondary pl-10">
              {socials.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank">
                    <div
                      className={` rounded-full w-9 h-9 flex items-center cursor-pointer `}
                    >
                      <img
                        src={hoveredItems[index] ? link.hover : link.icon}
                        onMouseEnter={() => {
                          handleMouseEnter(index);
                        }}
                        onMouseLeave={() => {
                          handleMouseLeave(index);
                        }}
                        alt={link.company}
                        className={`transition duration-100 ease-in-out`}
                      />
                    </div>
                  </a>
                </li>
              ))}
            </div>
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-secondary`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                <div className="border-b border-secondary pb-3">
                  {NavLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium text-[16px] cursor-pointer`}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </div>

                <div className="flex gap-2">
                  {socials.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank">
                        <div
                          className={` rounded-full w-9 h-9 flex items-center cursor-pointer `}
                        >
                          <img src={link.icon} alt={link.company} />
                        </div>
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
