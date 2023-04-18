import React from "react";
function Footer()
{
    return (<footer
    className="bg-blue-400 z-0 w-fit rounded-md mx-auto relative p-2 rotate-45 top-8 grid grid-flow-col gap-2 bottom-6">
    <div className="ml-0.5 w-10 h-full outline-dotted text-slate-700 grid grid-rows-4">
        <h2 className="text-center">R</h2>
        <h2 className="text-center">R</h2>
        <h2 className="text-center">S</h2>
        <h2 className="text-center">S</h2>
    </div>

    <ul className="container grid grid-flow-row text-center gap-3">
        <li className="outline-dotted py-1 px-8 transition-all duration-500 hover:text-white"><a id="Instagram"
                className="grid grid-flow-col transition-all duration-500 active:text-white"
                href="https://www.instagram.com/andresrossini13/"><i className="ml-0 mr-2 fab fa-instagram fa-3x "></i>
                <h2 className="my-auto">Instagram</h2>
            </a>
        </li>
        <li className="outline-dotted py-1 px-8 transition-all duration-500 hover:text-white"><a id="Twitter"
                className="grid grid-flow-col transition-all duration-500 active:text-white"
                href="https://www.twitter.com/andresrossini13/"><i className="ml-0 mr-2 fab fa-twitter fa-3x"></i>
                <h2 className="my-auto">Twitter</h2>
            </a>
        </li>
        <li className="outline-dotted py-1 px-8 transition-all duration-500 hover:text-white "><a
                className="grid grid-flow-col transition-all duration-500 active:text-white"
                href="https://www.github.com/tutinio1313/"><i className="ml-0 mr-2 fab fa-github fa-3x"></i>
                <h2 className="my-auto">Github</h2>
            </a>

        </li>
    </ul>
</footer>)
}

export default Footer