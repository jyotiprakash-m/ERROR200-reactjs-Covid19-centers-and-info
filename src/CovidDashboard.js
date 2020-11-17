import React, { useState, useEffect } from 'react';
import './CovidDashboard.css';
import InfoBox from './components/InfoBox'
import Map from './components/Map'
import Table from './components/Table'
import LineGraph from './components/LineGraph'
import {MenuItem,FormControl,Select} from "@material-ui/core"
import { sortData } from './components/util';
import "leaflet/dist/leaflet.css"

function CovidDashboard() {
  const [countries,setCountries]=useState([]);
  const [country,setCountry]=useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData,setTableData]=useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [casesType, setCasesType] = useState("cases");

 // Fetch data from API 

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data =>{
      setCountryInfo(data);
    });
  },[]);

  //Statr=How to write variable in react
  //UseEffect=Run the code based on a given condition
      //This code inside here will run once when component loads and not again

  useEffect(()=>{
      const getCountriesData=async() =>{
        //Whole country
          await fetch("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data) =>{
              const countries =data.map((country) =>({
                name:country.country,
                value:country.countryInfo.iso2
              }));

              const sortedData=sortData(data);
              setTableData(sortedData);
              setMapCountries(data);
              setCountries(countries);
          });
      };
      getCountriesData();
  },[]);
  const onCountryChange=async (event) =>{
    const countryCode=event.target.value;
    setCountry(countryCode);
    // Extract the specific country
    const url=countryCode ==='worldwide' ?'https://disease.sh/v3/covid-19/all':
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(response => response.json())
    .then(data =>{
      setCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
      setMapZoom(4)
    });
  };
  // console.log("Country Info >>>",countryInfo);
  return (
    <div className="app">
      <div className="app_left">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>

      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country} >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {/*Loop through all country */}
          {
            countries.map(country =>(
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      </div>
      
      <div className="app_stats">
          <InfoBox isRed active={casesType==="cases"} onClick={(e) => setCasesType("cases")} title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox active={casesType==="recovered"} onClick={(e) => setCasesType("recovered")} title="Recovered" cases={countryInfo.todayRecovered}  total={countryInfo.recovered}/>
          <InfoBox isRed active={casesType==="deaths"} onClick={(e) => setCasesType("deaths")} title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>
        <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
       
      </div>
      
      <div className="app_right">
              <h3 className="app_graphTitle text-blue-700 text-2xl mb-3">Worldwide new <span className="text-blue-800 text-3xl">{casesType}</span> </h3>
              <LineGraph className="app_graph" casesType={casesType} />
              <h3 className="text-blue-700 text-2xl mt-3">Live Cases by Country</h3>
              {/*Table */}
              <Table className="table" countries={tableData} />
              
          
          
      </div>

      
     
    </div>
  );
}

export default CovidDashboard;
