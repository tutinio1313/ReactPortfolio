import React from 'react';
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";

function App()
{
  console.log(Header);
  console.log(AboutMe);

  return (
    <div>
      <Header/>

      <div className="relative top-12 md:grid grid-flow-col">
        <div>
          <AboutMe id="1"/>
          <AboutMe id="2"/>
          <AboutMe id="3"/>
        </div>
      </div>
    </div>
  );
}

export default App


