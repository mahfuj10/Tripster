import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        <footer className='p-5 ' style={{ background: "#19191B" }}>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4'>

                <article className='mb-5 mb-md-0'>
                    <h6 className='text-white font-semibold text-md'>QUICK LINKS</h6>

                    <Link to="/">Home </Link>
                    <Link to="/">Blog </Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Private Policy</Link>
                    <Link to="/">Styled</Link>

                </article>

                <article >
                    <h6 className='text-white font-semibold text-md'>ARCHIVES</h6>
                    <Link to="/">January 2018 </Link>
                    <Link to="/">December 2017 </Link>
                    <Link to="/">November 2017</Link>
                    <Link to="/">August 2017</Link>
                    <Link to="/">October 2017</Link>
                    <Link to="/">September 2017</Link>
                </article>

                <article>
                    <h6 className='text-white font-semibold text-md'>SOCIAL</h6>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Instrgram </Link>
                    <Link to="/">Twitter</Link>
                    <Link to="/">Pinterest</Link>
                    <Link to="/">Google+</Link>
                    <Link to="/">Linkedin</Link>
                </article>

                <article>
                    <h6 className='text-white font-semibold text-md'>OUR NEWSLETTER</h6>
                    <p style={{
                        color: '#6F7576',
                        marginTop: '15px',
                        fontSize: '14px'
                    }}>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>
                    <input type="text" className='bg-dark p-2 mt-4' /><button className='bg-primary p-2 px-3 text-white'>SEND</button>
                </article>

            </div>
        </footer >

    );
};

export default Footer;