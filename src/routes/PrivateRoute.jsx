import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContex)

    const location = useLocation()

    if (loading) {
        return <div className='text-center mt-80'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>




};

export default PrivateRoute;