import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const EmailingSystem = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_474ds45', 'template_mou4ifk', form.current, {
                publicKey: 'IJ7STPPpOEgrgJl5a',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='flex flex-col-reverse md:flex-row justify-center gap-8'>
            <div className=' lg:w-1/2'>
                <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_vector-1682308675425-6624d33b4b20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <form ref={form} onSubmit={sendEmail} className='space-y-2 lg:w-2/5'>
                <h1 className='text-3xl mb-6'>Send a message to me</h1>
                <div className='flex flex-col'>
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Message</label>
                    <textarea
                        name="message"
                        className="textarea textarea-bordered h-24"
                        required
                    />
                </div>
                <input type="submit" value="Send" className='btn btn-block my-4' />
            </form>

        </div>
    );
};

export default EmailingSystem;