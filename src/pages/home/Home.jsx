import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import bg from '../../assets/images/icons/Screenshot(117).png';
import img1 from '../../assets/images/icons/Sajek.png'
import img2 from '../../assets/images/icons/Sreemongol.png'
import img3 from '../../assets/images/icons/sundorbon.png'
import './Home.css'; // Import a CSS file for additional styling
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    
   
    return (
        <div className="">
            
            <div className="">
                

                <div>
                    <div className='flex flex-col sm:flex-row justify-between mt-10'>
                        <div>

                            <h2 className='text-7xl ml-0 sm:ml-2 md:ml-6 lg:ml-6 text-orange-400 mb-5 font-bold italic'>Travel Guru</h2>
                            <p className='text-orange-200 md:text-2xl lg:text-2xl italic ml-5 mb-6 font-serif'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Fugiat, eligendi impedit consequatur porro libero, <br /> iure quidem itaque voluptas eius vel quae hic veritatis exercitationem ratione dolor? Ipsam optio temporibus totam.</p>



                        </div>









                        <div className="carousel sm:w-5/12">
                            <Link to='/1'>
                            <div id="item1" className="carousel-item cox-img">
                                <img src={img1} className="max-w-56 sm:max-w-48 md:max-w-64 lg:max-w-80 hover:max-w-96" />
                                <p className='cox-text text-4xl font-thin'>COX'S BAZAR</p>
                            </div>
                            </Link>

                            <Link className='' to='/2'>
                            <div id="item2" className="carousel-item cox-img ">
                                <img src={img2} className="max-w-56 sm:max-w-48 md:max-w-64 lg:max-w-80 hover:max-w-96" />
                                <p className='cox-text text-4xl  font-thin'>SREEMANGAL</p>
                            </div>
                            </Link>
                            <Link to='/3'>
                            <div id="item3" className="carousel-item cox-img ">
                                <img src={img3} className="max-w-56 sm:max-w-48 md:max-w-64 lg:max-w-80 hover:max-w-96" />
                                <p className='cox-text text-4xl font-thin'>SUNDARBAN</p>
                            </div>
                            </Link>
                           
                        </div>
                       
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            
                        </div>

                </div>

            </div>
        </div>
    );
};

export default Home;
