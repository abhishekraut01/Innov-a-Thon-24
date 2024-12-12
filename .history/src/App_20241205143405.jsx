import React from "react";
import Landingpage from "./components/Landingpage";
import Past from "./components/Past"
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback"
import Schedule from "./components/Schedule"
import Footer from "./components/Footer"
import Slider from "./components/Slider";
import Prizes from "./components/Prizes";
import About from "./components/About";

function App(){
  return (
    <div className="select-none" style={{ transform: 'scale(1)', transformOrigin: '0 0' }}>
      <Landingpage/>
      {/* <Card/> */}
      <Prizes/>
      <About/>
      <Sponsors/>
      {/* <Slider/> */}
      <Schedule/>
      <Past/>
      <Faq/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;