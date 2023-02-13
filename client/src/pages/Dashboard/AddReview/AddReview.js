import React from 'react';
import { useForm } from 'react-hook-form';
import '../../Dashboard/Dashboard/Dashboard.css';

const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('https://tripster-server-production.up.railway.app/webreviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                alert("Thank For your review");
                reset();
            })

    }

    return (

        <section className="review-form mt-5 lg:ml-20 rounded-3 lg:mb-5  p-3 shadow-sm" style={{ width: 335 }}>

            <h4 className="position-absolute text-2xl font-bold text-orange">Write a reivew</h4>

            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                <label>Your Name*</label> <br />
                <input required {...register("name")} /> <br />
                <label>Your Profession*</label> <br />
                <input required {...register("profession")} /> <br />



                <label>You Message*</label> <br />
                <textarea required {...register("description")} placeholder="Your Message" rows="4"></textarea>

                <input className='text-white' style={{ background: "#DF5726" }} value="Submit a Review" type="submit" />

            </form>
        </section>
    );
};

export default AddReview;