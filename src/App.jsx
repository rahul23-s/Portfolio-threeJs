import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Navbar,
  ScreenLoader,
} from "./components/components";
import CLOUDS from "vanta/src/vanta.halo";
import { useState, useEffect, lazy } from "react";
import { InView } from "react-intersection-observer";
import ReactGA from "react-ga4";

const Contact = lazy(() => import("./components/components/Contact"));
const Works = lazy(() => import("./components/components/Works"));
const StarsCanvas = lazy(() => import("./components/components/canvas/Stars"));

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

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const cloudsEffect = CLOUDS({
      el: "#vantaWaves",
      speed: 1,
      backgroundColor: 0x60816,
      mouseControls: !isMobile,
      touchControls: true,
      limitMaxFPS: 30,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      amplitudeFactor: 1.2,
      xOffset: -0.2,
      size: 1,
    });

    return () => {
      cloudsEffect.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {isWebsiteLoading && <ScreenLoader />}
      <div className="relative z-0 bg-primary">
        <div
          id="vantaWaves"
          className="background-vanta bg-cover bg-no-repeat bg-center"
        >
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
