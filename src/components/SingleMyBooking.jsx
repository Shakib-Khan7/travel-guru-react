import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthProvider';
import { FaStar } from 'react-icons/fa';

const SingleMyBooking = ({myBooked}) => {

    const {hotel_name, details, amenities, price_per_night, rating, img} = myBooked

    const {booking} = useContext(AuthContex)
    console.log(booking);
    


    return (
        <div className='border rounded-lg'>
            <center className='text-3xl text-white font-bold underline mb-4'>Booking details</center>

            <center className=''>
            <h2 className='text-2xl font-bold text-white '>Origin : {booking.origin}  </h2>
            <h2 className='text-white font-bold italic'>From : {booking.from}</h2>
            <h2 className='text-white font-bold italic '>To : {booking.to}</h2>
            <h2 className='text-2xl font-bold text-white mb-4 '>Destination : {booking.destination}  </h2>
            </center>

            




            
            <div className="card card-side text-white shadow-xl
            
            
            ">
                


                <div className='grid grid-cols-1 md:grid-cols-2'>
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold italic">{hotel_name}</h2>
                    <div className=' md:flex'>
                        <p className='font-thin font-serif'>{details?.guests} guests</p>
                        <p className='font-thin font-serif '>{details?.bedrooms} bedrooms</p>
                        <p className='font-thin font-serif '>{details.beds} beds</p>
                        <p className='font-thin font-serif '>{details.baths} baths</p>




                    </div>

                    <div>
                        <p className='font-extralight font-mono '>{`${amenities}   `}</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                        <FaStar className='text-orange-300'></FaStar>
                        <p>{rating}</p>
                        </div>
                        <div>
                            <p><span className='font-bold'>${price_per_night}</span>/night</p>
                        </div>
                        
                    </div>
                    





                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyBooking;