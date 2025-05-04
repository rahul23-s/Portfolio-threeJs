import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";
import ReactGA from "react-ga4";
import Spline from "@splinetool/react-spline";

// Lazy Loaded Components
const Contact = lazy(() => import("./components/components/Contact"));
const Works = lazy(() => import("./components/components/Works"));
const StarsCanvas = lazy(() => import("./components/components/canvas/Stars"));

// Non-Lazy Components
import {
  About,
  Experience,
  Hero,
  Navbar,
  ScreenLoader,
} from "./components/components";

const TRACKING_ID = "G-PSK51XTC26";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [isWebsiteLoading, setIsWebsiteLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  // Handle screen size change dynamically
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsWebsiteLoading(false), 4000);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isWebsiteLoading && <ScreenLoader />}
      <div className="relative z-0 bg-black">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobile={isMobile}
        />
        <div className="background-vanta relative bg-cover bg-no-repeat bg-center">
          <Spline
            className="spline-view flex items-center justify-center"
            scene={
              isMobile
                ? "https://prod.spline.design/IH1Dj6kBBabQ1MU5/scene.splinecode"
                : "https://prod.spline.design/q0SJKAuiJfC6KMfX/scene.splinecode"
            }
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

        <Suspense
          fallback={<div className="text-white">Loading Projects...</div>}
        >
          <InView
            threshold={0.2}
            as="div"
            onChange={(inView) => inView && setActiveSection("Projects")}
          >
            <Works />
          </InView>
        </Suspense>

        <Suspense
          fallback={<div className="text-white">Loading Contact...</div>}
        >
          <InView
            threshold={0.2}
            as="div"
            onChange={(inView) => inView && setActiveSection("Contact")}
          >
            <div className="relative z-0 overflow-x-hidden">
              <Contact />
            </div>
          </InView>
        </Suspense>

        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
