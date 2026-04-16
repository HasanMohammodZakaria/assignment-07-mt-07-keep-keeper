import React, { useEffect, useState } from 'react';

const useFriends = () => {
   
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('/data.json');
            const data = await res.json();
            //console.log(data);
            setTimeout(() => {
                setFriends(data.friends);
                setLoading(false);
            }, 1500);
        }
        fetchData();
    },[]);

    //console.log(friends, "Friends");
    //console.log(loading, "loading");
    return {friends, loading};

    
};

export default useFriends;