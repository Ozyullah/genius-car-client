import React from 'react';
import { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { CarContext } from '../../Context/AuthContext';

const Check = () => {
    const { user } = useContext(CarContext)
    const { title, price, img, _id } = useLoaderData()
    console.log(title)

    const handleFrome = event => {
        event.preventDefault()
        const from = event.target;
        const name = `${from.firstName.value} ${from.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = from.phone.value;
        const addres = from.addres.value;
        const date = from.date.value;
        const massage = from.massage.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            massage,
            addres,
            date,
            img
        }


        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Ordered succesfully placed')
                    from.reset()
                }
            })
    }
    return (
        <div>

            <Form onSubmit={handleFrome}>
                <div>
                    <h2 className="text-3xl text-center m-5">{title}</h2>
                    <h4 className='text-2xl text-center mb-4'>Price: {price}</h4>
                    <div className='grid grid-cols-2 gap-5 w-96 mx-auto'>
                        <input className='input input-bordered w-full max-w-xs' type="text" name="firstName" placeholder='First Name' required id="" />
                        <input className='input input-bordered w-full max-w-xs' type="text" name="lastName" placeholder='Last Name' id="" />
                        <input className='input input-bordered w-full max-w-xs' type="text" name="phone" placeholder='Your Phone' required id="" />
                        <input className='input input-bordered w-full max-w-xs' type="text" name="addres" placeholder='Your address' required id="" />
                        <input className='input input-bordered w-full max-w-xs' type="date" name="date" placeholder='' required id="" />

                        <input className='input input-bordered w-full max-w-xs text-zinc-400' type="email" name="email" placeholder='Your Email' defaultValue={user?.email} id="" readOnly required />
                        <textarea name='massage' className="textarea textarea-bordered h-32 w-96 text-blue-300" placeholder="Your Massage"></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <input className='btn w-96 text-white font-bold text-center rounded-md m-5 bg-red-500' type="submit" value="Submit" />
                    </div>

                </div>


            </Form>
        </div>
    );
};

export default Check;