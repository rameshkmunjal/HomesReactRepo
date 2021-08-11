import './Homes.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import queryString from 'query-string'
import Link from '../Link';

const Homes = () =>
{
  const url = 'http://localhost:5000';
  const [homesArr, setHomesArr] = useState([]);
  //console.log(queryString.parse(props.location.hash))
  useEffect(() =>
  {
    const getHomes = async () =>{
      let response = await axios.get(url);
      let s = await response;
      console.log(s.data);
      setHomesArr(s.data);
    }

    getHomes();
    
  }, [])

  const getSingleHome = async (id) =>
  {
    console.log(id);
    document.location.href = `/home/${id}`;
  }

  let cityRS = homesArr.map((home, index) =>{
    return (             
      <div className="card pointing" key={home.id} onClick={() => { getSingleHome(home.id) }}>
            <div className="image">
              <img src={`./home_images/home${index}.jpeg`} alt="home_pic" />
            </div>
            <div className="content">
              <ul className="ui relaxed list">
                <li className="item"><span><b>City :</b></span><span>{home.city}</span></li>
                <li className="item"><span><b>Price :</b></span><span>{home.price} Lacs</span></li>
                <li className="item"><span><b>Builder :</b></span><span>{home.builder}</span></li>
                <li className="item"><span><b>Possession :</b></span><span>{home.possession}</span></li>
                
              </ul>
            </div>
        </div>
      
      
    )
  })

  return (
    <div className="ui container">
      <div className="ui segment grid">
        <div className="ui cards">
            {cityRS}
        </div>          
      </div>      
    </div>
  )
}

export default Homes;
