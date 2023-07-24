import React from 'react'

export default function Navbar(){
    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Intellegence</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Strength</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Speed</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Combat</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Durability</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Power</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
        </div>
    )  
}