import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {

    const { googleSign, loginUser, error } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleGoogleSign = () => {
        googleSign(location, navigate);
    };
    const handleloginUser = e => {
        e.preventDefault();
        loginUser(email, password, location, navigate);
    };

    return (
        <div className="container login-box">
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleloginUser} className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                required
                                onChange={e => setEmail(e.target.value)}
                                type="text" className="login__input" placeholder="Your  email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                required
                                type="password" className="login__input" placeholder="Your password" />
                        </div>
                        <button type='submit' className="button login__submit">
                            <span className="button__text">Log In </span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <button onClick={handleGoogleSign} href="#" className="social-login__icon fab fa-google"></button>

                        </div>
                    </div>

                    <small className='font-bold text-orange ml-4'>Don't have an acccount ? <Link className='text-white' to="/register">Register..</Link></small>

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
        </div>
    );
};

export default Login;