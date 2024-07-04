import React from 'react';
import new_collections from './Components/Pages/assets/new_collections'; // Adjust the path as per your project structure

const NewCollections = () => {
    return (
        <div>
            <div className='mt-20 flex justify-center'>
                <h1 className='font-bold text-4xl'>New Collections</h1>
                <hr />
            </div>
            <div className="grid lg:grid lg:grid-cols-4 items-center justify-center gap-4 mt-8 mx-auto px-4 lg:w-[90vw] md:grid-cols-2">
                {/* Mapping over new_collections to render each item */}
                {new_collections.map((item, i) => (
                    <div key={i} className="rounded-lg overflow-hidden  hover:scale-105 transition-transform duration-300 ease-in-out animate">
                        <img loading='lazy' src={item.image} alt='' className='w-full h-auto hover:mb-4' />
                        <div className="p-4">
                            <p className="text-lg font-semibold mb-2">{item.name}</p>

                            <p className="text-gray-800 font-bold">${item.new_price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewCollections;
