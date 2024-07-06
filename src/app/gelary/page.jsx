import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='h-screen p-12'>
            <h3 className='text-2xl'> About page</h3>
            <div>
                {
                    [11, 12, 13, 14, 15, 67, 68]?.map((img) => (
                        <Image key={img} src={`/images/${img}.jpg`} alt="" height={400} width={1900} />
                    ))
                }
            </div>

        </div>
    );
};

export default page;