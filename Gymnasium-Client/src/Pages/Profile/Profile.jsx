import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const Profile = () => {
    const { user } = useAuth()
    const [profileData, setProfileData] = useState(null); // State to store fetched data

    // Fetch user data using email
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:9000/users/${user?.email}`); // Replace with your API URL
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProfileData(data); // Store the data in state
    //             } else {
    //                 console.error('Error fetching data:', response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     };

    //     if (user?.email) { // Ensure email exists before making the request
    //         fetchData();
    //     }
    // }, [user?.email]);
    // console.log(profileData);
    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`http://localhost:9000/users/${user?.email}`)
        setProfileData(data);
    }
    console.log(profileData);
    


    return (
        <div className="max-w-sm mx-auto bg-red-500 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" >
            
            <div className="border-b px-4 pb-6">
                <div className="text-center my-4">
                    <img
                        className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src={user?.photoURL}
                        alt=""
                    />
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-white dark:text-white mb-1">{user?.displayName}</h3>
                        <div className="inline-flex text-white dark:text-gray-300 items-center">
                            {user?.email}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;