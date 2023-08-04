import React from 'react'

export default function Stats(props){
    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Intellegence</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.intelligence}</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Strength</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.strength}</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Speed</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.speed}</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Combat</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.combat}</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Durability</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.durability}</h1>
            </div>
            <div className='flex flex-row space justify-between lg:px-10 bg-black lg:py-3'>
                <h1 className='font-bold text-2xl'>Power</h1>
                <h1 className='font-bold text-2xl'>{props.componentdata.power}</h1>
            </div>
        </div>
    )  
}

 