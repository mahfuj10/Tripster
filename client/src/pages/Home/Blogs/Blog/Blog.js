import React from 'react';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import '../Blogs.css';

const Blog = ({ blog }) => {

    const { blogImg, name, desc1, date, price, category, _id, rating, day, loaction } = blog;

    const navigate = useNavigate();

    const handleSeeDetails = () => navigate(`/blog-details/${_id}`)


    return (


        <article className='col-lg-6 col-12  mb-5'>

            <article style={{ width: '100%', background: "#fff" }} className='shadow-md'>

                <figure onClick={handleSeeDetails}>
                    <img type="button" src={blogImg} style={{ width: '100%', height: '100%' }} alt="" />
                </figure>

                <h3
                    style={{ height: 90 }}
                    onClick={handleSeeDetails}
                    type="button"
                    className='p-6 hover:text-orange text-2xl font-semibold  transition'>
                    {name}
                </h3>

                <article className='pl-6'>

                    <button
                        className='bg-yellow-600 text-xs p-1 px-3 rounded-sm text-white hover:bg-yellow-700 transition'
                    >
                        {category}
                    </button>
                    <i class="far fa-clock ml-8 "></i>
                    <small className='font-semibold ml-1'>{date}</small>

                    <Rating initialRating={rating}
                        style={{ fontSize: '15px', color: "#D85726", marginTop: '10px', marginLeft: 15 }}
                        emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly />
                    <br />

                    <span className='flex gap-4 items-center'>
                        <small className=' mt-2 mb-0 d-block text-sm font-semibold text-orange'>${price} for {day} days.</small>

                        <span className='flex items-center gap-2'>
                            <i class="fas text-orange mt-2 fa-map-marker-alt"></i>  <small className=' mt-2 mb-0 d-block text-sm font-semibold text-orange'>{loaction}</small>
                        </span>
                    </span>

                    <p style={{ width: '95%' }} className='text-justify  py-2 '>{desc1.slice(0, 186)}...</p>



                </article>

            </article>
        </article>

    );
};

export default Blog;