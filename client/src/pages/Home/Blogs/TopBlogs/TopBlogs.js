import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBlogs = () => {

    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tripster-server-production.up.railway.app/topBlog').then(res => res.json())
            .then((data => setTopBlogs(data)))
    }, []);

    const navigate = useNavigate();

    return (
        <aside className='shadow-md bg-white px-7 py-3 rounded-lg'>
            <h1 className='text-2xl font-bold mb-3 text-orange'>Top Blogs</h1>

            {
                topBlogs.map(blog => <article
                    className='mb-4 rounded-lg'
                    type="button"
                    onClick={() => navigate(`/blog-details/${blog._id}`)}
                    style={{ backgroundImage: `url(${blog.blogImg})`, width: '100%', height: '190px', backgroundSize: 'cover' }}
                >

                    <h6 className='text-lg  font-semibold text-white ml-2 pt-32'>{blog.name}</h6>

                </article>)
            }

        </aside>
    );
};

export default TopBlogs;