import React from "react";
import SearchText from './InternalizationHandler.js';
import  propTypes from 'prop-types';

function AboutMe(props)
{
  var idText = "AboutMe" + props.id; 
  if (props.id == 1) {
    return (
      <div>
        <main
          id={idText}
          className="bg-yellow-200 h-max grid relative pt-4 mx-auto md:ml-3 shadow-lg shadow-slate-600/30 rounded-md z-30"
        >
          <h1 className="text-xl text-center">{SearchText(idText+"Title")}</h1>
          <hr className="mx-auto w-1/4 h-1 mb-1 bg-slate-800" />
          <p className="text-justify mx-4 opacity-30 my-4">
          {SearchText(idText+"Text")} 
          </p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main
        id= {idText}
        className="bg-yellow-200 h-max grid relative pt-4 mx-auto md:ml-3 shadow-lg shadow-slate-600/30 rounded-md z-30"
      >
        <h1 className="text-xl text-center">{SearchText(idText +"Title")}</h1>
        <p className="text-justify mx-4 opacity-30 my-4">
        {SearchText(idText+"Text")}
        </p>
      </main>
    </div>
  );
}
  AboutMe.propTypes = {
    id : propTypes.string,
  }

export default AboutMe