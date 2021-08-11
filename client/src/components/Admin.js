
import './Homes/Homes.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from './Link';

const Admin = () =>{
    const [homes, setHomes] = useState([]);

    useEffect(() =>{
        const getAllHomes = async () =>{
            const homesData = await axios.get('http://localhost:5000');
            console.log(homesData.data);
            setHomes(homesData.data);            
        }
        getAllHomes();
    }, []);

    const deleteHandler = (id) =>
    {
        console.log(id);
        const deleteHome = async () =>{
            const home = await axios.delete(`http://localhost:5000/delete/${id}`);
            console.log(home);
            

        }
        deleteHome();
    }

    const editHandler = (id) =>{
        console.log(id);
        return  (<Link to={`/edit/${id}`} ></Link>)
        
    }

    const retrievedHomes = homes.map((home, index) =>{
        return (
            <tr key={index}>               
                <td className="tableData">{home.city}</td>
                <td>{home.builder}</td>
                <td>{home.status}</td>
                <td>{home.possession}</td>
                <td className="tableData">{home.price}</td>
                <td><button onClick={()=>editHandler(home.id)}>Edit</button></td>
                <td><button onClick={()=>deleteHandler(home.id)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <div>
            <h1>Admin Room</h1>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="tableData">City</th>
                        <th>Developer</th>
                        <th>Status</th>
                        <th>Possession</th>
                        <th className="tableData">Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {retrievedHomes}
                </tbody>
            </table>
        </div>
    )    
}

export default Admin;
