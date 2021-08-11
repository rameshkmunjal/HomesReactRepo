import  './Homes/Homes.css';
import React from 'react';
import Route from './Route';
import Header from './Header';
import Homes from './Homes/Homes';
import Home from './Home';
import Create from './Create';
import Admin from './Admin';
import Edit from './Edit';
import Footer from './Footer';



const App = () =>{
    return (
        <div className="ui container">
            <Header />
                <Route path='/'>
                    <Homes />
                </Route>
                <Route path='/create'>
                    <Create />
                </Route>
                <Route path='edit/:id'>
                    <Edit />
            </Route>
            <Route path='home/:id'>
                    <Home />
                </Route>
                <Route path='/admin'>
                    <Admin />
                </Route>            
            <Footer />
        </div>
    )
}

export default App;
