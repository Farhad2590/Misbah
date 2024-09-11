// import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/OW3sfR5uNv.json";
import toast from "react-hot-toast";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3d0b190b-8d37-4258-bfed-10a300521a4e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Messege Sent Sucessfully");

        }
    };
    return (
        <section className=' '>
            <div className='flex items-center justify-center flex-col lg:flex-row gap-5 my-4'>
                <div className='w-full lg:w-1/3'>
                    <Lottie animationData={animation} loop={true}></Lottie>
                </div>

                <div >
                    <form onSubmit={onSubmit} className='flex flex-col'>
                        <label className=' text-lg mt-2 mb-1'>Name:</label>
                        <input type="text" name="user_name" placeholder="Enter Name" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                        <label className=' text-lg mt-2 mb-1'>Email:</label>
                        <input type="email" name="user_email"
                            placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                        <label className=' text-lg mt-3 mb-1'>Message:</label>

                        <textarea type="text" placeholder="Type Your Suggestion" name="message" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />


                        <div className='justify-center'>
                            <button type="submit" className='btn bg-red-500 text-white my-5'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;