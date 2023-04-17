import React from "react";
import SearchText from './InternalizationHandler.js';

function Header()
{
  return (
    <header className="bg-slate-50 rounded-md mt-5 mx-auto pt-3 sticky shadow-lg shadow-slate-600/30 z-10 bg-opacity-95">
      <img className="absolute opacity-40"style = { {maxHeight: '50px', maxWidth: '50px', left: '20px', top: '20px'}}src="/media/hi2.png"alt="logo"/>
      <div className="mx-auto h-4 w-4 bg-red-600 rounded-lg border-red-900 border-2 mb-2 opacity-100"></div>
      <div className="container lg md:mx-auto opacity-100">
        <img id="logo" className="w-auto h-44 transition bg-slate-400 border-slate-800 border-4 pt-1 pb-0 px-1 duration-1000 filter saturate-0 rounded-full mx-auto hover:saturate-100" src="/media/me.png" alt="Me, My photo, Selfie"/>
        <div className="container">
          <h1 className="text-lg text-center" id="meText">Andrés Rossini 🇦🇷</h1>
          <h2 className="text-sm text-center transition-all">{SearchText("HeaderSubtext")}</h2>
          <hr className="w-1/6 h-1 md:w-1/12 mx-auto bg-slate-800 filter saturate-50"></hr>
        </div>
      </div>

      <nav className="relative md:pt-5">
        <ul className="container mx-auto grid grid-flow-row md:grid-flow-col text-center">
          <li className="outline-dotted w-11/12 mx-auto my-0.5">
            <a
              className="transition duration-300 hover:text-slate-400"
              href="#AboutMe"
            >
              About me
            </a>
          </li>
          <li className="outline-dotted w-11/12 mx-auto my-0.5">
            <a
              className="transition duration-300 hover:text-slate-400"
              href="#Knowledges"
            >
              My knowlegdes
            </a>
          </li>
          <li className="outline-dotted w-11/12 mx-auto my-0.5">
            <a
              className="transition duration-300 hover:text-slate-400"
              href="#contact"
            >
              Contact me.
            </a>
          </li>
        </ul>
      </nav>

      <div id="bottom-wave" className="wave-container opacity-10"></div>
    </header>
  );
}

export default Header;
