import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) { return 'Loading...' }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} />;

};

export default AdminRoute;