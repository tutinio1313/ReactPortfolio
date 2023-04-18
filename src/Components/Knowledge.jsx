import React from "react";
import SearchText from '/src/InternalizationHandler.js';

function Knowledge(){
  return(  
    <aside id="Knowledges"
            className="bg-slate-100 grid relative mt-5 h-max  mx-auto md:ml-3 shadow-lg shadow-slate-600/30 rounded-md z-10">
            <div className="rotate-180 wave-container opacity-10"></div>
            <span className="w-5 h-9 bg-slate-300 absolute -top-4 -mb-5 filter opacity-40 left-2/3"></span>
            <span className="w-5 h-9 bg-slate-300 absolute -top-4 -mb-5 filter opacity-40 left-1/3"></span>

            <div className="-my-20 md:-my-8 mb-0">
                <h1 className="text-xl text-center mb-4">{SearchText("KnowledgeTitle")}</h1>

                <p className="text-justify mx-4">{SearchText("KnowledgeText")}</p>
            </div>

            <div id="bottom-wave" className="wave-container opacity-10"></div>
        </aside>  
  );
}

export default Knowledge
