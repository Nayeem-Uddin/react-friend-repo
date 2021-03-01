import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Details from '../Details/Details';
import './Friend.css';
import friendsData from '../fakeData/data.json'

const Friend = () => {
    const [friends, setFriend] = useState([]);
    useEffect(()=>{
        setFriend(friendsData);
        console.log(friendsData);
    },[])
    
    const [count, setCount] = useState([]);
    
    const handleFriend = (friend) => {
        console.log('friend handled', friend.name);
        const newCount = [...count,friend]
        setCount(newCount);
    }

    return (
        <div className="friends-container">
            <div className="details-container">
            {
                <h4>Dynamic friend: {friends.length}</h4>
            }
            {
                <h4>Friend Count: {count.length}</h4>
            }
            {
                friends.map(friend => 
                    <Details friend={friend}
                    handleFriend={handleFriend}
                    ></Details>)
            }
                    
            </div>
            <div className="count-container">
                    <Count count={count}></Count>
            </div> 
        </div>
    );
};

export default Friend;