import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  ScreenLoader,
} from "./components/components";
import CLOUDS from "vanta/src/vanta.clouds";
import { useState, useEffect } from "react";

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
    CLOUDS({
      el: "#vantaWaves",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      backgroundColor: 0x45054a,
      skyColor: 0x0,
      cloudColor: 0x1d1f2c,
      cloudShadowColor: 0x36,
      sunColor: 0x7c7c,
      sunGlareColor: 0x7e7ee8,
      sunlightColor: 0xffffff,
      speed: 1,
    });
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
