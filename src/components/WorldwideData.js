import React, { useState, useEffect } from 'react';
import './WorldwideData.css'

function WorldwideData() {
    const [countryInfo,setCountryInfo] = useState({});

    useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries/IN")
    .then(response => response.json())
    .then(data =>{
      setCountryInfo(data);
    });
  },[]);
    
    return (
<section class="text-gray-700 body-font" id="track">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-3xl mb-2 text-gray-900">Case study of India</h1>
        <img src="" alt=""/>
        <div class="leading-relaxed">India is in the second rank all over the world.</div>
      <button class="float-right inline-flex text-white bg-indigo-500 border-0 mt-3 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Dashboard</button>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
        <h2 class="title-font font-medium text-4xl text-gray-900">{countryInfo.cases}</h2>
        <h2 class="title-font font-medium text-xl text-gray-900 m-2">{countryInfo.todayCases}<sup><i class="fas fa-arrow-up"></i></sup><span>today</span></h2>
        <p class="leading-relaxed text-red-400">Total Cases</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
      <h2 class="title-font font-medium text-4xl text-gray-900">{countryInfo.recovered}</h2>
        <h2 class="title-font font-medium text-xl text-gray-900 m-2">{countryInfo.todayRecovered}<sup><i class="fas fa-arrow-up"></i></sup><span>today</span></h2>
        <p class="leading-relaxed text-green-400">Total Recovary</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
      <h2 class="title-font font-medium text-4xl text-gray-900">{countryInfo.deaths}</h2>
        <h2 class="title-font font-medium text-xl text-gray-900 m-2">{countryInfo.todayDeaths}<sup><i class="fas fa-arrow-up"></i></sup><span>today</span></h2>
        <p class="leading-relaxed text-orange-400">Total Deaths</p>
      </div>
    </div>
    
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <h1 className="text-3xl mb-2">Find all Covid testing center of India</h1>
      {/* <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats"/> */}
      <iframe class="object-cover object-center rounded-lg " title="All India Covis center" src="https://www.google.com/maps/d/u/0/embed?mid=1ys5r5gzWINFes861uhz5UKmGlDTIK_4K" width="640" height="380"></iframe>
    </div>
  </div>
</section>
    )
}

export default WorldwideData
