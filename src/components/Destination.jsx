import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Booking from '../pages/shared/Booking';

const Destination = () => {
    const data = useLoaderData()
    const tourID = useParams()
    console.log(tourID);
    console.log(data);
    const destination = data.tourDestinations.find(td => td.id == tourID.id)
    console.log(destination);
    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            <div className='ml-10 md:ml-20 mt-20'>
                <h1 className='text-white text-5xl md:text-6xl font-semibold italic font-serif'>  {destination.name}</h1>

                <p className='text-slate-200 font-mono text-lg mt-6'>{destination.description}</p>
            </div>
            <div>
                <div className=''>
                <Booking key={destination.id} myDestination={destination}  ></Booking>
                </div>
            </div>
        </div>
    );
};

export default Destination;