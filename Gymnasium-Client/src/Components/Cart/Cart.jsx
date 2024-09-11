import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Cart = () => {
    const [cartData, setCartData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user?.email) {
            getData(); 
        }
    }, [user]);

    // Fetch cart data from the server
    const getData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:9000/carts/${user?.email}`);
            setCartData(data);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    // Handle remove item from cart
    const handleRemoveFromCart = async (itemId) => {
        try {
            const response = await axios.delete(`http://localhost:9000/cart/${itemId}`);

            if (response.status === 200) {
                console.log(`Item with ID ${itemId} removed from the cart`);
                // Update UI after successful removal
                toast.success("Removed to cart");

                getData();
            }
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };
    console.log(cartData);


    const handleConfirmPayment = async () => {
       
        try {
            const { data } = await axios.delete(`http://localhost:9000/myCart/${user.email}`)
            console.log(data)
            setCartData([]);
        } catch (error) {
            console.error("Error confirming payment:", error);
        }
    };


    // Calculate total price
    const calculateTotalPrice = () => {
        return cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
            {cartData ? (
                cartData.length > 0 ? (
                    <table className="min-w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="border-b dark:border-gray-600">
                                <th className="py-2 px-4 text-left">Product</th>
                                <th className="py-2 px-4 text-left">Quantity</th>
                                <th className="py-2 px-4 text-left">Price</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item) => (
                                <tr key={item.id} className="border-b dark:border-gray-600">
                                    <td className="py-2 px-4">{item.name}</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">${item.price}</td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                                            onClick={() => handleRemoveFromCart(item._id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* Add a row at the bottom to show total price */}
                            <tr className="border-t dark:border-gray-600">
                                <td colSpan="2" className="py-2 px-4 font-bold text-right">Total</td>
                                <td className="py-2 px-4 font-bold">${calculateTotalPrice()}</td>
                                <td><button onClick={handleConfirmPayment} className='btn bg-red-500 text-white'>Confirm Payment</button></td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-700 dark:text-gray-300">Your cart is empty.</p>
                )
            ) : (
                <p className="text-gray-700 dark:text-gray-300">Loading...</p>
            )}
        </div>
    );
};

export default Cart;
