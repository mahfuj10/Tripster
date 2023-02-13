import React from 'react';
import './AboutWriter.css';

const AboutWriter = ({ name }) => {

    return (
        <article className='pl-6 about-writer rounded-lg mt-12 pt-6 shadow-md bg-white' style={{ width: 335, height: 'auto' }}>
            <h3 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-2xl font-semibold'>About Blog</h3>
            <h5 className='text-lg mt-3 mb-2 font-semibold text-orange'>Hi! I'm {name}</h5>
            <p className='font-medium mb-4'>An adventure travel photographer, professional blogger, and digital nomad.</p>
            <img width="100%" src="http://tripster.axiomthemes.com/wp-content/uploads/2019/06/sidebar-image-copyright-370x178.jpg" alt="" />
        </article>
    );
};

export default AboutWriter;