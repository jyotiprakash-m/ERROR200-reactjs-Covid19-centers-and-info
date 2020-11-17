import React, { useEffect } from 'react'
import './App.css';
import FindCovidCenter from './components/FindCovidCenter';
import WorldwideData from './components/WorldwideData';

import Banner from './components/Banner';

import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = 'a1235edec26d6dba7f72b5673a4299522e956eca572e1d8b807a3e2338fdd0dc/stage';

// Implement alan AI to our project

function App() {
  useEffect(() =>{
    alanBtn({
      key:alanKey
    })
  },[])

  return (

      <div className="row">   
        <div className="col-md-10 offset-md-1">
          <Banner></Banner>
          <WorldwideData ></WorldwideData>
          <FindCovidCenter></FindCovidCenter>          
        </div>
      </div>

  );
}

export default App;
