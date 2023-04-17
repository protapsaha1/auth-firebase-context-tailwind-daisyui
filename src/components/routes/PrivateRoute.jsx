import React, { useContext } from 'react';
import { userContext } from '../../providers/ProvidersAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(userContext);
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;