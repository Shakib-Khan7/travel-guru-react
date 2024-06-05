import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProvider';

const Login = () => {

    const {logIn} = useContext(AuthContex)

    const location = useLocation()
    const navigate = useNavigate()





    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')


        //login

        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            alert('successful login')
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(error=>{
            console.log(error.message);
        })


    }

















    return (
        <div>
            <div className='mt-32'>
                <h2 className="text-4xl text-center font-bold italic text-orange-400">Login</h2>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/3 mx-auto'>

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
                           
                        </center>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Login</button>
                    </div>

                </form>
                <p className='text-center text-white mt-3'>Don't have an account?  <Link className='text-orange-400 underline font-semibold' to='/register'>Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;