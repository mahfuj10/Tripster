import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import TopBlogs from '../TopBlogs/TopBlogs';
import '../Blogs.css';

const Blogs = () => {

    // const [blogs, setBlogs] = useState([]);

    const [cycles, setCycles] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 4;


    // pagination button
    const paginationButton = {
        height: 40,
        width: 40,
        borderRadius: '50%',
        border: '1px solid #262931',
        color: '#262931',
        fontWeight: 600,
        background: "#FBF6F2"
    };

    useEffect(() => {
        fetch(`https://tripster-server-production.up.railway.app/cycles?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCycles(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    return (

        <section className='container' style={{ backgroundColor: "#FBF6F2", width: '100%', height: "auto" }}>

            <h1 className='text-3xl font-bold mt-16 mb-10 text-orange'>Our Blogs</h1>

            <div className="row ">

                <article className='col-lg-9  col-12 col-md-6  gap-10'>

                    {
                        cycles.length === 0
                            ?
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <div className="row">
                                {
                                    cycles.map(blog => blog.status === 'approved' && <Blog
                                        key={blog._id}
                                        blog={blog}
                                    />)
                                }
                            </div>}

                </article>

                <article className="col-lg-3 col-md-6 col-12">
                    <TopBlogs />
                </article>



            </div>

            <article className='flex justify-center gap-3 mt-6'>

                {[...Array(pageCount).keys()].map(number => <button
                    style={paginationButton}
                    className={number === page ? 'selected' : ''}
                    count={pageCount}
                    onClick={() => setPage(number)}
                >
                    {number}
                </button>
                )}


            </article>

        </section>
    );
};

export default Blogs;