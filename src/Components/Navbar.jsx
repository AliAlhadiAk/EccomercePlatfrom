import React, { useState } from 'react';
import logo from './Pages/assets/logo.png';
import cart from './Pages/assets/cart_icon.png';
import { Link } from 'react-router-dom';
import useWindowSize from './useWindowSize';
import { BiMenu, BiX } from 'react-icons/bi'; // BiX for close icon

const Navbar = () => {
    const [border, setBorder] = useState('shop');
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
    const { width } = useWindowSize();

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='flex justify-between items-center p-4 navbar bg-white shadow-md'>
            {/* Logo and Name */}
            <div className="flex items-center">
                <img src={logo} alt='' className="h-10 mr-2" />
                <p className='text-black text-2xl font-bold'>SHOPPER</p>
            </div>

            {/* Mobile Menu Icon */}
            {width < 768 ? (
                <div className='flex items-center'>
                    {showMenu ? (
                        <BiX className='text-3xl cursor-pointer animate-pulse' onClick={toggleMenu} />
                    ) : (
                        <BiMenu className='text-3xl cursor-pointer animate-pulse' onClick={toggleMenu} />
                    )}
                </div>
            ) : (
                // Desktop Menu
                <ul className='flex items-center gap-8 text-gray text-lg font-semibold'>
                    <li className={`cursor-pointer ${border === 'shop' ? "li" : ""}`} onClick={() => setBorder('shop')}><Link to={'/'}>Shop</Link></li>
                    <li className={`cursor-pointer ${border === 'Men' ? "li" : ""}`} onClick={() => setBorder('Men')}><Link to={'/men'}>Men</Link></li>
                    <li className={`cursor-pointer ${border === 'Women' ? "li" : ""}`} onClick={() => setBorder('Women')}><Link to={'/women'}>Women</Link></li>
                    <li className={`cursor-pointer ${border === 'Kids' ? "li" : ""}`} onClick={() => setBorder('Kids')}><Link to={'/kids'}>Kids</Link></li>
                </ul>
            )}

            {/* Mobile Menu */}
            {showMenu && width < 768 && (
                <div className='absolute top-0 left-0 w-full h-[100vh] bg-white z-50'>
                    <ul className='flex flex-col items-center gap-4 pt-20 text-gray text-lg font-semibold  animate-menu'>
                        <li className={`cursor-pointer ${border === 'shop' ? "li" : ""}`} onClick={() => { setBorder('shop'); toggleMenu(); }}><Link to={'/'}>Shop</Link></li>
                        <li className={`cursor-pointer ${border === 'Men' ? "li" : ""}`} onClick={() => { setBorder('Men'); toggleMenu(); }}><Link to={'/men'}>Men</Link></li>
                        <li className={`cursor-pointer ${border === 'Women' ? "li" : ""}`} onClick={() => { setBorder('Women'); toggleMenu(); }}><Link to={'/women'}>Women</Link></li>
                        <li className={`cursor-pointer ${border === 'Kids' ? "li" : ""}`} onClick={() => { setBorder('Kids'); toggleMenu(); }}><Link to={'/kids'}>Kids</Link></li>
                    </ul>
                    <div className='absolute top-4 right-4'>
                        <BiX className='text-3xl cursor-pointer animate-pulse' onClick={toggleMenu} />
                    </div>
                </div>
            )}

            {/* Login, Cart, Counter */}
            {width >= 768 && (
                <div className='flex items-center gap-4 mr-7'>
                    <Link to={'/login'} className='border border-gray-500 rounded-2xl px-9 py-2 hover:bg-gray-400 hover:transition-all hover:duration-300'>Login</Link>
                    <img src={cart} alt='' className="h-8" />
                    <div className='counter'>0</div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
