import React from 'react'
import './Navbar.css'
import logo from './logo.png';
import { Link as Linkrouter } from 'react-router-dom';

import { Link } from 'react-scroll';
function Navbar() {
    return (
        <nav class="nav flex flex-wrap items-center justify-between bg-blue-100 px-10">
            <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
               <Linkrouter to="/"> <img src={logo} alt="Logo" className="logo"/></Linkrouter>
            </div>
            <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
            <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                <span class="navicon bg-grey-darkest flex items-center relative"></span>
            </label>
            <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full items-center md:w-auto">
                <li class="border-t md:border-none">
                   <Linkrouter to="/"><a class="text-lg block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a></Linkrouter>
                </li>
    
                <li class="border-t md:border-none">
                <a href="#" class="text-lg block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About Us</a>
                </li>
    
                <li class="border-t md:border-none">
                <Link to="search" spy={true} smooth={true} offset={-70} duration={500} class="text-lg block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"> <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find Center</button></Link>
                </li>
    
            </ul>
        </nav>
    )
}

export default Navbar
