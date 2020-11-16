import React from 'react'
import banner from './headerImg.png';
import { Link } from 'react-scroll';
function Banner() {
    return (
    <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src={banner}/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Prevent the Spread
                
              <br class="hidden lg:inline-block"/>Stay at Home, Stay Safe
            </h1>
            <p class="mb-8 leading-relaxed">The best way to prevent and slow down transmission is be well informed about the COVID-19 virus. Protect yourself and others from infection by washing your hands at-least 20sec and not touching your face.</p>
            <div class="flex justify-center">
            <Link to="search" spy={true} smooth={true} offset={-70} duration={500}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find Covid Center</button></Link>
            <Link to="track" spy={true} smooth={true} offset={-70} duration={500}><button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Covid Tracker</button></Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner
