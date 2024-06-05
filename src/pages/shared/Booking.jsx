/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';

const Booking = ({myDestination}) => {

    const {bookingInfo} = useContext(AuthContex)
    const navigate = useNavigate()

    const destination = myDestination.name

    const handleBooking = (e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const origin = form.get('origin')
        const from = form.get('from')
        const to = form.get('to')
        console.log(origin,from,to);
        bookingInfo(origin,from,to)
        


        navigate(`/hotels/${destination}`)

    }
    
    
    return (
        <div className="hero min-h-96 max-w-2xl bg-slate-100 mx-auto rounded">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <form onSubmit={handleBooking} className="card-body max-w-96 md:max-w-none">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <input type="text" className="input input-bordered w-56 md:w-96 text-black" required name='origin' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Destination</span>
                            </label>
                            <input type="text" className="input input-bordered text-black"  readOnly placeholder={destination}/>

                        </div>

                        <div className='flex'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">From</span>
                            </label>
                            <input type="date" className="input input-bordered text-black" required name='from' />
                            
                            
                            
                            

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">To</span>
                            </label>
                            <input type="date" className="input input-bordered text-black" required name='to' />

                        </div>
                        </div>











                        <div className="form-control mt-6">
                            
                            
                            
                                <button className='btn btn-warning'>
                                Start Booking
                                </button>
                            
                           
                            
                            
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default Booking;