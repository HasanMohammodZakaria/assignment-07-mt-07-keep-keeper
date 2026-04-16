import { HiPlus } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-277.5 mx-auto mt-10 md:mt-16 lg:mt-20 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-[#1F2937] text-center leading-tight">
        Friends to keep close in your life
      </h2>

      <p className="text-sm sm:text-base text-[#64748B] mt-4 mb-6 md:mb-8 text-center max-w-125 lg:max-w-162.5 mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br className="hidden lg:block" /> relationships that matter most.
      </p>

      <button className="flex items-center gap-2 bg-[#244D3F] text-white px-4 py-2.5 md:px-5 md:py-3 rounded-lg text-sm md:text-base hover:bg-[#1b3a30] transition">
        <HiPlus size={18} />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;
