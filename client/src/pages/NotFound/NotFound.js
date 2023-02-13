import React from 'react';
import notFoundGif from '../../images/notFound.gif';

const NotFound = () => {

    return (

        <section className='flex justify-center items-center'>
            <img src={notFoundGif} alt="pagenotfoundimage" />
        </section>
    );
};

export default NotFound;