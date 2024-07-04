import React from 'react';
import hand from './Pages/assets/hand_icon.png';
import arrowIcon from './Pages/assets/arrow.png';
import hero from './Pages/assets/hero_image.png';

const Hero = () => {
    return (
        <div className="hero flex flex-col lg:flex-row items-center">
            {/* Left side */}
            <div className="hero-left flex-1 flex flex-col justify-center items-center lg:items-start gap-5 pl-8 lg:pl-40">
                <h2 className='text-black text-2xl font-semibold text-center mt-4 lg:text-left'>NEW ARRIVALS NOW</h2>
                <div className="hand flex items-center gap-5  ">
                    <p className='text-black text-8xl font-bold'>new</p>
                    <img className='w-25' src={hand} alt="Hand icon" />
                </div>
                <p className="text-center lg:text-left">collection</p>
                <p className="text-center lg:text-left">for everyone</p>
                <div className="hero-btn flex items-center gap-4">
                    <div>Latest Collection</div>
                    <img src={arrowIcon} alt="Arrow icon" />
                </div>
            </div>

            {/* Right side */}
            <div className="hero-right flex-1">
                <img src={hero} alt="Hero image" className="w-full" />
            </div>
        </div>
    );
}

export default Hero;
