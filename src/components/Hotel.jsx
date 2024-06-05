import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import { AuthContex } from '../providers/AuthProvider';

const Hotel = ({ hotel }) => {

    const { hotel_name, details, amenities, price_per_night, rating, img } = hotel

    const {handleMyBooking} = useContext(AuthContex)


    

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border">
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
                    <button onClick={()=>handleMyBooking(hotel)} className='btn btn-success mt-auto '>Book</button>





                    
                </div>
            </div>
        </div>
    );
};

export default Hotel;