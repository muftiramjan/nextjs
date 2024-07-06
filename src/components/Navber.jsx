"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const pathName= usePathname();
    const router=useRouter();
  
    const links= [
       
        {
            title:'post',
            path:'/post'
        },
        {
            title:'meles',
            path:'/meles'
        },
        {
            title:'about',
            path:'/about'
        },
        {
            title:'gelary',
            path:'/gelary'
        },
       
    ]
    const handlar =() => {
        router.push('/login')
    }

    if(pathName.includes('dashbord'))
        return(
    <div className='bg-lime-300 p-5'>
        dashbors layot
    </div>
        )

    return (
        <div>
            <nav className="bg-red-500 px-7 py-4 flex justify-between">
                <h2 className='text-slate-200 text-3xl'>Next <span className='text-indigo-800'>js-project</span></h2>
                <ul className='flex items-center space-x-5'>
                   {
                    links.map( (link) => <Link className={`${pathName ===link.path && "text-neutral-200"}`} key={link.title} href={link.path}>{link.title}</Link>)
                   }
                </ul>
                <button onClick={handlar} className='text-white'>login</button>
            </nav>
        </div>
    );
};

export default Navber;