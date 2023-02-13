import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';

const BlogReview = ({ id, name }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://tripster-server-production.up.railway.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, id])

    return (
        <>
            <section className='mb-0 lg:ml-24 mt-10 container pb-4'>


                <h4 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-3xl font-bold mb-4'>Reviews for this blog</h4>

                <article className="row">

                    <article className='col-lg-11' >
                        {
                            reviews.map(review => <Review
                                review={review}
                                key={review?._id}
                            />)
                        }
                    </article>


                </article>

            </section>
        </>
    );
};

export default BlogReview;