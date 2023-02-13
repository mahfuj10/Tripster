import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularBlogs = () => {

    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tripster-server-production.up.railway.app/topBlog').then(res => res.json())
            .then((data => setTopBlogs(data.slice(0, 3))))
    }, []);

    const navigate = useNavigate();

    return (
        <aside style={{ width: 335 }} className='shadow-sm ml-auto mr-auto lg:ml-0 bg-white px-3 py-3 mt-10 rounded-lg'>

            <h1
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className='text-2xl font-bold mb-3 text-orange'>
                Most Popular
            </h1>

            {
                topBlogs.map(blog => <article
                    className='mb-3 rounded-lg'
                    type="button"
                    onClick={() => navigate(`/blog-details/${blog._id}`)}
                    style={{ backgroundImage: `url(${blog.blogImg})`, width: '300px', height: '163px', backgroundSize: 'cover' }}
                >

                    <h6 style={{ fontFamily: 'Nunito, sans-serif' }} className='text-md  font-semibold text-white ml-2 pt-28'>{blog.name}</h6>

                </article>)
            }

        </aside>
    );
};

export default PopularBlogs;