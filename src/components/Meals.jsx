'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search,setsearch]= useState('a');
    const [meals,setmeals]= useState(['']);
    const [error,seterror]= useState('');

const loaddata= async() => {
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    const data = await res.json();
    setmeals (data.meals)
    console.log(data.meals);
    seterror('')
    }
    catch(error){
        seterror('no data font');
    }
}

    const handler =(e) => {
        console.log(e.target.value);
        setsearch(e.target.value)
    }
useEffect(() =>{
    loaddata()
},[])

    return (
        <div >
            <input onChange={handler} className='bg-slate-600 p-2 text-white' type="text" placeholder='search ' />
            <button onClick={() => loaddata()} className='bg-red-300 p-3 mt-2 rounded-2xl'>search</button>
            <div className='grid grid-cols-3 p-6'>
{
   meals.length >0 && !error && meals?.map( (mele) => (
        <div key={mele?.idMeal} className='border-4 p-5'>
            <Image  src={mele.strMealThumb} alt={mele.strMeal} width={500} height={500}/>
            <h4>{mele.strMeal}</h4>
            <p>{mele.strInstructions}</p>

        </div>
    ))
}
{
    error && <div>
        no data faont
    </div>
}
            </div>
        </div>
    );
};

export default Meals;