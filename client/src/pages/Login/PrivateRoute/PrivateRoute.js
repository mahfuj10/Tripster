import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) {
        return 'Loading...'
    };

    return (
        <div>
            {user.email ? children : <Navigate state={{ from: location }} to="/login"></Navigate>}
        </div>
    );
};

export default PrivateRoute;