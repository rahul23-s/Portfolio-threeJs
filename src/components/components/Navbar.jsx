import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { SvgIcon } from "@mui/material";
import LaptopLogo from "../../assets/laptop-icon.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Navbar = ({ activeSection, setActiveSection, isMobile }) => {
  const [toggle, setToggle] = useState(false);

  // Scroll to the section when the URL hash changes
  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    if (activeSection === "") {
      window.history.replaceState(null, null, window.location.pathname);
    } else if (activeSection) {
      window.history.replaceState(null, null, `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <nav
      className={`${styles.paddingX} ${
        !toggle ? "heightBackToNormal" : "increaseHeight"
      } w-full flex items-center py-5 fixed top-0 z-20 blur-backdrop neon-shadow ${
        isMobile ? "" : "dynamic-island"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto self-start">
        <Link
          to="/"
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => {
            setActiveSection("");
            window.scrollTo(0, 0);
          }}
        >
          <Player
            src={LaptopLogo}
            loop
            autoplay
            className="w-10 h-10 object-contain scale-250 "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rahul &nbsp;S
            <span className="cursor-pointer sm:block hidden">harma</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeSection === link.title
                  ? link.id === "contact"
                    ? "contact-nav-link"
                    : "active-nav-link"
                  : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer nav-link`}
              onClick={() => setActiveSection(link.id)}
            >
              <a
                className="cursor-pointer flex justify-between items-center"
                href={`#${link.id}`}
              >
                <SvgIcon
                  component={link.icon}
                  alt={link.title}
                  className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-pointer mr-2"
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
            } object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hideDropNav" : "showDropNav"
            } p-6 flex absolute right-0 mx-2 my-2 min-w-[140px] w-[95%] z-10 rounded-l`}
          >
            <ul className="list-none w-[100%] flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeSection === link.title
                      ? link.id === "contact"
                        ? "contact-nav-link"
                        : "active-nav-link"
                      : "text-white"
                  } font-medium cursor-pointer text-[16px] nav-link`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className="cursor-pointer flex justify-between items-center"
                  >
                    <SvgIcon
                      component={link.icon}
                      alt={link.title}
                      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-pointer mr-2"
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
