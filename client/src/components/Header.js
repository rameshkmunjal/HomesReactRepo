import React from 'react';
import './Homes/Homes.css';
import Link from './Link';



const Header = () =>
{
    return (
        <div className="ui secondary pointing menu">
      
      <Link href="/home" className="item">
        Home
      </Link>
      <Link href="/create" className="item">
        Create
      </Link>
      
    </div>
    )
}

export default Header;