import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const getdata = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =await res.json();
    // if(data){
    //     redirect(`/post/${data[0].id}`)
    // }
    return data
}
const page = async () => {
    const datapost = await getdata();
    return (
        <div className=' grid grid-cols-4 p-8 gap-4 '>
            {
                datapost.slice(0,25).map(({title,body,id}) => (
                    <div key={id} className='border-4'>
                  <h3>{title}{body}</h3>  
                  <h4> </h4>
                   <button className='bg-red-400 p-3 rounded-2xl mt-4'><Link href={`/post/${id}`}>postditails</Link></button>
                    </div>
                ))
            }
        </div>
    );
};

export default page;