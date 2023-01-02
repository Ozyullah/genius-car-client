import React from 'react';
import image from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Form, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarContext } from '../../Context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {

    const {user, signInWithGoogle, createUser} =useContext(CarContext)

    console.log(user)

    const handleSignUp= event =>{
        event.preventDefault();
        const form =event.target;
        const displayName =form.name.value;
        const email =form.email.value;
        const password =form.password.value;

        form.reset('')

        createUser(email,password)
        .then((reasult)=>{
            const user =reasult.user;
        })
        .catch((error)=>{
            console.error('firebase error',error)
        })

        
    }

    const handleSignInWithGoogle=()=>{

        const Provider= new GoogleAuthProvider();

        signInWithGoogle(Provider)
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <h1 className='text-2xl font-bold text-center mt-8'>Sign Up</h1>

                        <Form onSubmit={handleSignUp} className="card-body">

                            {/*  Name section start  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                name='name'
                            
                                className="input input-bordered" />
                            </div>

                            {/* Name section end */}

                            {/* Email section Start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                name='email'
                            
                                className="input input-bordered" />
                            </div>
                            {/* Email section end */}

                            {/* password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                name='password'
                                
                                className="input input-bordered" />

                            </div>
                            {/* password section end */}

                            {/* Confirme password start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirme Password</span>
                                </label>
                                <input type="password" placeholder="confirme password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>

                        </Form>

                        <div className='m-3 text-center'>
                            <h5>Or sign up with</h5>

                            <div className='flex justify-center mt-3'>
                                <button  className='text-sky-300 mr-2'><FaFacebook /></button>
                                <button onClick={handleSignInWithGoogle} ><FcGoogle /></button>
                                <button  className='text-sky-600 ml-2'><FaLinkedinIn />  </button>
                            </div>

                            <h5 className='mt-8'>Already have an account?<Link to={'/login'} className='text-red-500'>Login</Link></h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;