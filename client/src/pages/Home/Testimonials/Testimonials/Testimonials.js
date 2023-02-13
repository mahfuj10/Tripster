import React, { useEffect, useState } from 'react';
import reviewBanner from '../../../../images/testimonals.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../Testimonial/Testimonial';
import '../Testimonials.css';

const Testimonials = () => {

    const [reviews, setReviws] = useState([]);

    useEffect(() => {
        fetch('https://tripster-server-production.up.railway.app/webreviews')
            .then(res => res.json())
            .then(data => setReviws(data));
    }, []);

    const slickSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    return (

        <section style={{ background: "#FBF6F2" }}>

            <h1 className='text-3xl font-bold  text-orange text-center mt-20 mb-10'>Testimonials</h1>

            <article className='row container mx-auto items-center'>

                <article className='col-lg-9 flex justify-center'>
                    <img src={reviewBanner} width='450' alt="reviewbanner" />
                </article>

                <article className='col-lg-3 '>
                    <Slider className='testimonal' {...slickSlider} style={{ marginLeft: "-450px", width: "450px" }}>
                        {
                            reviews.map(review => <Testimonial
                                review={review}
                                key={review.name}
                            />)
                        }
                    </Slider>
                </article>

            </article>

        </section >

    );
};

export default Testimonials;