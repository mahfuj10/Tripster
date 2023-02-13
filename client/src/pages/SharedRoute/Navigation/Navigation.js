import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Login/Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {

    const { handaleLogOut, user } = useAuth();
    const navigate = useNavigate();

    return (
        <div style={{ background: "#19191B" }}>
            <div class="nav container ">
                <input type="checkbox" id="nav-check"></input>
                <div class="nav-header ">
                    <div class="nav-title">
                        <span className='text-orange'>Trip</span>ster
                    </div>

                </div>
                <div class="nav-btn" >
                    <label for="nav-check" type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className='flex gap-2 mt-3 text-white'>
                    <h6 className='text-sm font-semibold'>{user.displayName}</h6>
                    <h6 className='text-sm font-semibold'>{user.email}</h6>
                </div>

                <div class="nav-links ml-auto" >
                    <Link to="/home">Home</Link>
                    {/* <Link to="/blogs">Blogs</Link> */}
                    <Link to="/dashboard">Dashboard</Link>
                </div>

                {
                    user.email
                        ?
                        <button onClick={handaleLogOut} className='bg-white font-semibold px-3 ml-4 text-danger'>Log Out</button>
                        :
                        <button onClick={() => navigate('/login')} className='bg-white font-semibold px-3 ml-4 text-danger'>Login</button>
                }
            </div>
        </div>
    );
};

export default Navigation;