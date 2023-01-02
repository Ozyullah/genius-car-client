import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Form, Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { CarContext } from '../../Context/AuthContext';

const Login = () => {

    const {user,signInWithGoogle,loginWithEmailPassword} =useContext(CarContext);

    console.log(user)

    const handleLogin = event => {
        event.preventDefault()
        const form =event.target;
        const email=form.email.value;
        const password =form.password.value;

        form.reset('');
        
        loginWithEmailPassword(email,password)
        .then((reasult)=>{
            const user =reasult.user;
        })
        .catch((error)=>{
            console.error('firebaseError',error)
        })
    }

    const handleSignInWithGoogle=()=>{
        
        const Provider =new GoogleAuthProvider();
            console.log(Provider)
        signInWithGoogle(Provider);


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left mr-3">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-3xl text-center font-bold'>Login</h1>

                            {/* Email section Start */}
                            <Form onSubmit={handleLogin} className="form-control">
                                <div  className="form-control">
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


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign in</button>
                                </div>
                            </Form>
                            <div className='m-3 text-center'>
                                <h5>Or sign in with</h5>

                                <div className='flex justify-center mt-3'>
                                    <button className='text-sky-300 mr-2'><FaFacebook /></button>
                                    <button onClick={handleSignInWithGoogle} ><FcGoogle /></button>
                                    <button className='text-sky-600 ml-2'><FaLinkedinIn />  </button>
                                </div>

                                <h5 className='mt-8'>Have not  an account?<Link to={'/signup'} className='text-red-500'>SignUp</Link></h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;