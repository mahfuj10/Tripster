import React from 'react';
import { useForm } from "react-hook-form";
import '../../BlogDetails.css';
import './ReviewForm.css';
import useAuth from '../../../Login/Hooks/useAuth';

const ReviewForm = ({ id }) => {

    const { register, handleSubmit, reset } = useForm();
    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const presentDate = today.getFullYear();
    today = day + '/' + month + '/' + presentDate;
    const { user } = useAuth();

    const onSubmit = data => {

        data.blogId = id;
        data.date = today;
        data.image = user.photoURL

        fetch('https://tripster-server-production.up.railway.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                reset();
                alert('Thanks for your review ...')
            })
    };

    return (

        <section className="review-form mt-10 rounded-lg p-3 shadow-sm" style={{ width: 335 }}>

            <h4 style={{ fontFamily: 'Nunito, sans-serif' }} className="position-absolute text-2xl font-bold text-orange">Write a reivew</h4>

            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                <label>Your Name*</label> <br />
                <input required {...register("name")} /> <br />
                {/* <label>Your Email</label> <br />
                <input {...register("email")} /> <br /> */}
                <label>Rating*</label> <br />
                <select required  {...register("rating")}>
                    <option >choose rating*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br />

                <label>You Message*</label> <br />
                <textarea required {...register("description")} placeholder="Your Message" rows="4"></textarea>

                <input className='text-white' style={{ background: "#DF5726" }} value="Submit a Review" type="submit" />

            </form>
        </section>
    );
};

export default ReviewForm;