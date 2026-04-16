// import React from "react";
// import { useParams } from "react-router";
// import useFriends from "../../hooks/useFriends";
// import { CircleLoader } from "react-spinners";
// import { HiOutlineBellSnooze } from "react-icons/hi2";
// import { PiArchive, PiChatTextBold, PiVideoCameraLight } from "react-icons/pi";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { BiPhoneCall } from "react-icons/bi";

// const FriendDetails = () => {
//   const { id } = useParams();
//   const { friends, loading } = useFriends();

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center">
//         <CircleLoader color="#244D3F" />
//       </div>
//     );
//   }

//   const expectedFriend = friends.find((friend) => String(friend.id) === id);

//   if (!expectedFriend) {
//     return <h2>no friend found</h2>;
//   }

//   const capitalWords = (words) => {
//     return words
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   const statusStyle = {
//     overdue: "bg-[#EF4444] text-[12px] font-medium text-white rounded-full p-3",
//     "almost due":
//       "bg-[#EFAD44] text-[12px] font-medium text-white rounded-full p-3",
//     "on-track":
//       "bg-[#244D3F] text-[12px] font-medium text-white rounded-full p-3",
//   };

//   return (
//     <div className="max-w-285 mx-auto flex justify-center items-center gap-6 my-20">
//       {/* left side */}
//       <div className="w-25% ">
//         <div className="flex flex-col justify-center items-center bg-white drop-shadow-md px-12 py-6 rounded-lg">
//           <img
//             src={expectedFriend.picture}
//             alt={expectedFriend.name}
//             className="w-30 h-30 rounded-full"
//           />
//           <h2 className="text-[20px] text-[#1F2937] font-semibold mt-3">
//             {expectedFriend.name}
//           </h2>
//           <div>
//             <button
//               className={`px-2 py-1 text-[12px] font-medium rounded-full text-white mt-2
//                 ${statusStyle[expectedFriend.status]}`}
//             >
//               {capitalWords(expectedFriend.status)}
//             </button>
//           </div>
//           <div className="flex gap-2 mb-2">
//             {expectedFriend.tags.map((tag, index) => {
//               return (
//                 <button
//                   key={index}
//                   className="bg-[#CBFADB] px-3 py-1 rounded-full mt-2"
//                 >
//                   {capitalWords(tag)}
//                 </button>
//               );
//             })}
//           </div>
//           <h3 className="text-center text-[#64748B] font-medium">
//             "{expectedFriend.bio}"
//           </h3>
//           <p className="text-[14px] text-[#64748B]">
//             Preferred: {expectedFriend.email}
//           </p>
//         </div>

//         {/* button */}
//         <div className="mt-4">
//           <button className="flex items-center justify-center gap-1.5 bg-white drop-shadow-sm w-full py-4 rounded-lg text-[16px] font-medium text-[#1F2937] mb-2">
//             <HiOutlineBellSnooze size={22} className="text-[#1F2937]" /> Snooze
//             2 weeks
//           </button>

//           <button className="flex items-center justify-center gap-1.5 bg-white drop-shadow-sm w-full py-4 rounded-lg text-[16px] font-medium text-[#1F2937] mb-2">
//             <PiArchive size={22} className="text-[#1F2937]" /> Archive
//           </button>

//           <button className="flex items-center justify-center gap-1.5 bg-white drop-shadow-sm w-full py-4 rounded-lg text-[16px] font-medium text-[#EF4444] mb-2">
//             <RiDeleteBin5Line size={22} className="text-[#EF4444]" /> Delete
//           </button>
//         </div>
//       </div>

//       {/* right side */}
//       <div className="w-75% ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">

//           <div className="bg-white shadow-sm py-8 px-4 rounded-lg flex flex-col items-center text-center">
//             <h3 className="text-xl md:text-2xl font-semibold text-[#244D3F]">
//               {expectedFriend.days_since_contact}
//             </h3>
//             <p className="text-[#64748B] text-xs md:text-sm">
//               Days Since Contact
//             </p>
//           </div>

//           <div className="bg-white shadow-sm py-8 px-4 rounded-lg flex flex-col items-center text-center">
//             <h3 className="text-xl md:text-2xl font-semibold text-[#244D3F]">
//               {expectedFriend.goal}
//             </h3>
//             <p className="text-[#64748B] text-xs md:text-sm">Goal (Days)</p>
//           </div>

//           <div className="bg-white shadow-sm py-8 px-4 rounded-lg flex flex-col items-center text-center">
//             <h3 className="text-sm md:text-2xl font-semibold text-[#244D3F] whitespace-nowrap">
//               {expectedFriend.next_due_date}
//             </h3>
//             <p className="text-[#64748B] text-xs md:text-sm">Next Due</p>
//           </div>
//         </div>
//         <div className=" bg-white drop-shadow-md px-4 py-6 rounded-lg">
//           <div className="flex justify-between items-center">
//             <h3 className="text-[20px] text-[#244D3F] font-medium">Relationship Goal</h3>
//             <button className="btn">Edit</button>
//           </div>
//           <p className="text-[18px] text-[#64748B]">Connect every <span className="text-[18px] text-[#1F2937] font-bold">{expectedFriend.goal} days</span></p>
//         </div>
//         <div className=" bg-white drop-shadow-md px-4 py-6 rounded-lg mt-6">
//           <h3 className="text-[20px] text-[#244D3F] font-medium mb-5">Quick Check-In</h3>
//           <div className="flex justify-between gap-4">
//             <button className="bg-gray-200 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
//               <BiPhoneCall size={30} className="text-[#1F2937]"/> Call
//             </button>

//             <button className="bg-gray-200 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937]  hover:bg-white hover:drop-shadow-md transition">
//               <PiChatTextBold size={30} className="text-[#1F2937]"/> Text
//             </button>

//             <button className="bg-gray-200 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937]  hover:bg-white hover:drop-shadow-md transition">
//               <PiVideoCameraLight size={30} className="text-[#1F2937]"/> Video
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FriendDetails;

import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { CircleLoader } from "react-spinners";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { PiArchive, PiChatTextBold, PiVideoCameraLight } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();

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
            className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${
              statusStyle[expectedFriend.status]
            }`}
          >
            {capitalWords(expectedFriend.status)}
          </span>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {expectedFriend.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 px-3 py-1 rounded-full text-xs"
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
            <button className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
              <BiPhoneCall size={30} className="text-[#1F2937]"/>
              Call
            </button>

            <button className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
              <PiChatTextBold size={30} className="text-[#1F2937]"/>
              Text
            </button>

            <button className="bg-gray-100 drop-shadow-sm w-full flex flex-col items-center justify-center  rounded-lg gap-2 py-4 text-[18px] text-[#1F2937] hover:bg-white hover:drop-shadow-md transition">
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
