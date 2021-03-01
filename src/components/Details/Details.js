import React from 'react';
import './Details.css'

const Details = (props) => {
    const {name,email,salary} = props.friend;
    const handleFriend = props.handleFriend;
    return (
        <div className="details">
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>$ {salary}</h4>
            <button onClick={()=>handleFriend(props.friend)}>Add Friend</button>
        </div>
    );
};

export default Details;