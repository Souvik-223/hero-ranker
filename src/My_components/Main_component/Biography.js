import React from 'react'

export default function Biography(){
    return (
        <div className='flex flex-col space-y-4'>
            <div className='space-x-4 lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Full-name:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Alter-ego:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Aliases:</h1>
                <ul className='font-bold text-l list-disc lg:pl-12'>
                    <li>value</li>
                </ul>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Place-of-birth:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
            <div className='lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-xl'>Publisher:</h1>
                <h3 className='font-bold text-l'>value</h3>
            </div>
        </div>
    )
}