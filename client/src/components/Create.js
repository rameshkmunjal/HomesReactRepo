import React, { useState } from 'react';
import axios from 'axios';
    

const Create = () =>{
    const [c, setCity] = useState('');
    const [a, setPossession] = useState('');
    const [p, setPrice] = useState('');
    const [s, setStatus] = useState('');
    const [b, setBuilder] = useState('');

    const createHome = (e) =>{
        console.log("form submitted");
        e.preventDefault();
        
        let data = {
            city: c,
            possession: a,
            price: p,
            status: s,
            builder:b
        }

        console.log(data);
        const apiCall = async (data) =>{
            const response = await axios.post('http://localhost:5000/create', data);
            console.log(response);
            document.location.href = '/admin';
        }
        apiCall(data);
    }
    
    return (
        <div className="ui segment">
            <div className="ui form" onSubmit={createHome}>
                <div className="field">
                    <label>City</label>
                    <input
                        type='text'
                        value={c}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Possession</label>
                    <input
                        type='text'
                        value={a}
                        onChange={(event) => setPossession(event.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input
                        type='text'
                        value={p}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Status</label>
                    <input
                        type='text' 
                        value={s}
                        onChange={(event) => setStatus(event.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Developer</label>
                    <input
                        type='text'
                        value={b}
                        onChange={(event) => setBuilder(event.target.value)}
                    />
                </div>
                <div className="field">
                    <button type="submit" onClick={createHome}>Submit</button>
                </div>
            </div>            
        </div>
    )
}

export default Create;