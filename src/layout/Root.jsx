import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import bg from '../assets/images/icons/Screenshot(117).png';
import Navbar from '../pages/shared/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div >
            <Toaster></Toaster>
             <div className="home-container">
            <div className="background-container">
                <Navbar />

                <div>

                    <Outlet></Outlet>
                    
                    

                </div>

            </div>
        </div>
            
            
        </div>
    );
};

export default Root;
