import React from "react";
import AS from "../../assets/images/AS.jpeg";
import CVR from "../../assets/images/CVR.jpeg";
import MT from "../../assets/images/MT.jpeg";
import DRAP from "../../assets/images/DRAPJ.jpeg";
export default function Eminent() {
    return (
        <div className='flex flex-col items-center pt-3'>
            <div className='flex items-center justify-center'>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#F37020",
                        width: "500px",
                    }}
                />
                <h1 className='p-4  text-[2rem]'>Eminent and Unforgettables</h1>
                <hr
                    style={{
                        height: "3px",
                        backgroundColor: "#F37020",
                        width: "500px",
                    }}
                />
            </div>

            <div className='grid grid-cols-2 gap-4 p-2 pt-14'>
                <img src={AS} alt='Amartya Sen' style={{ width: "600px" }} />
                <img
                    src={DRAP}
                    alt='Dr. APJ Abdul Kalam'
                    style={{ width: "600px" }}
                />
                <img src={MT} alt='Mother Teresa' style={{ width: "600px" }} />
                <img src={CVR} alt='C.V. Raman' style={{ width: "600px" }} />
            </div>
        </div>
    );
}
