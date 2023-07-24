import React from 'react'

export default function Navbar(){
    return (
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black">
                <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold"><span className='text-red-600'>Hero</span>Ranker.io</span>
                </div>
                <div className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold text-zinc-800">
                    <input placeholder='Search' className='px-20 py-2 items-center border border-black rounded-full'></input>
                </div>
            </div>
    )
}