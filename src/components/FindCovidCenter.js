import React, { useState, useEffect } from 'react';
import firebaseDb from "../firebase";
import "./FindCovidCenter.css"

const FindCovidCenter = () => {
    var [covidCenterObjects, setcovidCenterObjects] = useState({})

    var [filteredCenter, setFilteredCenters] = useState([]);

    const [search, setSearch] = useState("");


    useEffect(() => {
        firebaseDb.child('covidCenters').on('value', snapshot => {
            if (snapshot.val() != null) {
                setcovidCenterObjects({
                    ...snapshot.val()
                });
            }
            else
            setcovidCenterObjects({})

        })
    }, [])
    
    //Filtered Centers
    useEffect(() => {
        setFilteredCenters(
            Object.values(covidCenterObjects).filter((center) =>
            center.state.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, covidCenterObjects]);

    //   console.log(Object.values(covidCenterObjects));
    // console.log(filteredCenter.name)
    
    return (
       <div id="search">
           <h3 className="text-4xl text-center text-indigo-800">Filter Covid center by state name</h3>
          <div className="search-box">
           <div class="input-group flex-nowrap mt-5 mb-10 search">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search-plus"></i></span>
                </div>
                    <input type="text" class="form-control " placeholder="Enter your State" aria-label="Username" aria-describedby="addon-wrapping"
                    onChange={(e) => setSearch(e.target.value)}
                    />
            </div>
          </div>
           <div className="covidCenters">
               {
           Object.keys(filteredCenter).map((key) => (
                <div className="covidCenter" key={key}>
                    <div className="hospital">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-2">{filteredCenter[key].name}</h3>
                    </div>
                    <div className="hospital_info">
                    <label>State:</label><div className="inline"><b><span className="text-lg">{filteredCenter[key].state}</span></b></div><br></br>
                    <label>Type:</label><div className="inline"><b><span className="text-lg">{filteredCenter[key].type}</span></b></div><br></br>
                    <label>Category:</label><div className="inline"><b><span className="text-lg">{filteredCenter[key].category}</span></b></div>
                    </div>
                    <div className="covidCenter_button">
                        <div className="moreInfo">
                        <form action="https://www.google.com/search" target="_blank" >      
                            <input type="text" className="d-none" value={filteredCenter[key].name} name="query" />
                            <input type="submit" className="btn btn-info" value="More Info"/>
                        </form>
                        </div >
                        <div className="direction">
                             <form action="http://maps.google.com/maps" method="get" target="_blank">
                                <input type="hidden" name="daddr" value={filteredCenter[key].name} />
                                <input type="submit" className="btn btn-outline-info" value="Get directions"/>
                             </form>
                        </div>
                    </div>

                </div>
           ))
}
           </div>
           
       </div>
    )
}

export default FindCovidCenter
