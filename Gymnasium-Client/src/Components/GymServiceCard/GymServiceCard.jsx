// import React from 'react';

const GymServiceCard = ({ service }) => {
    return (
        <div className="max-w-sm bg-gray-800 text-white rounded overflow-hidden shadow-lg">
            <img className="w-full" src={service.image} alt={service.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{service.name}</div>
                <p className="text-gray-300 text-base">{service.description}</p>
                <p className="text-gray-400 font-bold mb-4">Price: ${service.price}</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default GymServiceCard;