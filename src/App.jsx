import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Navbar,
  ScreenLoader,
} from "./components/components";
import CLOUDS from "vanta/src/vanta.clouds";
import { useState, useEffect, lazy } from "react";

const Contact = lazy(() => import("./components/components/Contact"));
const Works = lazy(() => import("./components/components/Works"));
const StarsCanvas = lazy(() => import("./components/components/canvas/Stars"));

const App = () => {
  const [isWebsiteLoading, setIsWebsiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWebsiteLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const cloudsEffect = CLOUDS({
      el: "#vantaWaves",
      mouseControls: !isMobile,
      touchControls: false,
      limitMaxFPS: 30,
      gyroControls: false,
      minHeight: 20.0,
      minWidth: 20.0,
      backgroundColor: 0x45054a,
      skyColor: 0x0,
      cloudColor: 0x1d1f2c,
      cloudShadowColor: 0x36,
      sunColor: 0x7c7c,
      sunGlareColor: 0x7e7ee8,
      sunlightColor: 0xffffff,
      speed: 1,
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
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0 overflow-x-hidden">
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
