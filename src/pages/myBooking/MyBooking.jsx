import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProvider';
import SingleMyBooking from '../../components/SingleMyBooking';


const MyBooking = () => {

    const {myBooking} = useContext(AuthContex)
    console.log(myBooking);
   
    return (
        <div className='grid gap-10 md:gap28 grid-cols-1 md:grid-cols-2 ml-10 mr-10'>
            {
                myBooking.map(mb=>
                    <SingleMyBooking key={mb.hotel_name}  

                    myBooked = {mb}
                    
                    
                    ></SingleMyBooking>
                )
            }
        </div>
    );
};

export default MyBooking;