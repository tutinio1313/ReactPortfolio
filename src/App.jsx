import React from 'react';
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Knowledge from "./Components/Knowledge.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Footer from "./Components/Footer.jsx";

function App()
{
  return (
    <div>
      <Header/>

      <div className="relative top-12 md:grid grid-flow-col">
        <div>
          <AboutMe id="1"/>
          <AboutMe id="2"/>
          <AboutMe id="3"/>
        </div>

        <Knowledge/>
        <ContactMe/>
        </div>

        <Footer/>
    </div>
  );
}

export default App


