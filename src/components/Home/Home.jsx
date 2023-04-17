import React, { useContext } from 'react';
import { userContext } from '../../providers/ProvidersAuth';


const Home = () => {
    const { user } = useContext(userContext);
    console.log(user)
    return (
        <div>
            <h1>My name is {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;