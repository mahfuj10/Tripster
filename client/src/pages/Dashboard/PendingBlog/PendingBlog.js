import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import '../Dashboard/Dashboard.css';

const PendingBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tripster-server-production.up.railway.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);



    const handleDeletPost = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tripster-server-production.up.railway.app/deleteblog/${id}`, {
                    method: "DELETE"
                })
                    .then()
                    .then(() => {
                        const remainingBlogs = blogs.map(blog => blog._id !== id);
                        setBlogs(remainingBlogs)
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }

    const handleApprovePost = id => {
        fetch(`https://tripster-server-production.up.railway.app/blog/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "approved" }),
        })
        Swal.fire(
            'Approved!',
            'Your blog is published successfully.',
            'success'
        )
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Blog Name</th>
                    <th>Writer</th>
                    <th>Loaction</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>

                {
                    blogs.map(blog => blog.status === 'pending' && <tr>
                        <th>{blog.name}</th>
                        <th>{blog.writer}</th>
                        <th>{blog.loaction}</th>
                        <th>{blog.category}</th>
                        <th>{blog.date}</th>
                        <th>{blog.rating}</th>
                        <th>
                            <button className='btn btn-primary mr-2' onClick={() => handleApprovePost(blog._id)}>Approve</button>
                            <button className='btn btn-danger' onClick={() => handleDeletPost(blog._id)}>Delete</button>
                        </th>
                    </tr>)
                }

            </table>
        </div>
    );
};

export default PendingBlog;