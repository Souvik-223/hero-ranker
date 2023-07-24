import React from 'react'

export default function Info(){
    return (
        <div className='flex flex-col space-y-4'>
            <div className='space-x-4 lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Work:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='space-x-4 lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Location:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Teams:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Family:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
        </div>

    )
}