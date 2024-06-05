import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';

const MyBooking = () => {

    const {booking} = useContext(AuthContex)
    console.log(booking);
   
    return (
        <div>
            
        </div>
    );
};

export default MyBooking;