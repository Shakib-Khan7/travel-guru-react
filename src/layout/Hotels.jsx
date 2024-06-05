import React, { useEffect, useState } from 'react';
import Navbar from '../pages/shared/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import { data } from 'autoprefixer';
import Hotel from '../components/Hotel';
import Map from '../components/Map';

const Hotels = () => {
    const destiantion = useParams()
    console.log(destiantion);

    const [hotel,setHotel] = useState([])

    useEffect(()=>{
        fetch('/hotels.json')
        .then(res=>res.json())
        .then(data=>setHotel(data))
    },[])




    return (
        <div className='text-black'>
            <Navbar></Navbar>
            <hr />
            <hr />

            <p className='font-bold text-2xl mt-5 mb-5'>STAY IN {destiantion.name} </p>


            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                {
                    hotel.slice(0,3).map(h=>
                        <Hotel key={h.hotel_name}

                        hotel = {h}
                        
                        
                        ></Hotel>
                    )
                }
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-4'>FIND HOTELS ON MAP</h2>
                    <Map></Map>
                </div>





            </div>

        </div>
    );
};

export default Hotels;