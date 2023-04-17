import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-around items-center">
            <Link className='text-sky-700 font-bold btn btn-ghost normal-case text-xl' to="/">Daisy Firebase</Link>
            <nav className='text-white text-xl'>
                <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/">Home</Link>
                <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/Login">Login</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/register" >Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;