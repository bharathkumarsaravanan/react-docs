import React, {useState} from "react";

const UseStateHook = () => {
    const [userDetails, setUserDetails] = useState({});

    const updateDetails = (e) => {
        const {name, value} = e.target;
        setUserDetails(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
        <div>
            <h2>useState Hook</h2>
            <div>
                <input type="text" placeholder="Enter your name" name="name" value={userDetails.name || ""} onChange={updateDetails} />
                <input type="number" placeholder="Enter your age"  name="age" value={userDetails.age || ""} onChange={updateDetails} />
                <input type="text" placeholder="Enter your city" name="city" value={userDetails.city || ""} onChange={updateDetails} />
            </div>
            <div>
                <h2>User Details</h2>
                <p>Name: {userDetails.name}</p>
                <p>Age: {userDetails.age}</p>
                <p>City: {userDetails.city}</p>
            </div>
        </div>
    )
};

export default UseStateHook;