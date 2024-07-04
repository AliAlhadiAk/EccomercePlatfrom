import React from 'react';
import data_product from './Components/Pages/assets/data'; // Adjust the path as per your project structure
import Item from './Item'; // Assuming Item component is correctly defined

const PopularWomen = () => {
    return (
        <div>
            <div className='flex justify-center mt-20'>
                <h1 className='font-bold text-4xl'>Popular IN Women</h1>
                <hr />
            </div>
            <div className="grid lg:flex items-center justify-center gap-4 mt-8 mx-auto px-4 lg:w-[90vw] md:grid-cols-2">
                {/* Mapping over data_product to render each item */}
                {data_product.map((item, i) => (
                    <div key={i} className="rounded-lg overflow-hidden  hover:scale-105 transition-transform duration-300 ease-in-out keyframes-women">
                        <img loading='lazy' src={item.image} alt={item.name} className='w-full h-auto hover:mb-4' />
                        <div className="p-4">
                            <p className="text-lg font-semibold mb-2">{item.name}</p>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-gray-800 font-bold">${item.new_price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularWomen;
