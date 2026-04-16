import React from 'react';

const FriendCard = ({friend}) => {
    
    const {name,picture,days_since_contact,status,tags} = friend;

    const capitalWords = (words) => {
        return words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };

    const statusStyle = {
        "overdue": "bg-[#EF4444] text-[12px] font-medium text-white rounded-full p-3",
        "almost due": "bg-[#EFAD44] text-[12px] font-medium text-white rounded-full p-3",
         "on-track": "bg-[#244D3F] text-[12px] font-medium text-white rounded-full p-3"
    };

    return (
        <div className='flex flex-col justify-center items-center bg-white drop-shadow-md py-6 rounded-lg'>
            <img src={picture} alt={name} className='w-30 h-30 rounded-full mb-6'/>
            <h2 className='text-[20px] text-[#1F2937] font-semibold mb-3'>{name}</h2>
            <p className='text-[12px] text-[#64748B] mb-2'>{days_since_contact}d ago</p>
            <div className='flex gap-2 mb-2'>
                {
                    tags.map((tag,index) => {
                        return <button key={index} className='bg-[#CBFADB] px-4 py-2 rounded-full'>{capitalWords(tag)}</button>
                    })
                }
            </div>
            <div>
                <button className={`px-3 py-2 text-[12px] font-medium rounded-full text-white
                ${statusStyle[status]}`}>
                {capitalWords(status)}
            </button>
            </div>
        </div>
    );
};

export default FriendCard;