import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Edit = ({id}) =>{    
    const [c, setCity] = useState('');
    const [b, setBuilder] = useState('');
    const [p, setPrice] = useState('');
    const [s, setStatus] = useState('');
    const [pos, setPossession] = useState('');
    

    useEffect(() =>{        
        const getHomeById = async () =>{
            const response = await axios.get(`http://localhost:5000/home/${id}`);
            console.log(response);
            const home = response.data;
            setCity(home.city);
            setBuilder(home.builder);
            setPrice(home.price);
            setStatus(home.status);
            setPossession(home.possession);
            
        }

        getHomeById();
    }, [])

    const editHome = async(id) =>{
        console.log("api call to edit home details will be made" + id);
        let data = {
            city: c,
            possession: pos,
            price: p,
            status: s,
            builder: b
        };

        const response = await axios.put(`http://localhost:5000/edit/${id}`, data);
        console.log(response);
        //document.location.href = "/admin";
    }

    return (
        <div>    
    
            <h1>Edit</h1>
            <form className="ui form">
                <div className="field">
                    <label>City</label>
                    <input
                        type="text"
                        value={c}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Builder</label>
                    <input
                        type="text"
                        value={b}
                        onChange={(e) => setBuilder(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input
                        type="text"
                        value={p}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Possession</label>
                    <input
                        type="text"
                        value={pos}
                        onChange={(e) => setPossession(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Status</label>
                    <input
                        type="text"
                        value={s}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </div>
                <div className="field">
                    <button onClick={()=>editHome(id)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;