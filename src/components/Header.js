import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>Streamy</Link>

        <div className='right menu'>
            <Link to="/" className='item'>All Streams</Link>
            <Link to="/login" className='item'>Login</Link>
        </div>
    </div>
  );
}

export default Header;