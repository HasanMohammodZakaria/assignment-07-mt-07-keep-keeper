import React, { useEffect, useState } from 'react';
import FriendCard from '../../ui/FriendCard';
import { CircleLoader} from 'react-spinners';

const Friends = () => {

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

    console.log(friends, "Friends");
    console.log(loading, "loading");


    return (
        <div className='max-w-277.5 mx-auto mt-10 px-4'>
            <h2 className='text-[24px] font-semibold text-[#1F2937]text-center md:text-left'>Your Friend</h2>

            {loading ? (
                <div className='flex justify-center items-center'>
                    <CircleLoader color="#244D3F"/>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
                {
                    friends.map(friend => {
                        return <FriendCard key={friend.id} friend={friend}/>
                    })
                }
            </div>
            )}
        </div>
    );
};

export default Friends;