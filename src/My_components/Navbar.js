import React from 'react'

export default function Navbar(){
    return (
            <div className="container mx-auto flex flex-wrap p-5 mb-1 flex-col md:flex-row items-center bg-[#0f0f0f] shadow-lg shadow-slate-400">
                <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-5xl font-bold"><span className='text-red-600'>Hero</span>Ranker.io</span>
                </div>
                <div className="md:ml-auto flex flex-wrap items-center text-center justify-center font-bold text-white">
                    <input placeholder='Search' className='px-16 py-2 items-center border border-white rounded-full bg-[#0f0f0f] text-center'></input>
                </div>
            </div>
    )
}