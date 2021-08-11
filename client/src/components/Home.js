import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Home = ({id}) =>{
    const [ home, setHome ] = useState({});
    useEffect(() =>
    {
        const getSingleHome = async () =>
        {
            console.log("call to get single home made");
            const response = await axios.get(`http://localhost:5000/home/${id}`);
            console.log(response);
            setHome(response.data);

        }
        getSingleHome();
    }, []);

    
    if (home == undefined || home.city == undefined)
    {
        return <div>Loading...</div>
    }
    return (             
        <div className="card pointing" >
              <div className="image">
                <img src={`./home_images/home1.jpeg`} alt="home_pic" />
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
}

export default Home;