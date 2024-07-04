import React, { useState } from 'react';
import logo from './Components/Pages/assets/logo.png'
import { PiGithubLogo } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

const GetExclusiveOffersEmail = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Implement your subscribe logic here
        console.log('Subscribing with email:', email);
    };

    return (
        <div className='mt-20 exclusive-email flex flex-col items-center execlusive-email w-[90vw] mx-auto'>
            <h1 className='font-bold text-5xl md:text-3xl pt-10'>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className=' mt-8'>
                <div className='flex border border-gray-500 rounded-2xl'>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email'
                    required
                    className='bg-none text-xl text-black py-2 px-5 border border-none rounded-2xl w-[70vw] lg:w-[50vw]'
                />
                <button
                    type='button'
                    onClick={handleSubscribe}
                    className=' rounded-2xl    bg-black text-white font-semibold px-4 py-2 rounded-r-2xl right-0 top-0 bottom-0 flex items-center'
                >
                    Subscribe
                </button>
                </div>
                <div className="flex justify-center mt-40  self-center">
                <img src={logo} alt='' className="h-10 mr-2" />
                <p className='text-black text-2xl font-bold'>SHOPPER</p>
                
            </div>
            <ul className='flex gap-6 justify-center mt-10'>
                    <li className='text-xl text-black'>Company</li>
                    <li className='text-xl text-black'>Products</li>
                    <li className='text-xl text-black'>Offices</li>
                    <li className='text-xl text-black'>About</li>
                    <li className='text-xl text-black'>Contact</li>
                </ul>
                <div className='flex gap-4 justify-center mt-12 mb-5'>
                    <BsInstagram  className='text-xl'/>
                    <PiGithubLogo className='text-xl'/>
                    <FaWhatsapp className='text-xl'/>
                </div>
                <div className='footer flex flex-col items-center'>
                    <hr className='text-xl border border-b-black'/>
                 <h1>Copyright &copy; 2024- Made by AliAboKhalil</h1>
                </div>
            </div>
        </div>
    );
};

export default GetExclusiveOffersEmail;
