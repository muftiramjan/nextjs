import React from 'react';


export const generateMetadata = async({params}) => {
    const res =await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`)
    const postData =await res.json()
return {
    title: {
       absolute: `${postData.title}`
    },
    description: postData.body,
    keywords:postData.body.split(' ')
}
}


const fetchdata= async (id) => {
const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data= res.json();
return data
}


const page =async ({params}) => {
  const{title,body}= await fetchdata(params.id);
    return (
        <div>
            <h3>dainamik page</h3>
        <div className='border-4 p-5 m-6'>
        {title}
        {body}
        </div>
        </div>
    );
};

export default page;