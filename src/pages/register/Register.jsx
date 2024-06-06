import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [emailError,setEmailError] = useState()
    const [passwordError,setpasswordError] = useState()

    const {createUser} = useContext(AuthContex)
    const navigate = useNavigate()






    const handleRegister = e=>{
        e.preventDefault();
        setEmailError('');
        setpasswordError('')
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const phone = form.get('phone')
        const email = form.get('email')
        const password = form.get('password')

        console.log(name,phone,email,password);


        //Create user

        createUser(email,password)
        .then(result=>{
            result.user.displayName = name;
            console.log(result.user);
            toast.success('Registration complete & you are logged in')
            navigate('/')
        })
        .catch(error=>{
            console.log(error.mesage);
            if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
                setEmailError('Email already in use')
            }
            else{
                setpasswordError('Password must be longer than 6 characters')
            }
        })

    }












    return (
        <div>
            <div className='mt-32'>
                <h2 className="text-4xl text-center font-bold italic text-orange-400">Create an account</h2>

                <form onSubmit={handleRegister}  className='md:w-3/4 lg:w-1/3 mx-auto'>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-orange-400 font-bold italic">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-orange-400 font-bold italic">Phone</span>
                        </label>
                        <input type="number" placeholder="Phone Number" className="input input-bordered" name='phone' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-orange-400 font-bold italic">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-orange-400 font-bold italic">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <center>
                            {emailError ? <p className='text-red-500 font-bold italic'>{emailError}</p> : <p className='text-red-500 font-bold italic'>{passwordError}</p>}
                        </center>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Register</button>
                    </div>

                </form>
                <p className='text-center mt-3 text-white'>Already have an account?  <Link className='text-orange-400 underline font-semibold' to='/login'>Login now</Link></p>
            </div>
        </div>
    );
};

export default Register;