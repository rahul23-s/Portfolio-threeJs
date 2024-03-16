import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { SvgIcon } from "@mui/material";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 blur-backdrop neon-shadow `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-6 cursor-hover"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className='w-10 h-10 object-contain scale-200 "'
          />
          <p className="text-white text-[18px] font-bold cursor-hover flex">
            Rahul &nbsp;S
            <span className="cursor-hover sm:block hidden">harma</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeSection === link.title
                  ? link.id == "contact"
                    ? "contact-nav-link"
                    : "active-nav-link"
                  : "text-white"
              } hover:text-white text-[18px] font-medium cursor-hover nav-link`}
              onClick={() => setActiveSection(link.title)}
            >
              <a
                className="cursor-hover flex justify-between items-center"
                href={`#${link.id}`}
              >
                <SvgIcon
                  component={link.icon}
                  alt={link.title}
                  className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
                />

                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="navmenu"
            className={`${
              toggle ? "w-[15px] h-[15px]" : "w-[28px] h-[28px]"
            } object-contain cursor-hover`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hideDropNav" : "showDropNav"
            } p-6 dropNav black-gradient flex absolute right-0 mx-2 my-2 min-w-[140px] w-[95%] z-10 rounded-l`}
          >
            <ul className="list-none w-[100%] flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeSection === link.title
                      ? link.id == "contact"
                        ? "contact-nav-link"
                        : "active-nav-link"
                      : "text-white"
                  } font-medium cursor-hover text-[16px] nav-link`}
                  onClick={() => {
                    setActiveSection(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className="cursor-hover flex justify-between items-center"
                  >
                    <SvgIcon
                      component={link.icon}
                      alt={link.title}
                      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
                    />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
