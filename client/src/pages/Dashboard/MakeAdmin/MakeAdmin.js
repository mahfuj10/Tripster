import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleMakeAdmin = e => {
        e.preventDefault();

        const user = { email };

        fetch(`https://tripster-server-production.up.railway.app/users/admin`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("make Admin sucessfully")
                    setEmail('');
                }
            })

    }

    return (
        <div className='container'>
            <form className='flex mt-32' onSubmit={handleMakeAdmin}>

                <input
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email..'
                    type="text"
                    style={{ background: "", border: "1px solid blue" }}
                />

                <button type='submit' className='btn btn-primary'>MAKE</button>

            </form>
        </div>
    );
};

export default MakeAdmin;