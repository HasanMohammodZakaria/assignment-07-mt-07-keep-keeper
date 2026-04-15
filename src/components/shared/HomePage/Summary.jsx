import React from 'react';

const Summary = () => {
    return (
        <div className='max-w-277.5 mx-auto border-b border-gray-200'>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8 md:py-10 px-4'>
                
               
                <div className='bg-white drop-shadow-md py-6 md:py-8 px-6 rounded-lg flex flex-col items-center text-center'>
                    <h3 className='text-2xl md:text-[32px] font-semibold text-[#244D3F]'>10</h3>
                    <p className='text-[#64748B] text-sm md:text-base'>Total Friends</p>
                </div>

               
                <div className='bg-white drop-shadow-md py-6 md:py-8 px-6 rounded-lg flex flex-col items-center text-center'>
                    <h3 className='text-2xl md:text-[32px] font-semibold text-[#244D3F]'>3</h3>
                    <p className='text-[#64748B] text-sm md:text-base'>On Track</p>
                </div>

             
                <div className='bg-white drop-shadow-md py-6 md:py-8 px-6 rounded-lg flex flex-col items-center text-center'>
                    <h3 className='text-2xl md:text-[32px] font-semibold text-[#244D3F]'>6</h3>
                    <p className='text-[#64748B] text-sm md:text-base'>Need Attention</p>
                </div>

              
                <div className='bg-white drop-shadow-md py-6 md:py-8 px-6 rounded-lg flex flex-col items-center text-center'>
                    <h3 className='text-2xl md:text-[32px] font-semibold text-[#244D3F]'>12</h3>
                    <p className='text-[#64748B] text-sm md:text-base whitespace-nowrap'>
                        Interactions This Month
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Summary;

