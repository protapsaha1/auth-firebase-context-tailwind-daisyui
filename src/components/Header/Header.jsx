import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../providers/ProvidersAuth';
// import { handleLogin } from '../Login/Login';

const Header = () => {
    const { user, userSignOut } = useContext(userContext);


    const handleLogOut = () => {
        userSignOut()
        .then(()=>{

        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-around items-center">
            <div>
                <Link className='text-sky-700 font-bold btn btn-ghost normal-case text-xl mr-4' to="/">Daisy Firebase</Link>
                {
                    user
                        ?
                        <>
                            <p><span>{user.email}</span> <span>{user.displayName}</span></p>
                            <button onClick={handleLogOut} className="btn btn-outline text-teal-400">sign out</button>
                        </>
                        :
                        <Link to="/login" className="btn btn-active btn-ghost">Login</Link>
                }
            </div>
            <nav className='text-white text-xl'>
                <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/">Home</Link>
                <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/orders">Orders</Link>
                <Link className='mr-3 btn btn-ghost normal-case text-xl' to="/Login">Login</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/register" >Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;