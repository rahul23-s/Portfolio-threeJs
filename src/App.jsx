import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Navbar,
  ScreenLoader,
} from "./components/components";
import { useState, useEffect, lazy } from "react";
import { InView } from "react-intersection-observer";
import ReactGA from "react-ga4";

const Contact = lazy(() => import("./components/components/Contact"));
const Works = lazy(() => import("./components/components/Works"));
const StarsCanvas = lazy(() => import("./components/components/canvas/Stars"));
import Spline from "@splinetool/react-spline";

const TRACKING_ID = "G-PSK51XTC26";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [isWebsiteLoading, setIsWebsiteLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWebsiteLoading(false);
    }, 4000);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      {isWebsiteLoading && <ScreenLoader />}
      <div className="relative z-0 bg-black">
        <div className="background-vanta relative bg-cover bg-no-repeat bg-center">
          <Spline
            className="spline-view flex items-center justify-center"
            scene="https://prod.spline.design/IH1Dj6kBBabQ1MU5/scene.splinecode"
          />

          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <InView
            threshold={0.2}
            as="div"
            onChange={(inView) => inView && setActiveSection("")}
          >
            <Hero />
          </InView>
        </div>
        <InView
          threshold={0.2}
          as="div"
          onChange={(inView) => inView && setActiveSection("About")}
        >
          <About />
        </InView>
        <InView
          threshold={0.2}
          as="div"
          onChange={(inView) => inView && setActiveSection("Experiences")}
        >
          <Experience />
        </InView>
        <InView
          threshold={0.2}
          as="div"
          onChange={(inView) => inView && setActiveSection("Projects")}
        >
          <Works />
        </InView>
        <InView
          threshold={0.2}
          as="div"
          onChange={(inView) => inView && setActiveSection("Contact")}
        >
          <div className="relative z-0 overflow-x-hidden">
            <Contact />
          </div>
        </InView>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
