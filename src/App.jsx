import React from 'react';
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe.jsx";

function App()
{
  console.log(Header);
  console.log(AboutMe);

  var language = navigator.languages;
  return (
    <div>
      <Header Language={language}/>

      <div className="relative top-12 md:grid grid-flow-col">
        <div>
          <AboutMe id="1" Language={language}/>
          <AboutMe id="2" Language={language}/>
          <AboutMe id="3" Language={language}/>
        </div>
      </div>
    </div>
  );
}

export default App


