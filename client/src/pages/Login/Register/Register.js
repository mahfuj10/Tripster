import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../Login/Login/Login.css';
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const { googleSign, error, registerUser, success } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const handleGoogleSign = () => {
        googleSign(location, navigate);
    };
    const handleRegisterUser = e => {
        e.preventDefault();
        registerUser(email, password, name, navigate, location);
    };

    return (
        <div className="container login-box">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleRegisterUser} className="login">

                        <div className="login__field mt-0 mb-0">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                required
                                onChange={e => setName(e.target.value)}
                                type="text" className="login__input mt-0 mb-0" placeholder="Your  name" />
                        </div>

                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                required
                                onChange={e => setEmail(e.target.value)}
                                type="email" className="login__input mt-0 mb-0" placeholder="Your  email" />
                        </div>

                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                required
                                type="password" className="login__input mt-0 mb-0" placeholder="Your password" />
                        </div>

                        <button type='submit' className="button mt-0 login__submit">
                            <span className="button__text">Log In </span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="ml-2 flex items-center">
                        <h3 className='text-lg font-semibold text-orange ml-3'>log in via</h3>
                        <button onClick={handleGoogleSign} href="#" className="social-login__icon fab fa-google mt-0 mb-0"></button>

                    </div>

                    <small className='font-bold text-orange ml-4'>Already have an acccount ? <Link className='text-white' to="/login">Login..</Link></small>

                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
            {error && <div class="alert alert-danger" role="alert">
                {error}
            </div>}
            {success && <div class="alert alert-success" role="alert">
                {success}
            </div>}
        </div>
    );
};

export default Register;