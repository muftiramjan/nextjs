import React from 'react';
import { Headland_One } from 'next/font/google';

const getTime = async() => {
    const res= await fetch('http://localhost:3000/time',{cache:'no-store'})
    const data =await res.json();
    return data.currentTime
}

const Headland= Headland_One({
    weight:['400'],subsets:['latin']
})
export const metadata = {
    title: {
        absolute: 'about'
    },
    description: "about next js",
    keywords: ['about','aboute page'],
  };
const page = () => {
    const currentTime=getTime()
    return (
        <div className={`${Headland.className}h-screen p-10`}>
            <h2 className='text-2xl'>About page :{currentTime}</h2>
        </div>
    );
};

export default page;