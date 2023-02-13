import React, { useEffect, useState } from 'react';

const ManageBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tripster-server-production.up.railway.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    const handleDeleteBlog = id => {

        const uri = `https://tripster-server-production.up.railway.app/deleteblog/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",
            })
                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remainingBlogs = blogs.map(blog => blog._id !== id);
                        setBlogs(remainingBlogs)
                        alert("delete")
                    }
                })
        }
    }

    return (
        <div style={{ overflowX: 'scroll' }}>
            {

                blogs.length === 0 ?

                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <table style={{ overflowX: 'scroll', width: '100%' }} >
                        <tr>
                            <th>Blog Name</th>
                            <th>Writer</th>
                            <th>Country</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>

                        {
                            blogs.map(blog => blog?.status === 'approved' && <tr>
                                <th className='flex gap-2'><img src={blog.blogImg} width="30" height="30" alt="" /> {blog.name}</th>
                                <th>{blog.writer}</th>
                                <th>{blog.loaction}</th>
                                <th>{blog.category}</th>
                                <th>
                                    <button onClick={() => handleDeleteBlog(blog._id)} className='btn btn-danger'>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </table>}
        </div>
    );
};

export default ManageBlogs;