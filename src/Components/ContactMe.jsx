import React from "react";
import SearchText from '/src/InternalizationHandler.js';

class ContactMe extends React.Component
{     
    render()
    {
    return (
    <aside id="contact"
                className="z-10 bg-slate-50 mx-auto md:px-3 relative md:mt-10 mt-20 mb-10 shadow-lg shadow-slate-600/30">
                <div id = "StickyPaper"
                    className="container z-20 bg-yellow-200 py-8 w-max px-10 -rotate-12 relative shadow-lg shadow-slate-600/30 ">
                    <h2 className="text-center opacity-30">{SearchText("StickyPaper")}</h2>
                </div>
                <form action="#" onSubmit={SendEmailHandler}>
                    <div id="header" className="relative mb-10 -mt-4">
                        <h2 className="text-center font-extrabold font-serif text-lg">{SearchText("ContactMeHeader")}</h2>
                        <hr className="mx-auto outline-dotted w-1/3"/>
                    </div>
                    <div id="emailContainer" className="container flex flex-col">
                        <input id="Subject" type="text" placeholder={SearchText("ContactMeSubject")}
                            className="form-input form-control m-2 border-dotted" />
                        <textarea placeholder={SearchText("ContactMeMessage")} id="Message"
                            className="form-input form-control mx-2 border-dotted h-48">

                        </textarea>
                        <input id="sent" type="submit" className="bg-slate-400 w-1/4 mx-auto my-2 rounded-lg" value={SearchText("HeaderSent")}/>
                    </div>

                    <h2 id="Decoration" className="text-end mr-4 opacity-20">{SearchText("HeaderDecoration")}</h2>
                </form>

                <div>
                    <p id="StateExecutionMessage" className="opacity-20 text-red-600"></p>
                </div>
            </aside>

        );
    }
}

function SendEmail() {
    if (IsValid()) {
      var email = document.createElement("a");
      email.href =
        "mailto:arportfolio13@gmail.com?subject=" +
        encodeURIComponent(document.getElementById("Subject").value) +
        "&body=" +
        encodeURIComponent(document.getElementById("Message").value);
      email.click();
    } else {
      var InputsState = GetInputs();
      var StateExecutionMessage = document.getElementById(
        "StateExecutionMessage"
      );
  
      if (!InputsState[0]) {
        StateExecutionMessage.innerHTML =
          SearchText("StateExecutionSubjectEmpty");
      } else {
        if (!InputsState[1]) {
          StateExecutionMessage.innerHTML =
          SearchText("StateExecutionMessageEmpty");
        } else {
          StateExecutionMessage.innerHTML =
            SearchText("StateExecutionBothEmpty");
        }
      }
  
      setTimeout(() => {
        StateExecutionMessage.innerHTML = "";
      }, 5000);
    }

    function IsValid() {
        const booleans = GetInputs();
        if(booleans[0] && booleans[1])
        {
            return true;
        }
        return false;
    } 
 
  
  function GetInputs() {
    var Inputs = [
      document.getElementById("Subject"),
      document.getElementById("Message")
    ];
    return Inputs.map((element) => {
      return element.value == "";
    });
  }
}

const SendEmailHandler = event => SendEmail(event);

export default ContactMe