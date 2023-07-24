import React from 'react'

export default function Navbar() {
    return (
        <section className="text-white body-font overflow-hidden bg-black">
            <div className="container px-0 py-14 mx-auto">
                <div className="lg:w-auto mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="pl-10 lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    <div className="lg:w-4/6 w-full lg:pl-10 mt-6 lg:mt-0">
                        <h1 className="text-red-600 text-5xl title-font font-bold mb-5 ">DareDevil</h1>
                        <div className='options font-bold flex flex-row space-x-1 w-auto text-center'>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4'>Stats</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4'>Biography</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4'>Appearance</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4'>More Info</button>
                        </div>
                        <hr className='text-white my-3'></hr>
                    </div>
                </div>
            </div>
        </section>
    )
}