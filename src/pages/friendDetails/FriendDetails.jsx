import React, { useContext } from "react";

import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { CircleLoader } from "react-spinners";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { PiArchive, PiChatTextBold, PiVideoCameraLight } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { TimeLinesContext } from "../../context/TimeLinesContext";




const FriendDetails = () => {

  const { id } = useParams();
  const { friends, loading } = useFriends();
  const {timeLines, setTimeLines} = useContext(TimeLinesContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircleLoader color="#244D3F" />
      </div>
    );
  }

  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  if (!expectedFriend) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        No friend found!
      </div>
    );
  }

 
  const capitalWords = (words) => {
    return words
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

 
  const statusStyle = {
    overdue: "bg-[#EF4444] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    "on-track": "bg-[#244D3F] text-white",
  };


  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const monthRaw = date.toLocaleString("en-US", { month: "short" });

    const month =
      monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1).toLowerCase();

    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const handleActiveButton = (type) => {
    const date = new Date();
    const dateFormeted = date.toLocaleString('en-US', {
      month:"long",
      day: "numeric",
      year: "numeric"
    });

    const friendData = {
      name: expectedFriend.name,
      type: type,
      date: dateFormeted
    };

    setTimeLines([...timeLines, friendData]);
  };

  //console.log(timeLines, "TimeLines");

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-stretch my-20 px-4">
      
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="w-28 h-28 rounded-full"
          />

          <h2 className="text-lg font-semibold mt-3">{expectedFriend.name}</h2>

          <span
            className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${
              statusStyle[expectedFriend.status]
            }`}
          >
            {capitalWords(expectedFriend.status)}
          </span>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {expectedFriend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 px-3 py-1 rounded-full text-xs font-bold"
              >
                {capitalWords(tag)}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-3 text-sm">"{expectedFriend.bio}"</p>

          <p className="text-xs text-gray-400 mt-2">
            Preferred: {expectedFriend.email}
          </p>
        </div>

        
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 text-[#1F2937] font-medium bg-white shadow-sm py-3 rounded-lg hover:bg-gray-50 ">
            <HiOutlineBellSnooze size={24} className="text-[#1F2937]"/> Snooze 2 weeks
          </button>

          <button className="flex items-center justify-center gap-2 text-[#1F2937] font-medium bg-white shadow-sm py-3 rounded-lg hover:bg-gray-50">
            <PiArchive size={24} className="text-[#1F2937]"/> Archive
          </button>

          <button className="flex items-center justify-center gap-2 bg-white shadow-sm py-3 rounded-lg font-medium text-[#EF4444] hover:bg-red-50">
            <RiDeleteBin5Line size={24} className="text-[#EF4444]" /> Delete
          </button>
        </div>
      </div>

    
      <div className="w-full md:w-3/4 flex flex-col gap-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-sm rounded-lg py-8 text-center">
            <h3 className="text-[30px] font-bold text-[#244D3F] mb-2">
              {expectedFriend.days_since_contact}
            </h3>
            <p className="text-[#64748B] text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg py-8 text-center">
            <h3 className="text-[30px] font-bold text-[#244D3F] mb-2">
              {expectedFriend.goal}
            </h3>
            <p className="text-[#64748B] text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white shadow-sm rounded-lg py-8 text-center">
            <h3 className="text-[30px] font-bold text-[#244D3F]  mb-2">
              {formatDate(expectedFriend.next_due_date)}
            </h3>
            <p className="text-[#64748B] text-sm">Next Due</p>
          </div>
        </div>

       
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#244D3F]">
            Relationship Goal
            </h3>
            <button className="btn">Edit</button>
          </div>

          <p className="text-gray-500 mt-2">
            Connect every{" "}
            <span className="font-bold text-black">
              {expectedFriend.goal} days
            </span>
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">
            <button onClick={()=>handleActiveButton("call")} className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
              <BiPhoneCall size={30} className="text-[#1F2937]"/>
              Call
            </button>

            <button onClick={()=>handleActiveButton("text")} className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
              <PiChatTextBold size={30} className="text-[#1F2937]"/>
              Text
            </button>

            <button onClick={()=>handleActiveButton("video")} className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
              <PiVideoCameraLight size={30} className="text-[#1F2937]" />
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
