/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

const Booking = ({myDestination}) => {

    const destination = myDestination.name
    
    
    return (
        <div className="hero min-h-96 max-w-2xl bg-slate-100 mx-auto rounded">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <form className="card-body max-w-96 md:max-w-none">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" className="input input-bordered w-56 md:w-96 text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" className="input input-bordered text-black" required disabled placeholder={destination}/>

                        </div>

                        <div className='flex'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input type="date" className="input input-bordered text-black" required />
                            
                            
                            
                            

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <input type="date" className="input input-bordered text-black" required />

                        </div>
                        </div>











                        <div className="form-control mt-6">
                            <Link to={`/hotels/${destination}`}>
                            <button className='btn btn-warning w-full'>Start booking</button>
                            </Link>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default Booking;