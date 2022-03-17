import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../home/Images/Homepage_Bureas_Approvals.jpg'
import Img2 from '../home/Images/Homepage_Bureas_Policy.jpg'
import Img3 from '../home/Images/Homepage_Bureas_RIFD.JPG'
import Img4 from '../home/Images/Homepage_Bureaus_Administration.jpg'


export default function bureaus() {
  return (
      <>
      <div className="flex items-center justify-center">
					<hr
						style={{
							height: "3px",
							backgroundColor: "#0C5C8C",
							width: "500px",
						}}
					/>
					<h1 className="p-4  text-[2rem] text-[#0C5C8C]">Bureaus</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: "#0C5C8C",
							width: "500px",
						}}
					/>
				</div>
    <Carousel className='w-[90vw] pl-[100px] pt-[10px] pb-[20px]' showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false}>
                <div>
                        <p className='absolute top-[83%] z-10'>
                            <p className='text-left pl-[15px] text-white font-bold'>Approval</p>
                            <p className='text-[10px] text-white text-left pl-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis voluptatibus explicabo corrupti a consequuntur delectus quod earum, quas fuga.</p>
                            <a href='#'><p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>Learn More!</p></a>
                        </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img1} className="rounded-md" />
                    {/* <p className="legend">Legend 1</p> */}
                    
                </div>
                <div>
                        <p className='absolute top-[83%] z-10'>
                            <p className='text-left pl-[15px] text-white font-bold'>Approval</p>
                            <p className='text-[10px] text-white text-left pl-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis voluptatibus explicabo corrupti a consequuntur delectus quod earum, quas fuga.</p>
                            <a href='' target="_blank"><p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>Learn More!</p></a>
                        </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img2} className="rounded-md" />
                    {/* <p className="legend">Legend 1</p> */}
                    
                </div>
                <div>
                        <p className='absolute top-[83%] z-10'>
                            <p className='text-left pl-[15px] text-white font-bold'>Approval</p>
                            <p className='text-[10px] text-white text-left pl-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis voluptatibus explicabo corrupti a consequuntur delectus quod earum, quas fuga.</p>
                            <a href='' target="_blank"><p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>Learn More!</p></a>
                        </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img3} className="rounded-md"  />
                    {/* <p className="legend">Legend 1</p> */}
                    
                </div>
                <div>
                        <p className='absolute top-[83%] z-10'>
                            <p className='text-left pl-[15px] text-white font-bold'>Approval</p>
                            <p className='text-[10px] text-white text-left pl-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis voluptatibus explicabo corrupti a consequuntur delectus quod earum, quas fuga.</p>
                            <a href='' target="_blank"><p className='text-[15px] pt-[5px] text-left pl-[15px] text-cyan-600'>Learn More!</p></a>
                        </p>
                    <div className='absolute top-[82%] h-[80px] w-[100%] bg-black opacity-50'></div>
                    <img src={Img4} className="rounded-md"  />
                    {/* <p className="legend">Legend 1</p> */}
                    
                </div>
            </Carousel>
            </>
  )
}