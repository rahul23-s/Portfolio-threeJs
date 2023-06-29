import logo from "./logo.gif";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";
import linkedin from "./linkedin.svg";
import resume from "./resume.svg";
import vue from "./vue.svg";
import angular from "./angular.svg";
import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import download from "./download.svg";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";
import scss from "./tech/scss.svg";
import fynd from "./company/fynd.png";
import fyndAcademy from "./company/fyndAcademy.jpg";
import kraftConcept from "./company/kraftConcept.jpg";

import astroLoader from "./astro-loader.json";
import carrent from "./carrent.png";
import babble from "./project/Babble.png";
import disneyClone from "./project/DisneyClone.png";
import portfolio from "./project/Portfolio.png";

// import contact from "./navIcons/contact.svg";
// import expIcon from "./navIcons/experience.svg";
// import about from "./navIcons/about.svg";
// import projectsIcon from "./navIcons/projects.svg";

const contact = () => {
  return (
    <svg
      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
      fill="#ffffff"
      height="800px"
      width="800px"
      version="1.1"
      id="Filled_Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Contact-Us-Filled">
          {" "}
          <path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const expIcon = () => {
  return (
    <svg
      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      fill="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          fill="#fff"
          d="M6.5,17h9.55c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h2.55c1.223,0,2.239-0.884,2.454-2.046 C29.67,14.729,31,13.277,31,11.5s-1.33-3.229-3.046-3.454C27.739,6.884,26.723,6,25.5,6h-6.55c-0.245-1.694-1.688-3-3.45-3 s-3.205,1.306-3.45,3H9.95C9.705,4.306,8.262,3,6.5,3C4.567,3,3,4.567,3,6.5S4.567,10,6.5,10c1.762,0,3.205-1.306,3.45-3h2.101 c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h6.55c0.672,0,1.236,0.447,1.426,1.058C25.268,8.333,24,9.764,24,11.5 s1.268,3.167,2.926,3.442C26.736,15.553,26.172,16,25.5,16h-2.55c-0.245-1.694-1.688-3-3.45-3s-3.205,1.306-3.45,3H6.5 c-1.223,0-2.239,0.884-2.454,2.046C2.33,18.271,1,19.723,1,21.5s1.33,3.229,3.046,3.454C4.261,26.116,5.277,27,6.5,27h2.55 c0.245,1.694,1.688,3,3.45,3s3.205-1.306,3.45-3h6.101c0.245,1.694,1.688,3,3.45,3c1.933,0,3.5-1.567,3.5-3.5S27.433,23,25.5,23 c-1.762,0-3.205,1.306-3.45,3H15.95c-0.245-1.694-1.688-3-3.45-3s-3.205,1.306-3.45,3H6.5c-0.672,0-1.236-0.447-1.426-1.058 C6.732,24.667,8,23.236,8,21.5s-1.268-3.167-2.926-3.442C5.264,17.447,5.828,17,6.5,17z M6.5,8C5.673,8,5,7.327,5,6.5S5.673,5,6.5,5 S8,5.673,8,6.5S7.327,8,6.5,8z M15.5,8C14.673,8,14,7.327,14,6.5S14.673,5,15.5,5S17,5.673,17,6.5S16.327,8,15.5,8z M26,11.5 c0-0.827,0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S28.327,13,27.5,13S26,12.327,26,11.5z M19.5,15c0.827,0,1.5,0.673,1.5,1.5 S20.327,18,19.5,18S18,17.327,18,16.5S18.673,15,19.5,15z M25.5,25c0.827,0,1.5,0.673,1.5,1.5S26.327,28,25.5,28S24,27.327,24,26.5 S24.673,25,25.5,25z M12.5,25c0.827,0,1.5,0.673,1.5,1.5S13.327,28,12.5,28S11,27.327,11,26.5S11.673,25,12.5,25z M6,21.5 C6,22.327,5.327,23,4.5,23S3,22.327,3,21.5S3.673,20,4.5,20S6,20.673,6,21.5z"
        />{" "}
      </g>
    </svg>
  );
};

const about = () => {
  return (
    <svg
      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{" "}
        <path
          d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{" "}
        <path
          d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{" "}
      </g>
    </svg>
  );
};

const projectsIcon = () => {
  return (
    <svg
      className="inline xs:w-5 xs:h-5 h-4 w-4 object-contain cursor-hover mr-2"
      fill="#ffffff"
      width="32px"
      height="32px"
      viewBox="0 0 100 100"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="network" /> <g id="connection" />{" "}
        <g id="page">
          {" "}
          <g>
            {" "}
            <path d="M92,4H32c-2.2,0-4,1.8-4,4v4h-4c-2.2,0-4,1.8-4,4v4h-4c-2.2,0-4,1.8-4,4v4H8c-2.2,0-4,1.8-4,4v60c0,2.2,1.8,4,4,4h60 c2.2,0,4-1.8,4-4v-4h4c2.2,0,4-1.8,4-4v-4h4c2.2,0,4-1.8,4-4v-4h4c2.2,0,4-1.8,4-4V8C96,5.8,94.2,4,92,4z M30,8c0-1.1,0.9-2,2-2 h60c1.1,0,2,0.9,2,2v6h-6.6c-0.7-1.2-2-2-3.4-2h-1h-6H30V8z M22,16c0-1.1,0.9-2,2-2h60c1.1,0,2,0.9,2,2v6h-6.6c-0.7-1.2-2-2-3.4-2 h-1h-6H22V16z M14,24c0-1.1,0.9-2,2-2h60c1.1,0,2,0.9,2,2v6h-6.6c-0.7-1.2-2-2-3.4-2h-1h-6H14V24z M8,30h60c1.1,0,2,0.9,2,2v6H6 v-6C6,30.9,6.9,30,8,30z M70,92c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V40h64V92z M78,84c0,1.1-0.9,2-2,2h-4V32h6V84z M86,76 c0,1.1-0.9,2-2,2h-4V24h6V76z M92,70h-4V16h6v52C94,69.1,93.1,70,92,70z" />{" "}
            <circle cx="53" cy="34" r="2" /> <circle cx="59" cy="34" r="2" />{" "}
            <circle cx="65" cy="34" r="2" /> <circle cx="61" cy="26" r="2" />{" "}
            <circle cx="67" cy="26" r="2" /> <circle cx="73" cy="26" r="2" />{" "}
            <circle cx="69" cy="18" r="2" /> <circle cx="75" cy="18" r="2" />{" "}
            <circle cx="81" cy="18" r="2" /> <circle cx="77" cy="10" r="2" />{" "}
            <circle cx="83" cy="10" r="2" /> <circle cx="89" cy="10" r="2" />{" "}
            <path d="M12,55h52c1.7,0,3-1.3,3-3v-6c0-1.7-1.3-3-3-3H12c-1.7,0-3,1.3-3,3v6C9,53.7,10.3,55,12,55z M11,46c0-0.6,0.4-1,1-1h52 c0.6,0,1,0.4,1,1v6c0,0.6-0.4,1-1,1H12c-0.6,0-1-0.4-1-1V46z" />{" "}
            <path d="M36,69H12c-1.7,0-3,1.3-3,3v16c0,1.7,1.3,3,3,3h24c1.7,0,3-1.3,3-3V72C39,70.3,37.7,69,36,69z M37,88c0,0.6-0.4,1-1,1H12 c-0.6,0-1-0.4-1-1V72c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1V88z" />{" "}
            <path d="M67,64H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h56c0.6,0,1-0.4,1-1S67.6,64,67,64z" />{" "}
            <path d="M67,59H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h56c0.6,0,1-0.4,1-1S67.6,59,67,59z" />{" "}
            <path d="M66,69H43c-0.6,0-1,0.4-1,1s0.4,1,1,1h23c0.6,0,1-0.4,1-1S66.6,69,66,69z" />{" "}
            <path d="M66,74H43c-0.6,0-1,0.4-1,1s0.4,1,1,1h23c0.6,0,1-0.4,1-1S66.6,74,66,74z" />{" "}
            <path d="M66,79H43c-0.6,0-1,0.4-1,1s0.4,1,1,1h23c0.6,0,1-0.4,1-1S66.6,79,66,79z" />{" "}
            <path d="M66,84H43c-0.6,0-1,0.4-1,1s0.4,1,1,1h23c0.6,0,1-0.4,1-1S66.6,84,66,84z" />{" "}
            <path d="M66,89H43c-0.6,0-1,0.4-1,1s0.4,1,1,1h23c0.6,0,1-0.4,1-1S66.6,89,66,89z" />{" "}
          </g>{" "}
        </g>{" "}
        <g id="support" /> <g id="configuration" /> <g id="cloud_storage" />{" "}
        <g id="password" /> <g id="search_engine" /> <g id="history" />{" "}
        <g id="SEO" /> <g id="optimization" /> <g id="backlink" />{" "}
        <g id="performance" /> <g id="analytics" /> <g id="security" />{" "}
        <g id="dark_web" /> <g id="video_player" /> <g id="upload_download" />{" "}
        <g id="incognito_tab" /> <g id="bookmark" />{" "}
      </g>
    </svg>
  );
};

export {
  logo,
  contact,
  expIcon,
  about,
  projectsIcon,
  astroLoader,
  fynd,
  fyndAcademy,
  kraftConcept,
  download,
  babble,
  disneyClone,
  portfolio,
  linkedin,
  resume,
  vue,
  angular,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  scss,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  carrent,
};
