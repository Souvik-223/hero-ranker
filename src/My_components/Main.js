import React from 'react'
import Stats from './Main_component/Stats';
import Biography from './Main_component/Biography.js';
import Appearance from './Main_component/Appearance';
import Info from './Main_component/Info';

function option1() {
    Optionselector("Stats")
}
function option2() {
   Optionselector("Biography")
}
function option3() {
    Optionselector("Appearance")
}
function option4() {
    Optionselector("Info")
}

function Optionselector(option) {
    switch (option) {
        case "Stats":
            return(
                <Stats/>
            )
            break;
        case "Biography":
            return(
                <Biography/>
            )
            break;
        case "Appearance":
            return(
                <Appearance/>
            )
            break;
        case "Info":
            return(
                <Info/>
            )
            break;
    
        default:
            break;
    }
}

export default function Main() {
    return (
        <section className="text-white body-font overflow-hidden bg-[#0f0f0f]">
            <div className="container px-0 py-14 mx-auto">
                <div className="lg:w-auto mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:pl-10 lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    <div className="lg:w-4/6 w-full lg:pl-10 mt-6 lg:mt-0 lg:pr-20">
                        <h1 className="text-red-600 text-5xl title-font font-bold mb-5 ">DareDevil</h1>
                        <div className='options font-bold flex flex-row space-x-1 w-auto text-center'>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4' onClick={option1}>Stats</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4' onClick={option2}>Biography</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4' onClick={option3}>Appearance</button>
                            <button className='hover:bg-red-400  cursor-pointer  bg-[#1a1a1a] focus:bg-red-600 rounded-lg px-4 py-2 w-1/4' onClick={option4}>More Info</button>
                        </div>
                        <hr className='text-white my-3'></hr>
                        {/* <Stats/> */}
                        {/* <Biography/> */}
                        <Appearance/>
                        {/* <Info/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}