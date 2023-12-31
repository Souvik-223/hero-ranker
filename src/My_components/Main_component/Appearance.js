import React from 'react'

export default function Appearance() {
    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Gender</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Weight</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Race</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Eyes</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Height</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Hair</h1>
                <h1 className='font-bold text-2xl'>value</h1>
            </div>
        </div>
    )
}