import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const { data } = await axios.get(`http://localhost:9000/services`);
                setServices(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Gym Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <GymServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

const GymServiceCard = ({ service }) => {

    // Function to handle Add to Cart
    const {user} = useAuth()
    console.log(user);
    
    const handleAddToCart = async (service) => {
        try {
            const response = await fetch('http://localhost:9000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: service.id,
                    name: service.name,
                    price: service.price,
                    quantity: 1, 
                    email: user.email,
                    user_name : user.displayName
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add to cart");
            }

            const result = await response.json();
            toast.success("Added to cart");

            console.log("Added to cart:", result);

        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="max-w-sm bg-gray-800 text-white rounded overflow-hidden shadow-lg">
            <img className="w-full" src={service.image} alt={service.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{service.name}</div>
                <p className="text-gray-300 text-base">{service.description}</p>
                <p className="text-gray-400 font-bold mb-4">Price: ${service.price}</p>
                <button 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                    onClick={() => handleAddToCart(service)} // Call the function on button click
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Service;
