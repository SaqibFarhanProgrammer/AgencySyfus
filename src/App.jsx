import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SmoothScroll from "./components/SmoothScroll";
import ClickSpark from './components/Spark';
import Serviceses from "./sections/Servieses"
import Contact from "./sections/Contact";
import About from "./sections/About";


const App = () => {
  j
  return (
    <div>
      <SmoothScroll>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >

          <Hero />
          <About />
          <Serviceses />
          <Contact />
          <About />
        </ClickSpark>
      </SmoothScroll>
    </div>
  );
};

export default App;
