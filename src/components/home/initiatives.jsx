import React from "react";
import pie from "../../assets/images/initiatives-pie.svg";
import bulb from "../../assets/images/light-bulb.svg";
import study from "../../assets/images/study.svg";

export default function initiatives() {
    return (
        <div>
            <div className='relative w-screen py-8'>
                <hr className=' border-orange-500 border-[0.5px]' />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 text-2xl font-light'>
                    Initiatives and Schemes
                </p>
            </div>
            <div className='relative w-screen'>
                <img
                    src={pie}
                    alt='pie graph'
                    width='50%'
                    className='mx-auto '
                />
                <img
                    src={bulb}
                    alt='bulb'
                    width='70px'
                    className='absolute top-[21%] left-[59%]'
                />
                <i class='fa-solid fa-graduation-cap absolute top-[62%] left-[63%] text-white text-5xl'></i>
                <i class='fa-solid fa-award absolute top-[46%] left-[31.7%] text-white text-6xl'></i>
                <img
                    src={study}
                    alt='bulb'
                    width='70px'
                    className='absolute top-[77%] left-[43%]'
                />
                <div></div>
            </div>
        </div>
    );
}
